import React from 'react';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/footer';
import Script from 'next/script';

export default function BookCallPage() {
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
                  Book a call with Hidde
                </h1>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Let's discuss how Pipeguru can help you speed up your growth experiments and reduce CAC by 25%.
                </p>
              </div>

              {/* Calendar Embed Container */}
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 md:p-8">
                <div 
                  style={{width:'100%', height:'800px', overflow:'scroll'}} 
                  id="my-cal-inline-30min"
                  className="rounded-lg"
                ></div>
              </div>
            </div>
          </section>
        </div>

        {/* Footer */}
        <div className="section-frame">
          <Footer />
        </div>
      </div>

      {/* Cal.com Embed Script */}
      <Script id="cal-embed" strategy="afterInteractive">
        {`
          (function (C, A, L) { 
            let p = function (a, ar) { a.q.push(ar); }; 
            let d = C.document; 
            C.Cal = C.Cal || function () { 
              let cal = C.Cal; 
              let ar = arguments; 
              if (!cal.loaded) { 
                cal.ns = {}; 
                cal.q = cal.q || []; 
                d.head.appendChild(d.createElement("script")).src = A; 
                cal.loaded = true; 
              } 
              if (ar[0] === L) { 
                const api = function () { p(api, arguments); }; 
                const namespace = ar[1]; 
                api.q = api.q || []; 
                if(typeof namespace === "string"){
                  cal.ns[namespace] = cal.ns[namespace] || api;
                  p(cal.ns[namespace], ar);
                  p(cal, ["initNamespace", namespace]);
                } else p(cal, ar); 
                return;
              } 
              p(cal, ar); 
            }; 
          })(window, "https://app.cal.com/embed/embed.js", "init");
          
          Cal("init", "30min", {origin:"https://app.cal.com"});
          
          Cal.ns["30min"]("inline", {
            elementOrSelector:"#my-cal-inline-30min",
            config: {"layout":"month_view"},
            calLink: "hidde-kehrer-pipeguru/30min",
          });
          
          Cal.ns["30min"]("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
        `}
      </Script>
    </>
  );
}
