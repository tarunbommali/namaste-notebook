import { useBookmarks } from "../hook/useBookmark";
import { Link } from "react-router-dom";
import { BookmarkMinus, BookOpen } from "lucide-react";
import { useTheme } from "../hook/useTheme";
import { getDetailsFromPath } from "../helper/getDetailsFromPath";

const Bookmarks = () => {
  const { bookmarks, toggleBookmark } = useBookmarks();
  const theme = useTheme();

  // get detailed info for bookmarks
  const bookmarkDetails = bookmarks.map(getDetailsFromPath).filter(Boolean);

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 flex items-center gap-2">
        <BookOpen className="text-blue-500" />
        Your Bookmarks
      </h1>

      {bookmarkDetails.length === 0 ? (
        <div className="text-gray-500 text-lg text-center mt-10">
          No bookmarks yet. Go explore and save your favorite episodes!
        </div>
      ) : (
        <ul className="space-y-4">
          {bookmarkDetails.map(({ path, courseTitle, seasonTitle, episodeTitle }) => (
            <li
              key={path}
              className={`${theme.bgColor} rounded-xl shadow p-4 flex items-center justify-between hover:shadow-md transition`}
            >
              <Link
                to={path}
                className="text-blue-600 dark:text-blue-400 font-medium hover:underline text-lg"
              >
                {/* Show user-friendly title */}
                {courseTitle} / {seasonTitle} / {episodeTitle}
              </Link>
              <button
                onClick={() => toggleBookmark(path)}
                className="text-red-500 hover:text-red-700 transition"
                title="Remove Bookmark"
              >
                <BookmarkMinus size={20} />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Bookmarks;
