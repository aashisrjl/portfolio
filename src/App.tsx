import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import BlogList from './pages/BlogList';
import BlogDetail from './pages/BlogDetail';
import CSIT from './pages/CSIT';
import Labs from './pages/Labs';
import Notes from './pages/Notes';
import AnalyticsTracker from './data/AnalyticsTracker';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white">
        <AnalyticsTracker />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<BlogList />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path='/csit' element={<CSIT />} />
          <Route path='/csit/labs' element={<Labs />} />
           <Route path='/csit/notes' element={<Notes />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;