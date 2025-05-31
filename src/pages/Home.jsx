/* eslint-disable no-unused-vars */
import { useState } from "react";
import { courseList } from "../utils/constants";
import { Link } from "react-router-dom";
import { Search, ArrowRight, BookOpen, Code, Star } from "lucide-react";
import { useTheme } from "../hook/useTheme";
import Empty from "../components/Empty";
import HeroCard from "../components/HeroCard";
import HeroSection from "../components/HeroSection";

const SearchBar = ({ searchTerm, setSearchTerm, placeholder, theme }) => (
  <div className="relative group">
    <Search
      className={`absolute left-3 md:left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 ${theme.textMuted} group-focus-within:text-blue-500 transition-colors`}
    />
    <input
      type="text"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      placeholder={placeholder}
      className={`
        w-full pl-10 md:pl-12 pr-4 py-3 md:py-4 rounded-xl md:rounded-2xl border-2 border-transparent 
        ${theme.cardBg} ${theme.textPrimary} ${theme.cardShadow}
        focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500/20
        transition-all duration-300 text-base md:text-lg placeholder-gray-400
      `}
    />
  </div>
);

const FeatureCard = ({ icon: Icon, title, description, stats, theme }) => (
  <div
    className={`
    group relative overflow-hidden rounded-3xl border p-8 
    ${theme.cardBg} ${theme.cardBorder} ${theme.cardShadow}
    hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25
    transition-all duration-500 cursor-pointer
  `}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

    <div className="relative">
      <div
        className={`
        inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6
        ${theme.accent} ${theme.textPrimary} group-hover:scale-110 transition-transform duration-300
      `}
      >
        <Icon className="w-8 h-8 text-white" />
      </div>

      <h3
        className={`text-2xl font-bold mb-4 ${theme.textPrimary} group-hover:${theme.textAccent} transition-colors`}
      >
        {title}
      </h3>

      <p className={`${theme.textSecondary} mb-6 leading-relaxed`}>
        {description}
      </p>

      <div className={`text-sm ${theme.textMuted} font-medium`}>{stats}</div>
    </div>
  </div>
);

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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <HeroSection theme={theme}/>
        {/* Search Section */}
        <div className="max-w-2xl mx-auto mb-10 md:mb-12 px-4">
          <SearchBar
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            placeholder="Search courses..."
            theme={theme}
          />
        </div>

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
  );
};

export default Home;
