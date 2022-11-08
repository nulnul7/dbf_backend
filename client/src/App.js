import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import Login from './pages/Login';
import Portfolio from './pages/Portfolio';
import './App.css';
import PortfolioRendered from './pages/PortfolioRendered';


function App() {
  return (
    <div className="appContainer">
      <div className='appWrapper'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/:slug" element={<PortfolioRendered />} />
          
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
          
          <Route path='/masuk' element={<Login />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
