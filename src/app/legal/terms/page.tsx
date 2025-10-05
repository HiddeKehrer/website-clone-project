import Script from 'next/script';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="font-heading text-4xl md:text-5xl font-normal leading-tight text-primary-black mb-4">
          Terms and Conditions
        </h1>
        
        <div dangerouslySetInnerHTML={{
          __html: `
            <div name="termly-embed" data-id="05d54c88-4aa2-4443-8764-d185713156f6"></div>
            <script type="text/javascript">(function(d, s, id) {
              var js, tjs = d.getElementsByTagName(s)[0];
              if (d.getElementById(id)) return;
              js = d.createElement(s); js.id = id;
              js.src = "https://app.termly.io/embed-policy.min.js";
              tjs.parentNode.insertBefore(js, tjs);
            }(document, 'script', 'termly-jssdk'));</script>
          `
        }} />
      </div>
    </div>
  );
}
