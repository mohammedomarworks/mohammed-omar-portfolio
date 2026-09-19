import type { Metadata, Viewport } from "next";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mohammed Omar | Software Engineering Student",
  description:
    "Portfolio of Mohammed Omar, a Software Engineering student at Daffodil International University, showcasing web development projects, software engineering work, and creative technology projects.",
  authors: [{ name: "Mohammed Omar" }],
  metadataBase: new URL("https://mohammedomarworks.github.io"),
  openGraph: {
    title: "Mohammed Omar | Software Engineering Student",
    description:
      "Software Engineering student at Daffodil International University showcasing projects in web development and software engineering.",
    type: "website",
    url: "https://mohammedomarworks.github.io",
    siteName: "Mohammed Omar Portfolio",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mohammed Omar — Software Engineering Student",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohammed Omar | Software Engineering Student",
    description:
      "Software Engineering student at Daffodil International University showcasing projects in web development and software engineering.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "32x32" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180" }],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0f19" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="light">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const storedTheme = localStorage.getItem('mo_portfolio_theme');
                if (storedTheme === 'dark') {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className="min-h-screen bg-background text-foreground transition-colors duration-200 selection:bg-indigo-500 selection:text-white">
        {/* Skip to main content for screen readers and keyboard accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-indigo-600 focus:text-white focus:rounded-md focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-white"
        >
          Skip to main content
        </a>

        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
