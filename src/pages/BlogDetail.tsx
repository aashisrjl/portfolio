import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Calendar, Clock, Heart, MessageCircle, Share2, Bookmark, Eye, ArrowLeft, User, ChevronRight } from 'lucide-react';
import { blogData } from '../data/blogData';

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [relatedBlogs, setRelatedBlogs] = useState([]);

  useEffect(() => {
    const foundBlog = blogData.find(b => b.id === parseInt(id));
    if (foundBlog) {
      setBlog(foundBlog);
      // Find related blogs based on tags
      const related = blogData
        .filter(b => b.id !== foundBlog.id && b.tags.some(tag => foundBlog.tags.includes(tag)))
        .slice(0, 3);
      setRelatedBlogs(related);
    } else {
      navigate('/blogs');
    }
  }, [id, navigate]);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: blog.title,
          text: blog.excerpt,
          url: window.location.href,
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  if (!blog) {
    return (
      <div className="min-h-screen bg-gray-900 pt-24 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-300">Loading article...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 pt-24">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-sm text-gray-400 mb-8 animate-fadeInUp">
            <Link to="/" className="hover:text-blue-400 transition-colors duration-300">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/blogs" className="hover:text-blue-400 transition-colors duration-300">Blogs</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white font-medium truncate">{blog.title}</span>
          </nav>

          {/* Back Button */}
          <Link
            to="/blogs"
            className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 mb-8 group transition-all duration-300 animate-fadeInUp"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
            <span className="font-medium">Back to All Articles</span>
          </Link>

          {/* Blog Header */}
          <article className="bg-gray-800 rounded-2xl shadow-xl overflow-hidden mb-8 animate-fadeInUp">
            <div className="relative">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-64 md:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {blog.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-800/90 backdrop-blur-sm text-gray-200 text-sm rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="p-8 md:p-12">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                {blog.title}
              </h1>
              
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 pb-8 border-b border-gray-700 space-y-4 md:space-y-0">
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                    <User className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-white text-lg">{blog.author}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <span className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(blog.date).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{blog.readTime}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Eye className="w-4 h-4" />
                        <span>{blog.views.toLocaleString()} views</span>
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => setIsLiked(!isLiked)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-300 ${
                      isLiked
                        ? 'bg-red-900/30 text-red-400 animate-facebook-like'
                        : 'bg-gray-700 text-gray-300 hover:bg-red-900/30 hover:text-red-400'
                    }`}
                  >
                    <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
                    <span className="font-medium">{blog.likes + (isLiked ? 1 : 0)}</span>
                  </button>
                  <button 
                    onClick={handleShare}
                    className="flex items-center space-x-2 px-4 py-2 bg-gray-700 text-gray-300 rounded-xl hover:bg-blue-900/30 hover:text-blue-400 transition-all duration-300"
                  >
                    <Share2 className="w-5 h-5" />
                    <span className="font-medium">Share</span>
                  </button>
                  <button 
                    onClick={() => setIsBookmarked(!isBookmarked)}
                    className={`p-2 rounded-xl transition-all duration-300 ${
                      isBookmarked
                        ? 'bg-yellow-900/30 text-yellow-400'
                        : 'bg-gray-700 text-gray-300 hover:bg-yellow-900/30 hover:text-yellow-400'
                    }`}
                  >
                    <Bookmark className={`w-5 h-5 ${isBookmarked ? 'fill-current' : ''}`} />
                  </button>
                </div>
              </div>

              {/* Blog Content */}
              <div 
                className=""
                dangerouslySetInnerHTML={{ __html: blog.content }}
              />
            </div>
          </article>

          {/* Related Articles */}
          {relatedBlogs.length > 0 && (
            <div className="bg-gray-800 rounded-2xl shadow-lg p-8 animate-fadeInUp">
              <h3 className="text-2xl font-bold text-white mb-6">Related Articles</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedBlogs.map((relatedBlog) => (
                  <Link
                    key={relatedBlog.id}
                    to={`/blog/${relatedBlog.id}`}
                    className="group block hover-lift"
                  >
                    <article className="bg-gray-700 rounded-xl overflow-hidden hover:bg-gray-600 hover:shadow-lg transition-all duration-300">
                      <img
                        src={relatedBlog.image}
                        alt={relatedBlog.title}
                        className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="p-4">
                        <h4 className="font-semibold text-white mb-2 line-clamp-2 group-hover:text-blue-400 transition-colors duration-300">
                          {relatedBlog.title}
                        </h4>
                        <p className="text-sm text-gray-300 line-clamp-2 mb-3">
                          {relatedBlog.excerpt}
                        </p>
                        <div className="flex items-center justify-between text-xs text-gray-400">
                          <span>{relatedBlog.readTime}</span>
                          <span className="flex items-center space-x-1">
                            <Heart className="w-3 h-3" />
                            <span>{relatedBlog.likes}</span>
                          </span>
                        </div>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-center text-white mt-8 animate-fadeInUp">
            <h3 className="text-2xl font-bold mb-4">Enjoyed this article?</h3>
            <p className="text-blue-100 mb-6">
              Subscribe to my newsletter for more insights on backend development, Node.js, and modern web technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/blogs"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300"
              >
                Read More Articles
              </Link>
              <Link
                to="/#contact"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;