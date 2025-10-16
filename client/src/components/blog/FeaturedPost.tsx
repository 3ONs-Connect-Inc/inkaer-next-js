import React from "react";
import { ArrowRight, Calendar, User } from "lucide-react";
import  Link  from "next/link";
import moment from "moment";
import Image from "next/image";

interface FeaturedPostProps {
  post: {
    id: string;
    slug: string;
    title: string;
    excerpt: string; 
    image: string;
    author: string;
    category: string;  
    tags: string;
     content: string;
    //readTime: string;
    timestamp: string;
  };
}

const FeaturedPost: React.FC<FeaturedPostProps> = ({ post }) => {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl padding">
        <div className="mb-8">
          <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full mb-4">
            {post.category}
          </span>
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
            <div>
              <span className="text-sm text-blue-600 font-medium">
                {post.tags}
              </span>
              <h2 className="text-bold-3xl mt-2 mb-4">{post.title}</h2>
              <p className="text-lg text-gray-600 mb-6">{post.excerpt}</p>
              <div className="flex flex-col xxs:flex-row items-center text-sm text-gray-500 mb-6">
                <span className="flex items-center mr-6">
                  <User className="w-4 h-4 mr-2" />
                  {post.author}
                </span>
                <span className="flex items-center mr-6">
                  <Calendar className="w-4 h-4 mr-2" />
                  {moment(post.timestamp).fromNow()}
                </span>
                    <span>{(post.content?.length / 1000).toFixed(0)} mins read</span>
              </div>
              <Link
                href={`/blog/post/?id=${post.id}&slug=${encodeURIComponent(post.slug)}`}
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
              >
                Read more
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
            <div className="mt-12 lg:mt-0">
             <div className="relative w-full h-64">
    <Image
      src={post.image}
      alt={post.title}
      fill
      loading="lazy"
      className="object-cover rounded-lg shadow-lg"
    />
  </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPost;
