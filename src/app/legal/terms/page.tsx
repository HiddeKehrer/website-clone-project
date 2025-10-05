'use client';

import { useEffect } from 'react';

export default function TermsPage() {
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
          Terms and Conditions
        </h1>
        
        <div {...({ name: "termly-embed", "data-id": "05d54c88-4aa2-4443-8764-d185713156f6" } as any)}></div>
      </div>
    </div>
  );
}
