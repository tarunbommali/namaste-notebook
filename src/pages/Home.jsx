import { useState } from "react";
import { courseList } from "../utils/constants";
import SearchBar from '../components/SearchBar';
import { Link } from "react-router-dom";
import { useTheme } from "../hook/useTheme";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const theme = useTheme();

  const filteredCourses = courseList.filter(
    (course) =>
      course.courseTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.description?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={`min-h-screen pt-16 transition-colors duration-300 ${theme.bgColor}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className={`text-4xl font-bold mb-4 ${theme.heroHeading}`}>
            Welcome to Namaste Notebook 📚
          </h1>
          <p className={`text-xl max-w-3xl mx-auto ${theme.heroText}`}>
            Your comprehensive documentation hub for Namaste Dev courses.
            Explore detailed notes, code examples, and insights from every
            episode.
          </p>
        </div>

        {/* Search */}
        <div className="max-w-2xl mx-auto mb-12">
          <SearchBar
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            placeholder="Search courses..."
          />
        </div>

        {/* Course Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => {
            const totalEpisodes = course.seasons.reduce(
              (sum, season) => sum + season.episodes.length,
              0
            );

            return (
              <Link
                key={course.id}
                to={`/${course.id}`}
                className={`group block rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${theme.cardBg} ${theme.cardBorder}`}
              >
                <div className="p-8">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {course.icon}
                  </div>
                  <h2 className={`text-2xl font-bold mb-3 transition-colors group-hover:${theme.highlightText} ${theme.textColor}`}>
                    {course.courseTitle}
                  </h2>
                  <p className={`mb-4 line-clamp-2 ${theme.contentText}`}>
                    {course.description}
                  </p>
                  <div className={`flex items-center justify-between text-sm ${theme.mutedText}`}>
                    <span>{course.seasons.length} Seasons</span>
                    <span>{totalEpisodes} Episodes</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <p className={`text-lg ${theme.mutedText}`}>
              No courses found matching your search.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
