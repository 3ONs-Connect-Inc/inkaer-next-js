import React from 'react';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';


interface ArticleLayoutProps {
  title: string;
  excerpt: string;
  author: string;
  timestamp: string;
  //readTime: string;
  category: string;
  image: string;
  content: string;
} 

const ArticleLayout: React.FC<ArticleLayoutProps> = ({
  title,
  excerpt,
  author,
  timestamp,
//readTime,
  category,
  image,
  content
}) => {
  return (
    <div className="min-h-screen bg-white">
  
      <main className="py-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
          <div className="mx-auto max-w-4xl padding">
            <Link 
              href="/blog" 
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium mb-8"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
            <div className="text-center">
              <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full mb-4">
                {category}
              </span>
              <h1 className="text-bold-5xl  tracking-tight  mb-6">
                {title}
              </h1>
              <p className="text-lg leading-8 text-gray-600 mb-8">
                {excerpt}
              </p>
              <div className="flex flex-col xxs:flex-row items-center justify-center text-sm text-gray-500 space-x-6">
                <span className="flex items-center">
                  <User className="w-4 h-4 mr-2" />
                  {author}
                </span>
                <span className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                 {timestamp}  
                </span>
               
                 <span>{(content?.length / 1000).toFixed(0)} mins read</span>
              </div>
            </div> 
          </div>
        </section>  

        {/* Article Image */}
        <section className="py-8">
          <div className="mx-auto max-w-4xl padding">
               <Image
      src={image}
      alt={title}
      width={1600}     
      height={384}     
      className="w-full h-96 object-cover rounded-lg shadow-lg"
    />
          </div>
        </section>

        {/* Article Content */}
        <section className="py-8">
          <div className="mx-auto max-w-4xl padding">
            <div className="prose prose-lg prose-blue max-w-none">
               <div dangerouslySetInnerHTML={{ __html: content }} />
            </div>
          </div>
        </section>
      </main>

    </div>
  );
};

export default ArticleLayout;