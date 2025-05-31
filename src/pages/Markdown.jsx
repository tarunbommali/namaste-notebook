import { useBookmarks } from "../hook/useBookmark";
import { useParams, Link } from "react-router-dom";
import SideBar from "../components/SideBar";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import { NavigationButtons } from "../components/NavigationButton";
import { readmeMap } from "../utils/readmeMap";
import { useTheme } from "../hook/useTheme";
import MarkdownRenderer from "../components/MarkdownRenderer";
import { getFullDetailsFromPath } from "../helper/getDetailsFromPath";

const Markdown = () => {
  const { courseId, seasonId, episodeId } = useParams();
  const { bookmarks, toggleBookmark } = useBookmarks();
  const theme = useTheme();

  const episodePath = `/${courseId}/${seasonId}/${episodeId}`;

  // Use helper to get full details from path
  const details = getFullDetailsFromPath(episodePath);

  if (!details) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${theme.bgColor}`}>
        <div className="text-center">
          <h1 className={`text-2xl font-bold mb-4 ${theme.headingColor}`}>
            Content Not Found
          </h1>
          <p className={`mb-6 ${theme.mutedText}`}>
            The requested episode could not be found.
          </p>
          <Link
            to="/"
            className={`px-4 py-2 rounded-lg transition-colors ${theme.btn.primary}`}
          >
            Go Home
          </Link>
        </div>
      </div>
    );
  }

  const { course, season, episode } = details;

  const normalize = (val) => val?.toLowerCase().replace(/-/g, "_");

  const content =
    readmeMap?.[normalize(courseId)]?.[normalize(seasonId)]?.[normalize(episodeId)];

  const isBookmarked = bookmarks.includes(episodePath);

  return (
    <div className={`min-h-screen ${theme.bgColor}`}>
      <SideBar course={course} />

      <main className={`pt-16 transition-all duration-300`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className={`rounded-lg shadow-lg ${theme.cardBg} ${theme.cardBorder}`}>
            <div className={`p-6 border-b ${theme.cardBorder}`}>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{course.icon}</span>
                  <div>
                    <h1 className={`text-2xl font-bold ${theme.textColor}`}>
                      {episode.title}
                    </h1>
                    <p className={theme.mutedText}>
                      {course.courseTitle} • {season.title}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => toggleBookmark(episodePath)}
                  className={`p-2 rounded-lg transition-colors ${theme.hoverBg}`}
                  title={isBookmarked ? "Remove Bookmark" : "Add Bookmark"}
                >
                  {isBookmarked ? (
                    <BsBookmarkFill size={20} className={theme.highlightText} />
                  ) : (
                    <BsBookmark size={20} className="text-gray-400" />
                  )}
                </button>
              </div>
              {episode.description && (
                <p className={theme.mutedText}>{episode.description}</p>
              )}
            </div>

            <div className="p-6">
              {!content ? (
                <div
                  className={`min-h-screen pt-16 flex items-center justify-center ${theme.bgColor}`}
                >
                  <div className="text-center">
                    <h1
                      className={`text-2xl font-bold mb-4 ${theme.headingColor}`}
                    >
                      Content Not Found
                    </h1>
                    <p className={`mb-6 ${theme.mutedText}`}>
                      The requested episode could not be found.
                    </p>
                    <Link
                      to="/"
                      className={`px-4 py-2 rounded-lg transition-colors ${theme.btn.primary}`}
                    >
                      Go Home
                    </Link>
                  </div>
                </div>
              ) : (
                <MarkdownRenderer content={content} />
              )}
              <NavigationButtons
                course={course}
                currentEpisode={{ seasonId, episodeId }}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Markdown;
