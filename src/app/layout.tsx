import type { Metadata, Viewport } from "next";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import "./globals.css";

const SITE_URL = "https://mohammedomarportfolio.netlify.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Mohammed Omar | Systems & Software Engineering Student",
  description:
    "Software Engineering Student building native macOS systems, 3D simulations, and full-stack web apps at Daffodil International University.",
  authors: [{ name: "Mohammed Omar", url: SITE_URL }],
  creator: "Mohammed Omar",
  alternates: {
    canonical: "https://mohammedomarportfolio.netlify.app/",
  },
  openGraph: {
    title: "Mohammed Omar | Systems & Software Engineering Student",
    description:
      "Software Engineering Student building native macOS systems, 3D simulations, and full-stack web apps.",
    type: "website",
    url: "https://mohammedomarportfolio.netlify.app/",
    siteName: "Mohammed Omar Portfolio",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mohammed Omar - Software Engineering Student",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohammed Omar | Systems & Software Engineering Student",
    description:
      "Software Engineering Student building native macOS systems, 3D simulations, and full-stack web apps.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "u-nmIp5NmCEqUaj67MtLM_kFl6VctFzNc0UwkJ9UFLw",
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "32x32" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://mohammedomarportfolio.netlify.app/#website",
      "url": "https://mohammedomarportfolio.netlify.app/",
      "name": "Mohammed Omar | Systems & Software Engineering Student",
      "description":
        "Software Engineering Student building native macOS systems, 3D simulations, and full-stack web apps at Daffodil International University.",
      "publisher": {
        "@id": "https://mohammedomarportfolio.netlify.app/#person",
      },
      "inLanguage": "en-US",
    },
    {
      "@type": "Person",
      "@id": "https://mohammedomarportfolio.netlify.app/#person",
      "name": "Mohammed Omar",
      "jobTitle": "Software Engineering Student",
      "description":
        "Software Engineering Student building native macOS systems, 3D simulations, and full-stack web apps.",
      "url": "https://mohammedomarportfolio.netlify.app/",
      "image": "https://mohammedomarportfolio.netlify.app/images/profile.jpg",
      "affiliation": {
        "@type": "EducationalOrganization",
        "name": "Daffodil International University",
      },
      "alumniOf": {
        "@type": "EducationalOrganization",
        "name": "Daffodil International University",
      },
      "sameAs": [
        "https://github.com/mohammedomarworks",
        "https://www.linkedin.com/in/omar-mohammed-2118b5428/",
      ],
    },
  ],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const storedTheme = localStorage.getItem('mo_portfolio_theme');
                if (storedTheme === 'light') {
                  document.documentElement.classList.remove('dark');
                } else {
                  document.documentElement.classList.add('dark');
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className="min-h-screen bg-background text-foreground transition-colors duration-200 selection:bg-zinc-800 selection:text-emerald-400">
        {/* Skip to main content for screen readers and keyboard accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-zinc-900 focus:text-white focus:border focus:border-white/20 focus:rounded-md focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 font-mono text-xs"
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
