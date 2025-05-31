/* eslint-disable no-unused-vars */
import { useState } from "react";
import { courseList } from "../utils/constants";
import { useTheme } from "../hook/useTheme";
import Empty from "../components/Empty";
import HeroCard from "../components/HeroCard";
import HeroSection from "../components/HeroSection";
import SearchBar from "../components/SearchBar";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const theme = useTheme();

  const filteredCourses = courseList.filter(
    (course) =>
      course.courseTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.description?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div
      className={`min-h-screen transition-all duration-500 ${theme.bgGradient}`}
    >
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <HeroSection theme={theme} />

        <div className="min-h-[90vh]">
        
          {/* Course Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 pb-12 md:pb-16 px-4">
            {filteredCourses.map((course) => {
              const totalEpisodes = course.seasons.reduce(
                (sum, season) => sum + season.episodes.length,
                0
              );

              return (
                <HeroCard
                  course={course}
                  totalEpisodes={totalEpisodes}
                  theme={theme}
                  key={course.id}
                />
              );
            })}
          </div>

          {/* Empty State */}
          {filteredCourses.length === 0 && <Empty theme={theme} />}
        </div>
      </div>
    </div>
  );
};

export default Home;
