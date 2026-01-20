'use client';

import React from 'react';

const blogs = [
  {
    id: 1,
    title: 'Icons',
    excerpt:
      'Learn how to create smooth, performant animations in React using CSS and modern animation libraries.',
    image: '/images/v1.png',
  },
  {
    id: 2,
    title: 'Plugins',
    excerpt:
      'A step-by-step guide to building infinite vertical sliders using pure CSS and Tailwind.',
    image: '/images/plugins.jpg',
  },
  {
    id: 3,
    title: 'Roadmap',
    excerpt:
      'Best practices for creating visually stunning and user-friendly portfolio websites.',
    image: '/images/uiuxroadmap.jpg',
  },
   {
    id: 4,
    title: 'Fonts',
    excerpt:
      'Best practices for creating visually stunning and user-friendly portfolio websites.',
    image: '/images/fonts.jpg',
  },
];

const BlogSection = () => {
  return (
    <section
      id="blog"
      className="w-full  px-6 py-20 text-white"
    >
      {/* Header */}
      <div className="mx-auto mb-12 max-w-5xl text-center">
        <h2 className="text-4xl font-bold">Latest Blog Posts</h2>
        <p className="mt-4 text-gray-400">
          Insights, tutorials, and thoughts on design & development
        </p>
      </div>

      {/* Blog Grid */}
      <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-2 lg:grid-cols-4">
        {blogs.map((blog) => (

          <div>
          <article
            key={blog.id}
            className="group overflow-hidden rounded-2xl "
          >
            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={blog.image}
                alt={blog.title}
                className="h-40 w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* Content */}
             
             
          </article>
           <h6 className="m-2 text-xs ">
                {blog.title}
              </h6>
          </div>
          
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
