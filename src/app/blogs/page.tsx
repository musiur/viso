import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";

export default function Page() {
  const blogPosts = [
    {
      title: "Getting Started with React",
      description:
        "Learn the basics of React and start building your first component.",
      image: "https://avatar.vercel.sh/john",
      date: "2024-03-15",
      author: "Jane Doe",
      tags: ["React", "JavaScript", "Web Development"],
      slug: "getting-started-with-react",
    },
    {
      title: "Advanced TypeScript Techniques",
      description:
        "Dive deep into TypeScript and learn advanced types and patterns.",
      image: "https://avatar.vercel.sh/john",
      date: "2024-03-10",
      author: "John Smith",
      tags: ["TypeScript", "JavaScript", "Programming"],
      slug: "advanced-type-script-techniques",
    },
    {
      title: "The Future of Web Development",
      description:
        "Explore upcoming trends and technologies in web development.",
      image: "https://avatar.vercel.sh/john",
      date: "2024-03-05",
      author: "Alice Johnson",
      tags: ["Web Development", "Technology", "Trends"],
      slug: "the-future-of-web-development",
    },
    {
      title: "Mastering CSS Grid",
      description: "Learn how to create complex layouts with CSS Grid.",
      image: "https://avatar.vercel.sh/john",
      date: "2024-02-28",
      author: "Bob Williams",
      tags: ["CSS", "Web Design", "Layout"],
      slug: "mastering-css-grid",
    },
    {
      title: "Introduction to GraphQL",
      description:
        "Understand the basics of GraphQL and how it differs from REST.",
      image: "https://avatar.vercel.sh/john",
      date: "2024-02-20",
      author: "Charlie Brown",
      tags: ["GraphQL", "API", "Backend"],
      slug: "introduction-to-graphql",
    },
    {
      title: "Building Scalable Node.js Applications",
      description:
        "Learn best practices for building large-scale Node.js applications.",
      image: "https://avatar.vercel.sh/john",
      date: "2024-02-15",
      author: "Diana Martinez",
      tags: ["Node.js", "JavaScript", "Backend"],
      slug: "building-scalable-node-js-applications",
    },
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-12">
          Latest Blog Posts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <Card key={index} className="flex flex-col h-full">
              <CardHeader className="p-0">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={400}
                  height={225}
                  className="w-full h-56 object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent className="flex-grow p-4">
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{post.description}</p>
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <span className="font-medium">{post.author}</span>
                  <span className="mx-2">•</span>
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, tagIndex) => (
                    <Badge
                      key={tagIndex}
                      variant="outline"
                      className="text-xs bg-gray-200"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button asChild className="w-full" variant="outline">
                  <Link href={`/blogs/${post.slug}`}>Read More</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
