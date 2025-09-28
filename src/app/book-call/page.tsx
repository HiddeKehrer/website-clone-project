'use client';

import React, { useEffect } from 'react';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/footer';
import Cal, { getCalApi } from "@calcom/embed-react";

export default function BookCallPage() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"30min"});
      cal("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, []);

  return (
    <>
      <div className="min-h-screen frame-layout pt-20">
        {/* Header */}
        <div className="section-frame no-border">
          <Header />
        </div>

        {/* Hero Section with Calendar */}
        <div className="section-frame">
          <section className="relative py-20 lg:py-24">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="text-center mb-12">
                <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-normal leading-tight text-balance mb-6">
                  Book a call
                </h1>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Let's discuss how Pipeguru can help you speed up your growth experiments and reduce CAC by 25%.
                </p>
              </div>

              {/* Calendar Embed */}
              <div className="rounded-lg" style={{width:'100%', height:'700px', overflow:'hidden'}}>
                <Cal 
                  namespace="30min"
                  calLink="hidde-kehrer-pipeguru/30min"
                  style={{width:"100%",height:"100%",overflow:"scroll"}}
                  config={{"layout":"month_view"}}
                />
              </div>

              {/* Alternative Contact */}
              <div className="text-center mt-8 pt-6 border-t border-gray-200">
                <p className="text-gray-500 text-sm mb-2">
                  Can't find a suitable time?
                </p>
                <a 
                  href="mailto:hidde@pipeguru.ai?subject=Meeting%20Request%20-%20Alternative%20Time&body=Hi%20Hidde,%0A%0AI'd%20like%20to%20schedule%20a%20meeting%20but%20couldn't%20find%20a%20suitable%20time%20in%20your%20calendar.%0A%0APlease%20let%20me%20know%20your%20availability.%0A%0AThanks!"
                  className="text-gray-600 hover:text-black underline text-sm transition-colors"
                >
                  Email hidde@pipeguru.ai directly
                </a>
              </div>
            </div>
          </section>
        </div>

        {/* Footer */}
        <div className="section-frame">
          <Footer />
        </div>
      </div>

    </>
  );
}
