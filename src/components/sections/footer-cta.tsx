import Link from 'next/link';

const FooterCta = () => {
  return (
    <section className="bg-emphasis text-center py-20 px-4">
      <div className="space-y-4">
        <Link
          href="/free-audit"
          className="inline-block bg-black text-white text-base font-medium py-4 px-8 rounded-lg transition-colors hover:bg-gray-800"
        >
          Talk to a founder
        </Link>
        <p className="text-sm text-gray-600">
          Founder-led onboarding with first experiment go-live in 30 mins
        </p>
      </div>
    </section>
  );
};

export default FooterCta;