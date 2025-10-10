import React from "react";
import { ArrowRight, Calendar, User } from "lucide-react";
import  Link  from "next/link";
import moment from "moment";
import Image from "next/image";



interface BlogPostsGridProps {
  header?: {
    footerTitle?: string;
    footerSubtitle?: string;
  } | null;
  posts: {
    id: string;
    slug: string;
    title: string; 
    excerpt: string;
    image: string;
    author: string;
    category: string;
    timestamp: string;
  }[];
}

const BlogPostsGrid: React.FC<BlogPostsGridProps> = ({ header, posts }) => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl padding">
        <div className="text-center mb-12">
          <h2 className="text-bold-3xl">
            {header?.footerTitle || "Latest Articles"}
          </h2>
          <p className="mt-4 desc">
            {header?.footerSubtitle ||
              "Stay updated with the latest insights and trends"}
          </p>
        </div>

        {posts && posts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
              >
              <Image
  src={post.image}
  alt={post.title}
  width={800}        
  height={192}      
  className="w-full h-48 object-cover"
/>
                <div className="p-6">
                  <span className="text-sm text-blue-600 font-medium">
                    {post.category}
                  </span>
                  <h3 className="desc-bold mt-2 mb-3">{post.title}</h3>
                  <p className="text-small mb-4">{post.excerpt}</p>
                  <div className="flex flex-col xxs:flex-row items-center text-sm text-gray-500 mb-4">
                    <span className="flex items-center mr-4">
                      <User className="w-4 h-4 mr-1" />
                      {post.author}
                    </span> 
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {moment(post.timestamp).fromNow()}
                    </span>
                  </div>
                  <Link
                    href={`/blog/${post.id}/${post.slug}`}
                    className="text-sm sm:text-base inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Read more
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">No more posts yet.</p>
        )}
      </div>
    </section>
  );
};

export default BlogPostsGrid;
