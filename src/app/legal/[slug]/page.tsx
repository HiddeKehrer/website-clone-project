import { notFound } from 'next/navigation';
import { getPostBySlug, getAllPosts } from '@/lib/markdown';
import { Metadata } from 'next';

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
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="border-b border-gray-200">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-gray-900">{post.title}</h1>
          <p className="mt-2 text-sm text-gray-600">
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
          className="prose prose-lg prose-gray max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-blue-600 prose-a:hover:text-blue-800 prose-strong:text-gray-900"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </div>
  );
}
