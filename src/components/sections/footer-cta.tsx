import Link from 'next/link';

const FooterCta = () => {
  return (
    <section className="bg-primary-black text-white text-center py-20 px-4">
      <div className="space-y-4">
        <Link
          href="/free-audit"
          className="inline-block bg-white text-primary-black text-base font-medium py-4 px-8 rounded-full transition-colors hover:bg-gray-200"
        >
          Get started with a Free Audit
        </Link>
        <p className="text-sm text-[#cccccc]">
          Delivered in 2 days - No obligations
        </p>
      </div>
    </section>
  );
};

export default FooterCta;