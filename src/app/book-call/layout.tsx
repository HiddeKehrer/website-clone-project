import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Book a call with Hidde | Pipeguru',
  description: 'Schedule a 30-minute call with Hidde to discuss how Pipeguru can help you speed up your growth experiments and reduce CAC by 25%.',
  openGraph: {
    title: 'Book a call with Hidde | Pipeguru',
    description: 'Schedule a 30-minute call with Hidde to discuss how Pipeguru can help you speed up your growth experiments and reduce CAC by 25%.',
    url: 'https://pipeguru.ai/book-call',
    siteName: 'Pipeguru',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Book a call with Hidde | Pipeguru',
    description: 'Schedule a 30-minute call with Hidde to discuss how Pipeguru can help you speed up your growth experiments and reduce CAC by 25%.',
  },
};

export default function BookCallLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
