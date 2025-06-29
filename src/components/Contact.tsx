import React, { useState } from 'react';
import { Mail, Phone, Send, MapPin, CheckCircle, MessageCircle, Calendar, Video } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitted(true);
    setIsSubmitting(false);
    
    // Reset form after success message
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const contactMethods = [
    {
      icon: MessageCircle,
      title: 'Send Message',
      description: 'Get in touch via LinkedIn messaging',
      action: 'Message',
      color: 'blue'
    },
    {
      icon: Mail,
      title: 'Email',
      description: 'aashisrijal252@gmail.com',
      action: 'Email',
      color: 'green'
    },
    {
      icon: Phone,
      title: 'Phone',
      description: '+977 9847749997',
      action: 'Call',
      color: 'purple'
    },
    {
      icon: Video,
      title: 'Video Call',
      description: 'Schedule a video meeting',
      action: 'Schedule',
      color: 'orange'
    }
  ];

  return (
    <section id="contact" className="py-16 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Contact Header */}
          <div className="bg-gray-800 rounded-lg shadow-lg p-6 md:p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Get in Touch</h2>
            <p className="text-gray-300 text-lg">
              I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology. 
              Feel free to reach out through any of the methods below.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Methods */}
            <div className="lg:col-span-1 space-y-6">
              {contactMethods.map((method, index) => {
                const Icon = method.icon;
                const colorClasses = {
                  blue: 'bg-blue-900/30 text-blue-400 hover:bg-blue-900/50',
                  green: 'bg-green-900/30 text-green-400 hover:bg-green-900/50',
                  purple: 'bg-purple-900/30 text-purple-400 hover:bg-purple-900/50',
                  orange: 'bg-orange-900/30 text-orange-400 hover:bg-orange-900/50'
                };
                
                return (
                  <div key={index} className="bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${colorClasses[method.color]}`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-white mb-1">{method.title}</h3>
                        <p className="text-gray-400 text-sm mb-3">{method.description}</p>
                        <button className={`text-sm font-medium px-4 py-2 rounded-lg transition-all duration-200 ${colorClasses[method.color]}`}>
                          {method.action}
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Quick Info */}
              <div className="bg-gray-800 rounded-lg shadow-lg p-6">
                <h3 className="font-semibold text-white mb-4">Quick Info</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center space-x-3">
                    <MapPin size={16} className="text-gray-400" />
                    <span className="text-gray-300">Based in Nepal</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Calendar size={16} className="text-gray-400" />
                    <span className="text-gray-300">Available for opportunities</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                    <span className="text-gray-300">Usually responds within 24 hours</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-gray-800 rounded-lg shadow-lg p-6 md:p-8">
                <h3 className="text-xl font-semibold text-white mb-6">Send a Message</h3>
                
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                    <h4 className="text-xl font-semibold text-white mb-2">Message Sent!</h4>
                    <p className="text-gray-300">Thank you for reaching out. I'll get back to you soon!</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400"
                          placeholder="Enter your full name"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                          Your Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400"
                          placeholder="Enter your email address"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-white"
                      >
                        <option value="">Select a subject</option>
                        <option value="job-opportunity">Job Opportunity</option>
                        <option value="project-collaboration">Project Collaboration</option>
                        <option value="freelance-work">Freelance Work</option>
                        <option value="technical-discussion">Technical Discussion</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                        Your Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none text-white placeholder-gray-400"
                        placeholder="Tell me about your project, opportunity, or what you'd like to discuss..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>

          {/* Professional Note */}
          <div className="bg-blue-900/30 rounded-lg p-6 mt-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-900/50 rounded-lg flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h3 className="font-semibold text-white mb-2">Professional Networking</h3>
                <p className="text-gray-300 leading-relaxed">
                  I'm always interested in connecting with fellow developers, potential collaborators, and industry professionals. 
                  Whether you're looking to discuss technology trends, explore partnership opportunities, or simply expand your network, 
                  I'd love to hear from you. Let's build something amazing together!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;