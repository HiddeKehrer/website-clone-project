import type { Metadata } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";

const siteName = "Pipeguru";
const defaultTitle = `${siteName} | Speed up your growth experiments`;
const defaultDescription = "Launch AI powered onboarding flows, in-app messages, and A/B tests without new app releases";

export const metadata: Metadata = {
  title: {
    template: `%s | ${siteName}`,
    default: defaultTitle,
  },
  description: defaultDescription,
  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    url: "https://pipeguru.ai",
    siteName: siteName,
    images: [
      {
        url: `https://wafrow.com/i/9f38e617-fdc9-43e2-81ee-89d90fe4ad6c?title[text]=${encodeURIComponent(defaultTitle)}`,
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ErrorReporter />
        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
        />
        {children}
        <VisualEditsMessenger />
      </body>
    </html>
  );
}
