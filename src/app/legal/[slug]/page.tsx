import { notFound } from 'next/navigation';
import { getPostBySlug, getAllPosts } from '@/lib/markdown';
import { Metadata } from 'next';
import Script from 'next/script';

interface LegalPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  try {
    const posts = getAllPosts();
    
    // Fallback to hardcoded slugs if getAllPosts fails
    if (posts.length === 0) {
      console.warn('No posts found, using fallback slugs');
      return [
        { slug: 'terms' },
        { slug: 'privacy' },
        { slug: 'imprint' }
      ];
    }
    
    return posts.map((slug) => ({
      slug,
    }));
  } catch (error) {
    console.error('Error in generateStaticParams:', error);
    // Fallback to ensure pages are generated
    return [
      { slug: 'terms' },
      { slug: 'privacy' }, 
      { slug: 'imprint' }
    ];
  }
}

export async function generateMetadata({ params }: LegalPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  
  if (!post) {
    return {
      title: 'Page Not Found',
    };
  }

  return {
    title: `${post.title} | Pipeguru`,
    description: `${post.title} for Pipeguru`,
  };
}

export default async function LegalPage({ params }: LegalPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Termly Script */}
      <Script 
        src="https://app.termly.io/embed-policy.min.js" 
        strategy="afterInteractive"
      />
      
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="font-heading text-4xl md:text-5xl font-normal leading-tight text-primary-black mb-4">
            {post.title}
          </h1>
          <p className="text-muted-foreground text-lg">
            Last updated: {new Date(post.lastUpdated).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <div 
          className="prose prose-lg max-w-none
            prose-headings:font-heading prose-headings:text-primary-black prose-headings:leading-tight
            prose-h1:text-4xl prose-h1:md:text-5xl prose-h1:font-normal prose-h1:mb-6
            prose-h2:text-3xl prose-h2:md:text-4xl prose-h2:font-normal prose-h2:mb-6 prose-h2:mt-12
            prose-h3:text-xl prose-h3:md:text-2xl prose-h3:font-semibold prose-h3:mb-4 prose-h3:mt-8
            prose-p:text-lg prose-p:leading-relaxed prose-p:text-gray-700 prose-p:mb-4
            prose-strong:text-gray-900 prose-strong:font-semibold
            prose-a:text-primary prose-a:hover:text-primary/80 prose-a:font-medium prose-a:no-underline hover:prose-a:underline
            prose-blockquote:bg-gray-50 prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:p-6 prose-blockquote:rounded-r-lg prose-blockquote:my-8
            prose-blockquote:p:text-gray-800 prose-blockquote:p:leading-relaxed
            prose-hr:border-gray-200 prose-hr:my-12"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </div>
  );
}
