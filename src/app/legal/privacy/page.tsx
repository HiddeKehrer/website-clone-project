'use client';

import { useEffect } from 'react';

export default function PrivacyPage() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://app.termly.io/embed-policy.min.js';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Cleanup
      const existingScript = document.querySelector('script[src="https://app.termly.io/embed-policy.min.js"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="font-heading text-4xl md:text-5xl font-normal leading-tight text-primary-black mb-4">
          Privacy Policy
        </h1>
        
        <div {...({ name: "termly-embed", "data-id": "8e73b71f-0dff-46c4-a312-a7a418937749" } as any)}></div>
      </div>
    </div>
  );
}
