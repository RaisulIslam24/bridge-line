import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import ProjectsPage from './pages/ProjectsPage'; 
import NewsPage from './pages/NewsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUsPage />} />
		<Route path="/projects" element={<ProjectsPage />} />
		<Route path="/news" element={<NewsPage />} />
      </Routes>
    </Router>
  );
}

export default App;