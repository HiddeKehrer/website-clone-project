import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const contentDirectory = path.join(process.cwd(), 'src/content');

export interface MarkdownPost {
  slug: string;
  title: string;
  lastUpdated: string;
  content: string;
}

export async function getPostBySlug(slug: string): Promise<MarkdownPost | null> {
  try {
    const fullPath = path.join(contentDirectory, `${slug}.md`);
    
    // Check if file exists before reading
    if (!fs.existsSync(fullPath)) {
      console.warn(`Markdown file does not exist: ${fullPath}`);
      return null;
    }
    
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    
    const processedContent = await remark()
      .use(html, { sanitize: false })
      .process(content);
    
    return {
      slug,
      title: data.title || 'Untitled',
      lastUpdated: data.lastUpdated || new Date().toISOString(),
      content: processedContent.toString(),
    };
  } catch (error) {
    console.error(`Error reading markdown file ${slug}:`, error);
    return null;
  }
}

export function getAllPosts(): string[] {
  try {
    // Check if directory exists before reading
    if (!fs.existsSync(contentDirectory)) {
      console.warn(`Content directory does not exist: ${contentDirectory}`);
      return [];
    }
    
    const fileNames = fs.readdirSync(contentDirectory);
    return fileNames
      .filter((name) => name.endsWith('.md'))
      .map((name) => name.replace(/\.md$/, ''));
  } catch (error) {
    console.error('Error reading content directory:', error);
    return [];
  }
}
