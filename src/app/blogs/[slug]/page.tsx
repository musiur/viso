import Image from "next/image";
import { format } from "date-fns";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { BlogContents } from "./_utils/contents";

// Mock function to fetch blog post data
async function getBlogPost(slug: string) {
  // In a real application, this would fetch data from an API or database
  return BlogContents?.filter((item: { slug: string }) => slug === item.slug)[0];
}

const BlogPostPage = async ({ params }: { params: { slug: string } }) => {
  const post = await getBlogPost(params.slug);

  return (
    <div className="container hero-section">
      {post ? (
        <article className="max-w-3xl mx-auto px-4 py-8 space-y-8">
          <Link href="/blogs" className="underline flex items-center gap-2">
            <ChevronLeft className="w-4 h-4" /> Back to Blogs
          </Link>
          <Image
            src={post.image}
            alt={post.title}
            width={800}
            height={400}
            className="w-full h-64 object-cover rounded-lg mb-8"
          />
          <div>
            <h1 className="text-4xl font-bold mb-4 capitalize">{post.title}</h1>
            <div className="flex items-center text-gray-600 mb-4">
              <span className="mr-4">
                {format(post.publishDate, "MMMM d, yyyy")}
              </span>
              <span>By {post.author}</span>
            </div>
            <div className="mb-8">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          {post.content}
        </article>
      ) : (
        <div className="max-w-3xl mx-auto px-4 py-8 space-y-8 min-h-[50vh] flex items-center justify-center">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4 capitalize">
            {":( No content found!"} <Link href="/blogs" className="underline text-primary">Go back to blogs</Link>
          </h1>
        </div>
      )}
    </div>
  );
};

export default BlogPostPage;
