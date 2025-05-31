import Home from '../src/pages/Home'
import CourseOverview from '../src/pages/CourseOverview'
import Markdown from '../src/pages/Markdown'
import { BrowserRouter, Routes, Route , Navigate} from 'react-router-dom'
import {useTheme} from '../src/hook/useTheme'
import Header from '../src/components/Header'

const App = () => {
  useTheme();
  const currentTheme = localStorage.getItem("theme") || "light";

  const toggleTheme = () => {
    const newTheme = currentTheme === "light" ? "dark" : "light";
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    document.documentElement.className = newTheme;
    window.location.reload(); 
  };

  return (
    <BrowserRouter>
      <div className={`min-h-screen`}>
        <Header  theme={currentTheme} toggleTheme={toggleTheme}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:courseId" element={<CourseOverview />} />
          <Route path="/:courseId/:seasonId/:episodeId" element={<Markdown />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;