export default function ImprintPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="font-heading text-4xl md:text-5xl font-normal leading-tight text-primary-black mb-4">
          Imprint
        </h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-muted-foreground text-lg mb-8">
            Last updated: 30.10.2025
          </p>
          
          <blockquote className="bg-gray-50 border-l-4 border-primary p-6 rounded-r-lg my-8">
            <p className="text-lg leading-relaxed mb-4">
              We believe in transparency and openness. Here you'll find all the official details about Wafrow. If you have any questions, feel free to reach out to us.
            </p>
            
            <p className="text-lg leading-relaxed">
              This website is operated by Wafrow UG registered in Berlin, Germany.
            </p>
            
            <div className="mt-4 pt-4 border-t border-gray-200">
              <p className="font-semibold text-lg">
                Director: Ravdeep Singh
              </p>
            </div>
          </blockquote>

          <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
            <h2 className="font-heading text-3xl md:text-4xl font-normal leading-tight text-primary-black mb-6">
              Contact
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-lg text-gray-900 mb-3">Diensteanbieter i.S.d. §5 TMG:</h3>
                
                <div className="bg-gray-50 p-6 rounded-lg border">
                  <div className="space-y-2">
                    <p className="font-semibold text-lg">Wafrow UG</p>
                    <p className="text-lg">Pufendorfstr. 4D</p>
                    <p className="text-lg">10249 Berlin</p>
                    <p className="text-lg">Germany</p>
                  </div>
                </div>
              </div>
              
              <div>
                <p className="text-lg mb-2">
                  <a href="mailto:support@wafrow.com" className="text-primary hover:text-primary/80 font-medium">
                    support@wafrow.com
                  </a>
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="font-semibold text-lg text-gray-900 mb-2">Registergericht:</p>
                  <p className="text-lg">Berlin / Charlottenburg</p>
                </div>
                
                <div>
                  <p className="font-semibold text-lg text-gray-900 mb-2">Registernummer:</p>
                  <p className="text-lg">HRB 266318 B</p>
                </div>
              </div>
              
              <div>
                <p className="font-semibold text-lg text-gray-900 mb-2">Steuernummer:</p>
                <p className="text-lg">37/575/50163</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="font-semibold text-lg text-blue-900 mb-3">Dispute Resolution</h3>
            <p className="text-lg leading-relaxed text-blue-800 mb-3">
              To resolve any disputes regarding online purchases made with us quickly and in an uncomplicated manner, we'd like to point you in the direction of the EU Commission's Online Dispute Resolution platform (ODR Platform).This is a place to raise complaints and queries and it can be found here.
            </p>
            <p className="text-lg">
              <a href="https://www.ec.europa.eu/consumers/odr" className="text-primary hover:text-primary/80 font-medium">
                https://www.ec.europa.eu/consumers/odr
              </a>
            </p>
          </div>
          
          <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <p className="text-lg leading-relaxed text-yellow-800">
              According to § 36 VSBG we additionally inform you, that Wafrow is fundamentally not obliged to take part in a Dispute Resolution before an Independent Consumer Arbitration Service.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
