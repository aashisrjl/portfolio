export const blogData = [
  {
    id: 1,
    title: 'Building Scalable Node.js Applications: Best Practices and Architecture Patterns',
    excerpt: 'Learn how to structure your Node.js applications for maximum scalability and maintainability. We\'ll explore microservices, clean architecture, and performance optimization techniques.',
    content: `
      <h2>Introduction</h2>
      <p>Building scalable Node.js applications requires careful planning and adherence to proven architectural patterns. In this comprehensive guide, we'll explore the essential practices that will help you create robust, maintainable, and scalable backend systems.</p>
      
      <h2>1. Clean Architecture Principles</h2>
      <p>Clean architecture separates your application into distinct layers, each with specific responsibilities. This separation makes your code more testable, maintainable, and flexible.</p>
      
      <h3>Layer Structure:</h3>
      <ul>
        <li><strong>Presentation Layer:</strong> Controllers and routes that handle HTTP requests</li>
        <li><strong>Business Logic Layer:</strong> Services and use cases that contain your core business rules</li>
        <li><strong>Data Access Layer:</strong> Repositories and models that handle data persistence</li>
        <li><strong>Infrastructure Layer:</strong> External services, utilities, and configuration</li>
      </ul>
      
      <pre><code>
// Example: Clean architecture structure
src/
├── controllers/     # Presentation layer
├── services/        # Business logic layer
├── repositories/    # Data access layer
├── models/          # Data models
├── middleware/      # Custom middleware
├── utils/           # Utility functions
└── config/          # Configuration files
      </code></pre>
      
      <h2>2. Microservices vs Monolith</h2>
      <p>While microservices offer scalability benefits, they also introduce complexity. Start with a well-structured monolith and extract services as your application grows and requirements become clearer.</p>
      
      <h3>When to Choose Microservices:</h3>
      <ul>
        <li>Your team is large and can manage multiple services</li>
        <li>Different parts of your application have different scaling requirements</li>
        <li>You need to use different technologies for different services</li>
        <li>You have clear service boundaries</li>
      </ul>
      
      <h2>3. Performance Optimization Strategies</h2>
      <p>Optimizing Node.js performance involves several key strategies:</p>
      
      <h3>Clustering and Load Balancing:</h3>
      <pre><code>
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
  // Fork workers
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
  
  cluster.on('exit', (worker, code, signal) => {
    console.log(\`Worker \${worker.process.pid} died\`);
    cluster.fork();
  });
} else {
  // Workers can share any TCP port
  require('./app.js');
}
      </code></pre>
      
      <h3>Caching Strategies:</h3>
      <ul>
        <li><strong>In-Memory Caching:</strong> Use Node.js built-in caching for frequently accessed data</li>
        <li><strong>Redis Caching:</strong> Implement distributed caching for scalable applications</li>
        <li><strong>HTTP Caching:</strong> Use proper cache headers and CDNs</li>
        <li><strong>Database Query Caching:</strong> Cache expensive database queries</li>
      </ul>
      
      <h2>4. Database Optimization</h2>
      <p>Database performance is crucial for scalable applications:</p>
      
      <ul>
        <li>Use connection pooling to manage database connections efficiently</li>
        <li>Implement proper indexing strategies</li>
        <li>Use database query optimization techniques</li>
        <li>Consider read replicas for read-heavy applications</li>
        <li>Implement database sharding for very large datasets</li>
      </ul>
      
      <h2>5. Error Handling and Logging</h2>
      <p>Robust error handling and comprehensive logging are essential for production applications:</p>
      
      <pre><code>
// Global error handler
app.use((err, req, res, next) => {
  logger.error('Unhandled error:', {
    error: err.message,
    stack: err.stack,
    url: req.url,
    method: req.method,
    ip: req.ip
  });
  
  res.status(500).json({
    error: 'Internal server error',
    requestId: req.id
  });
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM received, shutting down gracefully');
  server.close(() => {
    console.log('Process terminated');
  });
});
      </code></pre>
      
      <h2>6. Security Best Practices</h2>
      <ul>
        <li>Use HTTPS in production</li>
        <li>Implement proper authentication and authorization</li>
        <li>Validate and sanitize all inputs</li>
        <li>Use security headers (helmet.js)</li>
        <li>Implement rate limiting</li>
        <li>Keep dependencies updated</li>
        <li>Use environment variables for sensitive data</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Building scalable Node.js applications is an iterative process that requires careful planning, continuous monitoring, and optimization. Start with solid architectural foundations, implement proper error handling and logging, and optimize based on real-world usage patterns and performance metrics.</p>
      
      <p>Remember that premature optimization is the root of all evil. Focus on writing clean, maintainable code first, then optimize the bottlenecks you identify through profiling and monitoring.</p>
    `,
    author: 'Aashish Rijal',
    date: '2025-01-15',
    readTime: '8 min read',
    image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Node.js', 'Architecture', 'Scalability', 'Backend'],
    likes: 42,
    comments: 12,
    views: 1250
  },
  {
    id: 2,
    title: 'Modern Authentication Strategies: JWT vs Sessions in 2025',
    excerpt: 'A deep dive into authentication methods, comparing JWT tokens with traditional sessions. Learn when to use each approach and implement secure authentication systems.',
    content: `
      <h2>Authentication in Modern Web Applications</h2>
      <p>Authentication is a critical component of any web application. In this article, we'll compare two popular authentication strategies: JSON Web Tokens (JWT) and traditional session-based authentication, helping you choose the right approach for your application.</p>
      
      <h2>Understanding JWT Authentication</h2>
      <p>JSON Web Tokens are self-contained tokens that carry user information and claims. They consist of three parts: header, payload, and signature, encoded in Base64 and separated by dots.</p>
      
      <h3>JWT Structure:</h3>
      <pre><code>
// JWT Token Structure
header.payload.signature

// Example JWT
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.
SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
      </code></pre>
      
      <h3>Advantages of JWT:</h3>
      <ul>
        <li><strong>Stateless:</strong> No server-side storage required, making it perfect for distributed systems</li>
        <li><strong>Scalable:</strong> Works seamlessly across multiple servers and microservices</li>
        <li><strong>Self-contained:</strong> Carries all necessary information within the token</li>
        <li><strong>Cross-domain:</strong> Can be used across different domains and services</li>
        <li><strong>Mobile-friendly:</strong> Perfect for mobile applications and SPAs</li>
      </ul>
      
      <h3>Disadvantages of JWT:</h3>
      <ul>
        <li><strong>Token Revocation:</strong> Difficult to revoke tokens before expiration</li>
        <li><strong>Size:</strong> Larger payload compared to session IDs</li>
        <li><strong>Security Risks:</strong> If not implemented properly, can lead to security vulnerabilities</li>
        <li><strong>Storage:</strong> Requires careful consideration of where to store tokens on the client</li>
      </ul>
      
      <h2>Session-Based Authentication</h2>
      <p>Traditional session-based authentication stores user state on the server and uses session IDs to identify users. The session ID is typically stored in a cookie.</p>
      
      <h3>How Sessions Work:</h3>
      <pre><code>
// Session-based authentication flow
1. User logs in with credentials
2. Server validates credentials
3. Server creates session and stores user data
4. Server sends session ID to client (usually in cookie)
5. Client sends session ID with subsequent requests
6. Server validates session ID and retrieves user data
      </code></pre>
      
      <h3>Advantages of Sessions:</h3>
      <ul>
        <li><strong>Server Control:</strong> Full control over session lifecycle</li>
        <li><strong>Easy Revocation:</strong> Sessions can be easily invalidated</li>
        <li><strong>Smaller Payload:</strong> Only session ID is sent with requests</li>
        <li><strong>Mature Technology:</strong> Well-established with extensive tooling</li>
      </ul>
      
      <h3>Disadvantages of Sessions:</h3>
      <ul>
        <li><strong>Server State:</strong> Requires server-side storage</li>
        <li><strong>Scaling Challenges:</strong> Difficult to scale across multiple servers</li>
        <li><strong>CORS Issues:</strong> Can be problematic with cross-origin requests</li>
        <li><strong>Mobile Limitations:</strong> Less suitable for mobile applications</li>
      </ul>
      
      <h2>Implementation Examples</h2>
      
      <h3>JWT Implementation:</h3>
      <pre><code>
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

// Login endpoint
app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    // Validate user credentials
    const user = await User.findOne({ email });
    if (!user || !await bcrypt.compare(password, user.password)) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    
    // Create JWT token
    const token = jwt.sign(
      { 
        userId: user._id, 
        email: user.email,
        role: user.role 
      },
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    );
    
    res.json({ token, user: { id: user._id, email: user.email } });
  } catch (error) {
    res.status(500).json({ error: 'Login failed' });
  }
});

// JWT Middleware
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  
  if (!token) {
    return res.status(401).json({ error: 'Access token required' });
  }
  
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Invalid token' });
    }
    req.user = user;
    next();
  });
};
      </code></pre>
      
      <h3>Session Implementation:</h3>
      <pre><code>
const session = require('express-session');
const MongoStore = require('connect-mongo');

// Session configuration
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({
    mongoUrl: process.env.MONGODB_URI
  }),
  cookie: {
    secure: process.env.NODE_ENV === 'production',
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
  }
}));

// Login endpoint
app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    const user = await User.findOne({ email });
    if (!user || !await bcrypt.compare(password, user.password)) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    
    // Store user in session
    req.session.userId = user._id;
    req.session.user = {
      id: user._id,
      email: user.email,
      role: user.role
    };
    
    res.json({ user: req.session.user });
  } catch (error) {
    res.status(500).json({ error: 'Login failed' });
  }
});

// Session middleware
const requireAuth = (req, res, next) => {
  if (!req.session.userId) {
    return res.status(401).json({ error: 'Authentication required' });
  }
  next();
};
      </code></pre>
      
      <h2>When to Use Each Approach</h2>
      
      <h3>Use JWT When:</h3>
      <ul>
        <li>Building APIs or microservices</li>
        <li>Need stateless authentication</li>
        <li>Working with mobile applications</li>
        <li>Implementing single sign-on (SSO)</li>
        <li>Building distributed systems</li>
        <li>Need cross-domain authentication</li>
      </ul>
      
      <h3>Use Sessions When:</h3>
      <ul>
        <li>Building traditional web applications</li>
        <li>Need immediate token revocation</li>
        <li>Working with server-side rendered applications</li>
        <li>Security is the top priority</li>
        <li>Building monolithic applications</li>
        <li>Need to store complex user state</li>
      </ul>
      
      <h2>Security Best Practices</h2>
      
      <h3>For JWT:</h3>
      <ul>
        <li>Use strong, unique secrets for signing</li>
        <li>Implement short expiration times</li>
        <li>Use refresh tokens for long-lived sessions</li>
        <li>Store tokens securely (httpOnly cookies for web)</li>
        <li>Validate tokens on every request</li>
        <li>Implement token blacklisting for critical applications</li>
      </ul>
      
      <h3>For Sessions:</h3>
      <ul>
        <li>Use secure, httpOnly cookies</li>
        <li>Implement CSRF protection</li>
        <li>Use secure session stores (Redis, MongoDB)</li>
        <li>Implement session timeout</li>
        <li>Regenerate session IDs after login</li>
        <li>Use HTTPS in production</li>
      </ul>
      
      <h2>Hybrid Approaches</h2>
      <p>Many modern applications use a hybrid approach, combining the benefits of both methods:</p>
      
      <ul>
        <li><strong>JWT for API access</strong> with short expiration times</li>
        <li><strong>Refresh tokens stored as httpOnly cookies</strong> for token renewal</li>
        <li><strong>Session-based authentication for web interface</strong></li>
        <li><strong>JWT for mobile and third-party integrations</strong></li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Both JWT and session-based authentication have their place in modern web development. The choice depends on your specific requirements, architecture, and security needs. Consider factors like scalability requirements, security constraints, and the nature of your application when making this decision.</p>
      
      <p>Remember that security should always be your top priority. Regardless of which approach you choose, implement proper validation, use HTTPS, and follow security best practices to protect your users and application.</p>
    `,
    author: 'Aashish Rijal',
    date: '2025-01-10',
    readTime: '6 min read',
    image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Authentication', 'JWT', 'Security', 'Backend'],
    likes: 38,
    comments: 8,
    views: 980
  },
  {
    id: 3,
    title: 'Database Design Patterns for High-Performance Applications',
    excerpt: 'Explore advanced database design patterns, indexing strategies, and optimization techniques for building high-performance applications with MongoDB and MySQL.',
    content: `
      <h2>Database Design for Performance</h2>
      <p>Proper database design is the foundation of high-performance applications. This comprehensive guide covers essential patterns, optimization techniques, and best practices for both SQL and NoSQL databases, helping you build systems that scale efficiently.</p>
      
      <h2>MongoDB Design Patterns</h2>
      <p>MongoDB's document-based structure offers flexibility, but requires careful design to achieve optimal performance.</p>
      
      <h3>1. Embedded Documents vs References</h3>
      <p>One of the most critical decisions in MongoDB design is choosing between embedding documents and using references.</p>
      
      <h4>Use Embedding When:</h4>
      <ul>
        <li>Data is frequently accessed together</li>
        <li>One-to-few relationships (1:N where N is small)</li>
        <li>Child documents don't need to be queried independently</li>
        <li>Document size remains manageable (< 16MB)</li>
      </ul>
      
      <pre><code>
// Example: Embedding user addresses
{
  "_id": ObjectId("..."),
  "name": "John Doe",
  "email": "john@example.com",
  "addresses": [
    {
      "type": "home",
      "street": "123 Main St",
      "city": "New York",
      "zipCode": "10001"
    },
    {
      "type": "work",
      "street": "456 Business Ave",
      "city": "New York",
      "zipCode": "10002"
    }
  ]
}
      </code></pre>
      
      <h4>Use References When:</h4>
      <ul>
        <li>One-to-many relationships where "many" is large</li>
        <li>Many-to-many relationships</li>
        <li>Child documents are frequently queried independently</li>
        <li>Document size would exceed limits</li>
      </ul>
      
      <pre><code>
// Example: Referencing blog posts and comments
// Posts collection
{
  "_id": ObjectId("..."),
  "title": "Database Design Patterns",
  "content": "...",
  "author": ObjectId("user_id")
}

// Comments collection
{
  "_id": ObjectId("..."),
  "postId": ObjectId("post_id"),
  "author": ObjectId("user_id"),
  "content": "Great article!",
  "createdAt": ISODate("...")
}
      </code></pre>
      
      <h3>2. Advanced MongoDB Patterns</h3>
      
      <h4>Subset Pattern:</h4>
      <p>Store frequently accessed data in the main document and less frequently accessed data in separate collections.</p>
      
      <pre><code>
// Product summary (frequently accessed)
{
  "_id": ObjectId("..."),
  "name": "Laptop",
  "price": 999.99,
  "category": "Electronics",
  "rating": 4.5,
  "reviewCount": 150
}

// Product details (less frequently accessed)
{
  "_id": ObjectId("..."),
  "productId": ObjectId("..."),
  "specifications": { /* detailed specs */ },
  "reviews": [ /* all reviews */ ],
  "inventory": { /* inventory details */ }
}
      </code></pre>
      
      <h4>Bucket Pattern:</h4>
      <p>Group related data to reduce document count and improve query performance.</p>
      
      <pre><code>
// Time-series data bucketed by hour
{
  "_id": ObjectId("..."),
  "sensor_id": "temp_001",
  "timestamp": ISODate("2025-01-15T10:00:00Z"),
  "measurements": [
    { "time": ISODate("2025-01-15T10:00:00Z"), "value": 23.5 },
    { "time": ISODate("2025-01-15T10:01:00Z"), "value": 23.7 },
    // ... more measurements for this hour
  ],
  "count": 60,
  "sum": 1425.5,
  "avg": 23.76
}
      </code></pre>
      
      <h2>MySQL Optimization Strategies</h2>
      
      <h3>1. Indexing Best Practices</h3>
      <p>Proper indexing is crucial for MySQL performance. Here are key strategies:</p>
      
      <h4>Single Column Indexes:</h4>
      <pre><code>
-- Create index on frequently queried columns
CREATE INDEX idx_user_email ON users(email);
CREATE INDEX idx_order_date ON orders(created_at);
CREATE INDEX idx_product_category ON products(category_id);
      </code></pre>
      
      <h4>Composite Indexes:</h4>
      <pre><code>
-- Composite index for multi-column queries
CREATE INDEX idx_user_status_date ON users(status, created_at);
CREATE INDEX idx_order_user_status ON orders(user_id, status, created_at);

-- Query that benefits from composite index
SELECT * FROM orders 
WHERE user_id = 123 AND status = 'completed' 
ORDER BY created_at DESC;
      </code></pre>
      
      <h4>Covering Indexes:</h4>
      <pre><code>
-- Index that covers all columns in the query
CREATE INDEX idx_user_covering ON users(email, status, name, created_at);

-- This query can be satisfied entirely from the index
SELECT name, status, created_at 
FROM users 
WHERE email = 'user@example.com';
      </code></pre>
      
      <h3>2. Query Optimization Techniques</h3>
      
      <h4>Use EXPLAIN to Analyze Queries:</h4>
      <pre><code>
-- Analyze query execution plan
EXPLAIN SELECT * FROM orders o
JOIN users u ON o.user_id = u.id
WHERE u.status = 'active' AND o.created_at > '2025-01-01';

-- Look for:
-- - type: Should be 'ref' or 'range', avoid 'ALL'
-- - key: Should show index usage
-- - rows: Lower is better
-- - Extra: Avoid 'Using filesort' and 'Using temporary'
      </code></pre>
      
      <h4>Optimize JOIN Operations:</h4>
      <pre><code>
-- Efficient JOIN with proper indexes
SELECT u.name, COUNT(o.id) as order_count
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
WHERE u.status = 'active'
GROUP BY u.id, u.name
HAVING order_count > 5;

-- Ensure indexes exist on:
-- users.status, users.id
-- orders.user_id
      </code></pre>
      
      <h4>Pagination Optimization:</h4>
      <pre><code>
-- Inefficient pagination (avoid with large offsets)
SELECT * FROM products ORDER BY id LIMIT 10000, 20;

-- Efficient cursor-based pagination
SELECT * FROM products 
WHERE id > 10000 
ORDER BY id 
LIMIT 20;

-- Or use indexed columns for pagination
SELECT * FROM products 
WHERE created_at < '2025-01-15 10:00:00'
ORDER BY created_at DESC 
LIMIT 20;
      </code></pre>
      
      <h2>Connection Pooling</h2>
      <p>Efficient connection management is crucial for database performance:</p>
      
      <h3>Node.js with MySQL:</h3>
      <pre><code>
const mysql = require('mysql2/promise');

// Create connection pool
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  acquireTimeout: 60000,
  timeout: 60000
});

// Use pool for queries
async function getUser(id) {
  try {
    const [rows] = await pool.execute(
      'SELECT * FROM users WHERE id = ?',
      [id]
    );
    return rows[0];
  } catch (error) {
    console.error('Database query error:', error);
    throw error;
  }
}
      </code></pre>
      
      <h3>Node.js with MongoDB:</h3>
      <pre><code>
const { MongoClient } = require('mongodb');

// Connection with pooling
const client = new MongoClient(process.env.MONGODB_URI, {
  maxPoolSize: 10,
  serverSelectionTimeoutMS: 5000,
  socketTimeoutMS: 45000,
});

async function connectDB() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
    return client.db(process.env.DB_NAME);
  } catch (error) {
    console.error('MongoDB connection error:', error);
    throw error;
  }
}
      </code></pre>
      
      <h2>Caching Strategies</h2>
      
      <h3>1. Application-Level Caching with Redis:</h3>
      <pre><code>
const redis = require('redis');
const client = redis.createClient({
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT
});

// Cache frequently accessed data
async function getUserWithCache(userId) {
  const cacheKey = \`user:\${userId}\`;
  
  // Try to get from cache first
  const cached = await client.get(cacheKey);
  if (cached) {
    return JSON.parse(cached);
  }
  
  // If not in cache, get from database
  const user = await User.findById(userId);
  
  // Store in cache for 1 hour
  await client.setex(cacheKey, 3600, JSON.stringify(user));
  
  return user;
}
      </code></pre>
      
      <h3>2. Query Result Caching:</h3>
      <pre><code>
// Cache expensive aggregation queries
async function getPopularProducts() {
  const cacheKey = 'popular_products';
  
  const cached = await client.get(cacheKey);
  if (cached) {
    return JSON.parse(cached);
  }
  
  const products = await db.collection('products').aggregate([
    { $match: { status: 'active' } },
    { $lookup: { /* join with reviews */ } },
    { $group: { /* calculate averages */ } },
    { $sort: { avgRating: -1, salesCount: -1 } },
    { $limit: 20 }
  ]).toArray();
  
  // Cache for 30 minutes
  await client.setex(cacheKey, 1800, JSON.stringify(products));
  
  return products;
}
      </code></pre>
      
      <h2>Database Monitoring and Performance Tuning</h2>
      
      <h3>Key Metrics to Monitor:</h3>
      <ul>
        <li><strong>Query Response Time:</strong> Average and 95th percentile</li>
        <li><strong>Connection Pool Usage:</strong> Active vs available connections</li>
        <li><strong>Cache Hit Ratio:</strong> Percentage of queries served from cache</li>
        <li><strong>Index Usage:</strong> Which indexes are being used</li>
        <li><strong>Slow Query Log:</strong> Queries taking longer than threshold</li>
      </ul>
      
      <h3>Performance Monitoring Setup:</h3>
      <pre><code>
// Database performance middleware
const performanceMiddleware = (req, res, next) => {
  const start = Date.now();
  
  // Override res.json to capture response time
  const originalJson = res.json;
  res.json = function(data) {
    const duration = Date.now() - start;
    
    // Log slow queries
    if (duration > 1000) {
      console.warn('Slow query detected:', {
        url: req.url,
        method: req.method,
        duration: \`\${duration}ms\`,
        query: req.query
      });
    }
    
    // Send metrics to monitoring service
    metrics.timing('database.query.duration', duration, {
      endpoint: req.route?.path || req.url
    });
    
    return originalJson.call(this, data);
  };
  
  next();
};
      </code></pre>
      
      <h2>Best Practices Summary</h2>
      
      <h3>General Guidelines:</h3>
      <ul>
        <li>Design your schema based on your query patterns</li>
        <li>Use appropriate data types and constraints</li>
        <li>Implement proper indexing strategies</li>
        <li>Use connection pooling for better resource management</li>
        <li>Implement caching at multiple levels</li>
        <li>Monitor performance and optimize based on real data</li>
        <li>Plan for scalability from the beginning</li>
      </ul>
      
      <h3>MongoDB Specific:</h3>
      <ul>
        <li>Embed for one-to-few, reference for one-to-many</li>
        <li>Use compound indexes for multi-field queries</li>
        <li>Consider sharding for very large datasets</li>
        <li>Use aggregation pipeline for complex queries</li>
        <li>Implement proper error handling for network issues</li>
      </ul>
      
      <h3>MySQL Specific:</h3>
      <ul>
        <li>Normalize your data appropriately</li>
        <li>Use foreign key constraints for data integrity</li>
        <li>Optimize JOIN operations with proper indexes</li>
        <li>Use EXPLAIN to analyze query performance</li>
        <li>Consider read replicas for read-heavy workloads</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Database design and optimization is an ongoing process that requires continuous monitoring and refinement. Start with solid design principles, implement proper indexing, use connection pooling and caching strategically, and always measure performance to identify bottlenecks.</p>
      
      <p>Remember that the best database design depends on your specific use case, query patterns, and scalability requirements. Use the patterns and techniques outlined in this guide as a foundation, but always test and optimize based on your application's real-world usage patterns.</p>
    `,
    author: 'Aashish Rijal',
    date: '2025-01-05',
    readTime: '10 min read',
    image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Database', 'MongoDB', 'MySQL', 'Performance'],
    likes: 56,
    comments: 15,
    views: 1420
  },
  {
    id: 4,
    title: 'Building Real-time Applications with Socket.io and Node.js',
    excerpt: 'Learn how to create real-time applications using Socket.io. We\'ll build a chat application and explore advanced features like rooms, namespaces, and scaling.',
    content: `
      <h2>Real-time Communication with Socket.io</h2>
      <p>Socket.io enables real-time, bidirectional communication between clients and servers, making it perfect for building interactive applications like chat systems, live updates, collaborative tools, and real-time dashboards. This comprehensive guide will take you through building production-ready real-time applications.</p>
      
      <h2>Understanding WebSockets and Socket.io</h2>
      <p>WebSockets provide a persistent connection between client and server, allowing for instant data exchange. Socket.io builds on top of WebSockets, adding features like automatic reconnection, room management, and fallback options.</p>
      
      <h3>Key Benefits of Socket.io:</h3>
      <ul>
        <li><strong>Automatic Reconnection:</strong> Handles connection drops gracefully</li>
        <li><strong>Room Management:</strong> Easy grouping of connections</li>
        <li><strong>Fallback Support:</strong> Works even when WebSockets aren't available</li>
        <li><strong>Event-based:</strong> Clean, event-driven architecture</li>
        <li><strong>Cross-platform:</strong> Works across different platforms and browsers</li>
      </ul>
      
      <h2>Setting Up Socket.io Server</h2>
      <p>Let's start by creating a basic Socket.io server with Express.js:</p>
      
      <pre><code>
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');

const app = express();
const server = http.createServer(app);

// Configure Socket.io with CORS
const io = socketIo(server, {
  cors: {
    origin: process.env.CLIENT_URL || "http://localhost:3000",
    methods: ["GET", "POST"],
    credentials: true
  },
  pingTimeout: 60000,
  pingInterval: 25000
});

// Middleware
app.use(cors());
app.use(express.json());

// Basic connection handling
io.on('connection', (socket) => {
  console.log('User connected:', socket.id);
  
  // Handle disconnection
  socket.on('disconnect', (reason) => {
    console.log('User disconnected:', socket.id, 'Reason:', reason);
  });
  
  // Handle connection errors
  socket.on('error', (error) => {
    console.error('Socket error:', error);
  });
});

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(\`Server running on port \${PORT}\`);
});
      </code></pre>
      
      <h2>Building a Real-time Chat Application</h2>
      <p>Let's build a comprehensive chat application with multiple features:</p>
      
      <h3>1. User Authentication and Management</h3>
      <pre><code>
const jwt = require('jsonwebtoken');
const User = require('./models/User');

// Authentication middleware for Socket.io
const authenticateSocket = async (socket, next) => {
  try {
    const token = socket.handshake.auth.token;
    if (!token) {
      return next(new Error('Authentication error'));
    }
    
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.userId);
    
    if (!user) {
      return next(new Error('User not found'));
    }
    
    socket.userId = user._id.toString();
    socket.username = user.username;
    socket.avatar = user.avatar;
    
    next();
  } catch (error) {
    next(new Error('Authentication error'));
  }
};

// Apply authentication middleware
io.use(authenticateSocket);

// Store active users
const activeUsers = new Map();

io.on('connection', (socket) => {
  // Add user to active users
  activeUsers.set(socket.userId, {
    socketId: socket.id,
    username: socket.username,
    avatar: socket.avatar,
    status: 'online',
    lastSeen: new Date()
  });
  
  // Broadcast user joined
  socket.broadcast.emit('user_joined', {
    userId: socket.userId,
    username: socket.username,
    avatar: socket.avatar
  });
  
  // Send active users list to new user
  socket.emit('active_users', Array.from(activeUsers.values()));
  
  socket.on('disconnect', () => {
    activeUsers.delete(socket.userId);
    socket.broadcast.emit('user_left', {
      userId: socket.userId,
      username: socket.username
    });
  });
});
      </code></pre>
      
      <h3>2. Chat Rooms and Messaging</h3>
      <pre><code>
const Message = require('./models/Message');
const Room = require('./models/Room');

io.on('connection', (socket) => {
  // Join a chat room
  socket.on('join_room', async (roomId) => {
    try {
      // Verify user has access to room
      const room = await Room.findById(roomId);
      if (!room || !room.members.includes(socket.userId)) {
        socket.emit('error', { message: 'Access denied to room' });
        return;
      }
      
      // Leave previous rooms
      socket.rooms.forEach(room => {
        if (room !== socket.id) {
          socket.leave(room);
        }
      });
      
      // Join new room
      socket.join(roomId);
      socket.currentRoom = roomId;
      
      // Get recent messages
      const messages = await Message.find({ roomId })
        .populate('sender', 'username avatar')
        .sort({ createdAt: -1 })
        .limit(50);
      
      socket.emit('room_joined', {
        roomId,
        messages: messages.reverse()
      });
      
      // Notify others in room
      socket.to(roomId).emit('user_joined_room', {
        userId: socket.userId,
        username: socket.username
      });
      
    } catch (error) {
      socket.emit('error', { message: 'Failed to join room' });
    }
  });
  
  // Handle new messages
  socket.on('send_message', async (data) => {
    try {
      const { content, type = 'text', roomId } = data;
      
      if (!socket.currentRoom || socket.currentRoom !== roomId) {
        socket.emit('error', { message: 'Not in specified room' });
        return;
      }
      
      // Validate message content
      if (!content || content.trim().length === 0) {
        socket.emit('error', { message: 'Message content required' });
        return;
      }
      
      // Save message to database
      const message = new Message({
        content: content.trim(),
        type,
        sender: socket.userId,
        roomId,
        createdAt: new Date()
      });
      
      await message.save();
      await message.populate('sender', 'username avatar');
      
      // Broadcast message to room
      io.to(roomId).emit('new_message', {
        _id: message._id,
        content: message.content,
        type: message.type,
        sender: message.sender,
        roomId: message.roomId,
        createdAt: message.createdAt
      });
      
      // Update room's last message
      await Room.findByIdAndUpdate(roomId, {
        lastMessage: message._id,
        lastActivity: new Date()
      });
      
    } catch (error) {
      socket.emit('error', { message: 'Failed to send message' });
    }
  });
  
  // Handle typing indicators
  socket.on('typing_start', (roomId) => {
    socket.to(roomId).emit('user_typing', {
      userId: socket.userId,
      username: socket.username
    });
  });
  
  socket.on('typing_stop', (roomId) => {
    socket.to(roomId).emit('user_stopped_typing', {
      userId: socket.userId
    });
  });
});
      </code></pre>
      
      <h3>3. Advanced Features</h3>
      
      <h4>Message Reactions and Read Receipts:</h4>
      <pre><code>
// Message reactions
socket.on('add_reaction', async (data) => {
  try {
    const { messageId, emoji } = data;
    
    const message = await Message.findById(messageId);
    if (!message) {
      socket.emit('error', { message: 'Message not found' });
      return;
    }
    
    // Add or update reaction
    const existingReaction = message.reactions.find(
      r => r.user.toString() === socket.userId && r.emoji === emoji
    );
    
    if (existingReaction) {
      // Remove reaction if it already exists
      message.reactions = message.reactions.filter(
        r => !(r.user.toString() === socket.userId && r.emoji === emoji)
      );
    } else {
      // Add new reaction
      message.reactions.push({
        user: socket.userId,
        emoji,
        createdAt: new Date()
      });
    }
    
    await message.save();
    
    // Broadcast reaction update
    io.to(message.roomId.toString()).emit('reaction_updated', {
      messageId,
      reactions: message.reactions
    });
    
  } catch (error) {
    socket.emit('error', { message: 'Failed to add reaction' });
  }
});

// Read receipts
socket.on('mark_as_read', async (data) => {
  try {
    const { messageId, roomId } = data;
    
    await Message.findByIdAndUpdate(messageId, {
      $addToSet: { readBy: socket.userId }
    });
    
    socket.to(roomId).emit('message_read', {
      messageId,
      userId: socket.userId,
      username: socket.username
    });
    
  } catch (error) {
    console.error('Failed to mark message as read:', error);
  }
});
      </code></pre>
      
      <h2>Client-Side Implementation</h2>
      <p>Here's how to implement the client-side Socket.io connection:</p>
      
      <pre><code>
import io from 'socket.io-client';

class ChatClient {
  constructor() {
    this.socket = null;
    this.currentRoom = null;
    this.isConnected = false;
  }
  
  connect(token) {
    this.socket = io(process.env.REACT_APP_SERVER_URL, {
      auth: { token },
      transports: ['websocket', 'polling'],
      timeout: 20000,
      forceNew: true
    });
    
    this.setupEventListeners();
  }
  
  setupEventListeners() {
    this.socket.on('connect', () => {
      console.log('Connected to server');
      this.isConnected = true;
      this.onConnectionChange?.(true);
    });
    
    this.socket.on('disconnect', (reason) => {
      console.log('Disconnected:', reason);
      this.isConnected = false;
      this.onConnectionChange?.(false);
    });
    
    this.socket.on('connect_error', (error) => {
      console.error('Connection error:', error);
      this.onError?.('Failed to connect to server');
    });
    
    this.socket.on('new_message', (message) => {
      this.onNewMessage?.(message);
    });
    
    this.socket.on('user_typing', (data) => {
      this.onUserTyping?.(data);
    });
    
    this.socket.on('user_stopped_typing', (data) => {
      this.onUserStoppedTyping?.(data);
    });
    
    this.socket.on('error', (error) => {
      this.onError?.(error.message);
    });
  }
  
  joinRoom(roomId) {
    if (this.socket && this.isConnected) {
      this.socket.emit('join_room', roomId);
      this.currentRoom = roomId;
    }
  }
  
  sendMessage(content, type = 'text') {
    if (this.socket && this.isConnected && this.currentRoom) {
      this.socket.emit('send_message', {
        content,
        type,
        roomId: this.currentRoom
      });
    }
  }
  
  startTyping() {
    if (this.socket && this.isConnected && this.currentRoom) {
      this.socket.emit('typing_start', this.currentRoom);
    }
  }
  
  stopTyping() {
    if (this.socket && this.isConnected && this.currentRoom) {
      this.socket.emit('typing_stop', this.currentRoom);
    }
  }
  
  disconnect() {
    if (this.socket) {
      this.socket.disconnect();
      this.socket = null;
      this.isConnected = false;
    }
  }
}

// Usage in React component
const chatClient = new ChatClient();

function ChatComponent() {
  const [messages, setMessages] = useState([]);
  const [isConnected, setIsConnected] = useState(false);
  
  useEffect(() => {
    chatClient.onConnectionChange = setIsConnected;
    chatClient.onNewMessage = (message) => {
      setMessages(prev => [...prev, message]);
    };
    
    chatClient.connect(localStorage.getItem('token'));
    
    return () => {
      chatClient.disconnect();
    };
  }, []);
  
  // Component JSX...
}
      </code></pre>
      
      <h2>Scaling Socket.io Applications</h2>
      <p>For production applications, you'll need to consider scaling strategies:</p>
      
      <h3>1. Redis Adapter for Multiple Servers</h3>
      <pre><code>
const { createAdapter } = require('@socket.io/redis-adapter');
const { createClient } = require('redis');

// Create Redis clients
const pubClient = createClient({
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
  password: process.env.REDIS_PASSWORD
});

const subClient = pubClient.duplicate();

// Setup Redis adapter
io.adapter(createAdapter(pubClient, subClient));

// Handle Redis connection
pubClient.on('error', (err) => {
  console.error('Redis Pub Client Error:', err);
});

subClient.on('error', (err) => {
  console.error('Redis Sub Client Error:', err);
});

// Connect to Redis
Promise.all([pubClient.connect(), subClient.connect()])
  .then(() => {
    console.log('Connected to Redis');
  })
  .catch((err) => {
    console.error('Redis connection failed:', err);
  });
      </code></pre>
      
      <h3>2. Load Balancing with Sticky Sessions</h3>
      <pre><code>
// nginx.conf for sticky sessions
upstream socketio_backend {
    ip_hash;  # Ensures same client goes to same server
    server 127.0.0.1:3001;
    server 127.0.0.1:3002;
    server 127.0.0.1:3003;
}

server {
    listen 80;
    server_name your-domain.com;
    
    location /socket.io/ {
        proxy_pass http://socketio_backend;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
      </code></pre>
      
      <h2>Performance Optimization and Monitoring</h2>
      
      <h3>Connection Management:</h3>
      <pre><code>
// Monitor connection counts
let connectionCount = 0;

io.on('connection', (socket) => {
  connectionCount++;
  console.log(\`Active connections: \${connectionCount}\`);
  
  socket.on('disconnect', () => {
    connectionCount--;
    console.log(\`Active connections: \${connectionCount}\`);
  });
});

// Periodic health check
setInterval(() => {
  console.log('Server Health:', {
    connections: connectionCount,
    memory: process.memoryUsage(),
    uptime: process.uptime()
  });
}, 30000);
      </code></pre>
      
      <h3>Rate Limiting:</h3>
      <pre><code>
const rateLimit = new Map();

const checkRateLimit = (socketId, event, maxRequests = 10, windowMs = 60000) => {
  const key = \`\${socketId}:\${event}\`;
  const now = Date.now();
  
  if (!rateLimit.has(key)) {
    rateLimit.set(key, { count: 1, resetTime: now + windowMs });
    return true;
  }
  
  const limit = rateLimit.get(key);
  
  if (now > limit.resetTime) {
    limit.count = 1;
    limit.resetTime = now + windowMs;
    return true;
  }
  
  if (limit.count >= maxRequests) {
    return false;
  }
  
  limit.count++;
  return true;
};

// Apply rate limiting to message sending
socket.on('send_message', (data) => {
  if (!checkRateLimit(socket.id, 'send_message', 30, 60000)) {
    socket.emit('error', { message: 'Rate limit exceeded' });
    return;
  }
  
  // Process message...
});
      </code></pre>
      
      <h2>Best Practices and Security</h2>
      
      <h3>Security Considerations:</h3>
      <ul>
        <li><strong>Authentication:</strong> Always authenticate socket connections</li>
        <li><strong>Authorization:</strong> Verify user permissions for rooms and actions</li>
        <li><strong>Input Validation:</strong> Validate all incoming data</li>
        <li><strong>Rate Limiting:</strong> Prevent spam and abuse</li>
        <li><strong>CORS Configuration:</strong> Properly configure CORS for production</li>
        <li><strong>Error Handling:</strong> Don't expose sensitive information in errors</li>
      </ul>
      
      <h3>Performance Best Practices:</h3>
      <ul>
        <li>Use rooms to limit broadcast scope</li>
        <li>Implement connection pooling for databases</li>
        <li>Cache frequently accessed data</li>
        <li>Use Redis for scaling across multiple servers</li>
        <li>Monitor memory usage and connection counts</li>
        <li>Implement graceful shutdown procedures</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Building real-time applications with Socket.io opens up possibilities for creating engaging, interactive user experiences. From simple chat applications to complex collaborative tools, Socket.io provides the foundation for real-time communication.</p>
      
      <p>Remember to focus on security, scalability, and performance from the beginning. Implement proper authentication, use rate limiting, and plan for scaling as your application grows. With the patterns and techniques covered in this guide, you'll be well-equipped to build production-ready real-time applications.</p>
      
      <p>The key to successful real-time applications is balancing functionality with performance, ensuring that your application remains responsive and reliable even under high load.</p>
    `,
    author: 'Aashish Rijal',
    date: '2024-12-28',
    readTime: '12 min read',
    image: 'https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Socket.io', 'Real-time', 'Node.js', 'Chat'],
    likes: 73,
    comments: 22,
    views: 1890
  }
];