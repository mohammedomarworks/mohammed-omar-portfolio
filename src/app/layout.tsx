import type { Metadata, Viewport } from "next";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import "./globals.css";

const SITE_URL = "https://mohammedomarportfolio.netlify.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Mohammed Omar | Software Engineering Student",
  description:
    "Portfolio of Mohammed Omar, a Software Engineering student at Daffodil International University, showcasing web development projects, software engineering work, and creative technology projects.",
  authors: [{ name: "Mohammed Omar", url: SITE_URL }],
  creator: "Mohammed Omar",
  alternates: {
    canonical: "https://mohammedomarportfolio.netlify.app/",
  },
  openGraph: {
    title: "Mohammed Omar | Software Engineering Student",
    description:
      "Portfolio of Mohammed Omar, a Software Engineering student at Daffodil International University, showcasing web development and software engineering projects.",
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
    title: "Mohammed Omar | Software Engineering Student",
    description:
      "Portfolio of Mohammed Omar, a Software Engineering student at Daffodil International University, showcasing web development and software engineering projects.",
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
      "name": "Mohammed Omar | Software Engineering Student",
      "description":
        "Portfolio of Mohammed Omar, a Software Engineering student at Daffodil International University, showcasing web development projects, software engineering work, and creative technology projects.",
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
        "Portfolio of Mohammed Omar, a Software Engineering student at Daffodil International University, showcasing web development and software engineering projects.",
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
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
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
