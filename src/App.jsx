import "./App.css";
import { useTheme } from "./hook/useTheme";
import Header from "./components/Header";
import Home from "./pages/Home";
import Markdown from "./pages/Markdown";

// 1. Import Routes in addition to BrowserRouter and Route
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RedirectToFirstEpisode from "./components/RedirectToFirstEpisode";

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="App min-h-[100vh] pb-4">
      {/* BrowserRouter should wrap your entire app that needs routing */}
      <BrowserRouter>
        <Header theme={theme} toggleTheme={toggleTheme} />
        <main className="pt-6 md:pt-16 pb-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:courseId" element={<RedirectToFirstEpisode />} />

            <Route
              path="/:courseId/:seasonId/:episodeId"
              element={<Markdown />}
            />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
