import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, Heart, MessageCircle, Eye, User, Search, Filter } from 'lucide-react';
import { blogData } from '../data/blogData';

const BlogList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('all');
  const [sortBy, setSortBy] = useState('date');

  // Get all unique tags
  const allTags = ['all', ...new Set(blogData.flatMap(blog => blog.tags))];

  // Filter and sort blogs
  const filteredBlogs = blogData
    .filter(blog => {
      const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesTag = selectedTag === 'all' || blog.tags.includes(selectedTag);
      return matchesSearch && matchesTag;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'date':
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        case 'likes':
          return b.likes - a.likes;
        case 'views':
          return b.views - a.views;
        default:
          return 0;
      }
    });

  return (
    <div className="min-h-screen bg-gray-900 pt-24">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fadeInUp">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              My <span className="bg-gradient-to-r from-blue-500 to-blue-400 bg-clip-text text-transparent">Blog</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Sharing insights, tutorials, and experiences from my journey as a backend developer. 
              Dive deep into Node.js, databases, architecture patterns, and modern web development.
            </p>
          </div>

          {/* Search and Filter Section */}
          <div className="bg-gray-800 rounded-2xl shadow-lg p-8 mb-12 animate-fadeInUp">
            <div className="grid md:grid-cols-3 gap-6">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400"
                />
              </div>

              {/* Tag Filter */}
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <select
                  value={selectedTag}
                  onChange={(e) => setSelectedTag(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 appearance-none text-white"
                >
                  {allTags.map(tag => (
                    <option key={tag} value={tag}>
                      {tag === 'all' ? 'All Topics' : tag}
                    </option>
                  ))}
                </select>
              </div>

              {/* Sort */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 appearance-none text-white"
              >
                <option value="date">Sort by Date</option>
                <option value="likes">Sort by Likes</option>
                <option value="views">Sort by Views</option>
              </select>
            </div>
          </div>

          {/* Blog Grid */}
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {filteredBlogs.map((blog, index) => (
              <Link
                key={blog.id}
                to={`/blog/${blog.id}`}
                className="group block animate-fadeInUp hover-lift"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <article className="bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden h-full">
                  <div className="relative overflow-hidden">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-4 right-4 bg-gray-800/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-300">
                      {blog.readTime}
                    </div>
                    <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Read More
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6 flex flex-col h-full">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {blog.tags.slice(0, 2).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 bg-blue-900/30 text-blue-300 text-xs rounded-full font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-blue-400 transition-colors duration-300 flex-grow">
                      {blog.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-4 line-clamp-3 flex-grow">
                      {blog.excerpt}
                    </p>
                    
                    <div className="mt-auto">
                      <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                            <User className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-white">{blog.author}</p>
                            <p className="text-xs text-gray-400 flex items-center space-x-1">
                              <Calendar className="w-3 h-3" />
                              <span>{new Date(blog.date).toLocaleDateString()}</span>
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-3 text-sm text-gray-400">
                          <span className="flex items-center space-x-1 hover:text-red-400 transition-colors duration-300">
                            <Heart className="w-4 h-4" />
                            <span>{blog.likes}</span>
                          </span>
                          <span className="flex items-center space-x-1 hover:text-blue-400 transition-colors duration-300">
                            <Eye className="w-4 h-4" />
                            <span>{blog.views}</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          {/* No Results */}
          {filteredBlogs.length === 0 && (
            <div className="text-center py-16 animate-fadeInUp">
              <div className="w-24 h-24 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">No articles found</h3>
              <p className="text-gray-300 mb-6">Try adjusting your search terms or filters</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedTag('all');
                }}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300"
              >
                Clear Filters
              </button>
            </div>
          )}

          {/* Blog Stats */}
          <div className="mt-16 bg-gray-800 rounded-2xl shadow-lg p-8 animate-fadeInUp">
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div className="p-4">
                <div className="text-3xl font-bold text-blue-400 mb-2">{blogData.length}</div>
                <div className="text-gray-300">Total Articles</div>
              </div>
              <div className="p-4">
                <div className="text-3xl font-bold text-blue-400 mb-2">
                  {blogData.reduce((sum, blog) => sum + blog.views, 0).toLocaleString()}
                </div>
                <div className="text-gray-300">Total Views</div>
              </div>
              <div className="p-4">
                <div className="text-3xl font-bold text-blue-400 mb-2">
                  {blogData.reduce((sum, blog) => sum + blog.likes, 0)}
                </div>
                <div className="text-gray-300">Total Likes</div>
              </div>
              <div className="p-4">
                <div className="text-3xl font-bold text-blue-400 mb-2">
                  {allTags.length - 1}
                </div>
                <div className="text-gray-300">Topics Covered</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogList;