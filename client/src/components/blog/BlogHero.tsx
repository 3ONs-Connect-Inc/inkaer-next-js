import React from "react";

interface BlogHeroProps {
  header?: {
    heroTitle?: string;
    heroSubtitle?: string;
  } | null;
} 

const BlogHero: React.FC<BlogHeroProps> = ({ header }) => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
      <div className="mx-auto max-w-7xl padding">
        <div className="text-center">
          <h1 className="text-bold-5xl mb-6">
            {header?.heroTitle || "Inkaer Blog"}
          </h1>
          <p className="mt-6 desc leading-8 max-w-3xl mx-auto">
            {header?.heroSubtitle ||
              "Insights, trends, and best practices for engineering hiring and team building."}
          </p>
        </div>
      </div>
    </section>
  );
};

export default BlogHero;
