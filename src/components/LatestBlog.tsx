import React from 'react';

const LatestBlog: React.FC = () => {
  const blogs = [
    { id: 1, title: 'Top Essential Trends in 2021', date: '01 August 2021', image: '/25.png' },
    { id: 2, title: 'Stylish Chair Designs', date: '02 August 2021', image: '/26.png' },
    { id: 3, title: 'Modern Interior Inspiration', date: '03 August 2021', image: '/27.png' },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-6">Latest Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <div key={blog.id} className="rounded-lg overflow-hidden shadow-md">
              <img src={blog.image} alt={blog.title} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h3 className="font-bold text-lg">{blog.title}</h3>
                <p className="text-sm text-gray-500">{blog.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestBlog;
