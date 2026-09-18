import type { Metadata, Viewport } from "next";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mohammed Omar | Software Engineering Student",
  description: "Personal developer portfolio of Mohammed Omar, Software Engineering student at Daffodil International University. Building practical, modern web applications and software systems.",
  keywords: [
    "Mohammed Omar",
    "Software Engineering",
    "Daffodil International University",
    "DIU",
    "Web Developer",
    "React",
    "Next.js",
    "TypeScript",
  ],
  authors: [{ name: "Mohammed Omar" }],
  openGraph: {
    title: "Mohammed Omar | Software Engineering Student",
    description: "Software Engineering student at Daffodil International University building modern web applications.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#faf9f6" },
    { media: "(prefers-color-scheme: dark)", color: "#0d0f17" },
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
