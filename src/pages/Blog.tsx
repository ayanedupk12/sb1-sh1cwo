import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User } from 'lucide-react';

const posts = [
  {
    title: 'The Future of Mobile App Development',
    excerpt: 'Explore the latest trends and technologies shaping the future of mobile applications.',
    image: 'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&q=80&w=800',
    date: 'Mar 1, 2024',
    author: 'John Doe',
    category: 'Mobile Development'
  },
  {
    title: 'AI in Modern Business Solutions',
    excerpt: 'How artificial intelligence is transforming business operations and decision-making.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
    date: 'Feb 28, 2024',
    author: 'Jane Smith',
    category: 'Artificial Intelligence'
  },
  {
    title: 'Web Development Best Practices 2024',
    excerpt: 'Essential practices for building modern, scalable web applications.',
    image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&q=80&w=800',
    date: 'Feb 25, 2024',
    author: 'Mike Johnson',
    category: 'Web Development'
  }
];

const Blog = () => {
  return (
    <div className="pt-20">
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-white text-center mb-8"
          >
            Latest Insights & News
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-blue-100 text-center max-w-3xl mx-auto"
          >
            Stay updated with the latest technology trends and insights
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="text-sm text-blue-600 mb-2">{post.category}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar size={16} className="mr-2" />
                  <span className="mr-4">{post.date}</span>
                  <User size={16} className="mr-2" />
                  <span>{post.author}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;