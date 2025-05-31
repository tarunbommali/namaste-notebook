import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useBookmarks } from "../hook/useBookmark";
import { courseList } from "../utils/constants";
import { BsArrowLeft, BsBookmark, BsBookmarkFill } from "react-icons/bs";
import SearchBar from "../components/SearchBar";
import { useTheme } from "../hook/useTheme";

const CourseOverview = () => {
  const { courseId } = useParams();
  const [searchTerm, setSearchTerm] = useState('');
  const { bookmarks, toggleBookmark } = useBookmarks();
  const theme = useTheme(); // Get current theme styles

  const course = courseList.find(c => c.id === courseId);
  if (!course) {
    return (
      <div className={`min-h-screen pt-16 flex items-center justify-center ${theme.bgColor}`}>
        <div className="text-center">
          <h1 className={`text-2xl font-bold text-red-600 mb-4`}>Course Not Found</h1>
          <p className={`${theme.contentText} mb-6`}>
            The requested course could not be found.
          </p>
          <Link to="/" className={`px-4 py-2 rounded-lg ${theme.btn.primary}`}>
            Go Home
          </Link>
        </div>
      </div>
    );
  }

  const allEpisodes = course.seasons.flatMap(season =>
    season.episodes.map(episode => ({
      ...episode,
      seasonId: season.id,
      seasonTitle: season.title,
      path: `/${course.id}/${season.id}/${episode.id}`
    }))
  );

  const filteredEpisodes = allEpisodes.filter(episode =>
    episode.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    episode.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    episode.seasonTitle.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={`min-h-screen pt-16 ${theme.bgColor}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <div className="flex items-center space-x-4 mb-6">
            <Link to="/" className={`p-2 rounded-lg ${theme.contentText} hover:${theme.cardBg}`}>
              <BsArrowLeft size={20} />
            </Link>
            <div>
              <h1 className={`text-3xl font-bold flex items-center ${theme.textColor}`}>
                <span className="mr-3 text-4xl">{course.icon}</span>
                {course.courseTitle}
              </h1>
              <p className={`mt-2 ${theme.contentText}`}>{course.description}</p>
            </div>
          </div>

          <div className={`flex items-center space-x-6 text-sm ${theme.contentText}`}>
            <span className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2" />
              {course.seasons.length} Seasons
            </span>
            <span className="flex items-center">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-2" />
              {allEpisodes.length} Episodes
            </span>
          </div>
        </div>

        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          placeholder="Search episodes..."
        />

        {searchTerm && (
          <div>
            <h2 className={`text-xl font-semibold my-6 ${theme.headingColor}`}>
              Search Results ({filteredEpisodes.length})
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredEpisodes.map(episode => {
                const isBookmarked = bookmarks.includes(episode.path);
                return (
                  <div
                    key={episode.id}
                    className={`group rounded-lg p-6 transition-all duration-300 ${theme.cardBg} ${theme.cardBorder}`}
                  >
                    <Link to={episode.path}>
                      <div className="flex items-start justify-between mb-3">
                        <h3 className={`text-lg font-semibold group-hover:${theme.headingColor} transition-colors ${theme.textColor}`}>
                          {episode.title}
                        </h3>
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            toggleBookmark(episode.path);
                          }}
                          className="ml-2 p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          {isBookmarked ? (
                            <BsBookmarkFill size={16} className="text-yellow-500" />
                          ) : (
                            <BsBookmark size={16} className={theme.contentText} />
                          )}
                        </button>
                      </div>
                      <p className={`text-sm ${theme.headingColor} mb-2`}>
                        {episode.seasonTitle}
                      </p>
                      <p className={`text-sm ${theme.contentText} line-clamp-3`}>
                        {episode.description}
                      </p>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {!searchTerm && course.seasons.map(season => (
          <div key={season.id} className={`rounded-lg mb-10 shadow-md ${theme.cardBg} ${theme.cardBorder}`}>
            <div className={`p-6 border-b ${theme.cardBorder}`}>
              <h2 className={`text-xl font-bold flex items-center ${theme.headingColor}`}>
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                {season.title}
              </h2>
              <p className={`${theme.contentText} mt-2`}>{season.episodes.length} Episodes</p>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {season.episodes.map(episode => {
                  const episodePath = `/${course.id}/${season.id}/${episode.id}`;
                  const isBookmarked = bookmarks.includes(episodePath);

                  return (
                    <div
                      key={episode.id}
                      className={`group rounded-lg p-4 transition-colors   ${theme.cardBorder} ${theme.cardBg}`}
                    >
                      <Link to={episodePath}>
                        <div className="flex items-start justify-between mb-2">
                          <h3 className={`text-sm font-semibold group-hover:${theme.headingColor} transition-colors ${theme.textColor}`}>
                            {episode.title}
                          </h3>
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              toggleBookmark(episodePath);
                            }}
                            className="ml-2 p-1 rounded opacity-90 group-hover:opacity-100 transition-opacity"
                          >
                            {isBookmarked ? (
                              <BsBookmarkFill size={14} className="text-yellow-500" />
                            ) : (
                              <BsBookmark size={14} className={theme.contentText} />
                            )}
                          </button>
                        </div>
                        <p className={`text-xs ${theme.contentText} line-clamp-2`}>
                          {episode.description}
                        </p>
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ))}

        {searchTerm && filteredEpisodes.length === 0 && (
          <div className="text-center py-12">
            <p className={`text-lg ${theme.contentText}`}>
              No episodes found matching your search.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseOverview;
