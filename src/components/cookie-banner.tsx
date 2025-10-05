'use client';

import { useState, useEffect } from 'react';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted
    const hasAccepted = localStorage.getItem('cookieBannerAccepted');
    if (!hasAccepted) {
      // Small delay to ensure page is loaded
      setTimeout(() => setIsVisible(true), 500);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieBannerAccepted', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Content */}
          <div className="flex-1 text-center sm:text-left">
            <p className="text-gray-800 text-sm sm:text-base leading-relaxed">
              <span className="font-semibold">🍪 Cookie Notice:</span> We don't track you or use cookies for marketing. 
              Only essential cookies for basic site functionality. 
            </p>
          </div>
          
          {/* Button */}
          <div className="flex-shrink-0">
            <button
              onClick={handleAccept}
              className="bg-primary text-white px-6 py-2.5 rounded-lg font-medium text-sm hover:bg-primary/90 
                       transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
                       active:scale-95 transform transition-transform"
            >
              Got it! 👍
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
