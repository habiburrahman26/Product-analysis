import { Route, Routes } from 'react-router-dom';
import Blogs from './components/Blogs/Blogs';
import Dashboard from './components/Dashboard/Dashboard';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import AllReview from './components/Reviews/AllReview';
import NotFound from './components/UI/NotFound';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="reviews" element={<AllReview />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
