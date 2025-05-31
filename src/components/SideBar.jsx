import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useBookmarks } from "../hook/useBookmark";
import { RiMenuFold3Fill, RiMenuUnfold3Fill } from "react-icons/ri";
import SearchBar from "./SearchBar";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import { useTheme } from "../hook/useTheme";

const Sidebar = ({ course }) => {
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState("");
  const { bookmarks, toggleBookmark } = useBookmarks();
  const theme = useTheme();

  const filteredEpisodes =
    course?.seasons.flatMap((season) =>
      season.episodes
        .filter(
          (episode) =>
            episode.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            episode.description
              ?.toLowerCase()
              .includes(searchTerm.toLowerCase())
        )
        .map((episode) => ({
          ...episode,
          seasonId: season.id,
          seasonTitle: season.title,
        }))
    ) || [];

  return (
    <>
      <div className="fixed inset-0  z-40 md:hidden" />
      <aside
        className={`fixed left-0 top-16 h-[calc(100vh-4rem)] w-80 ${theme.background}  z-50 overflow-y-auto`}
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2
                className={`text-lg font-bold flex items-center ${theme.textPrimary}`}
              >
                {course?.icon} {course?.courseTitle}
              </h2>
              <p className={`text-sm mt-1 ${theme.textSecondary}`}>
                {course?.description}
              </p>
            </div>
          </div>

          <SearchBar
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            placeholder="Search episodes..."
          />

          <div className="space-y-6">
            {searchTerm ? (
              <div>
                <h3
                  className={`text-sm font-semibold mb-3 ${theme.textPrimary}`}
                >
                  Search Results ({filteredEpisodes.length})
                </h3>
                <div className="space-y-2">
                  {filteredEpisodes.map((episode) => {
                    const episodePath = `/${course.id}/${episode.seasonId}/${episode.id}`;
                    const isActive = location.pathname === episodePath;
                    const isBookmarked = bookmarks.includes(episodePath);

                    return (
                      <div
                        key={`${episode.seasonId}-${episode.id}`}
                        className="group"
                      >
                        <Link
                          to={episodePath}
                          className={`block p-3 rounded-lg transition-all duration-200 ${
                            isActive
                              ? `${theme.accent} ${theme.accentForeground} ${theme.border} border`
                              : `${theme.textSecondary} ${theme.hover}`
                          }`}
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium truncate">
                                {episode.title}
                              </p>
                              <p
                                className={`text-xs mt-1 ${theme.textTertiary}`}
                              >
                                {episode.seasonTitle}
                              </p>
                              {episode.description && (
                                <p
                                  className={`text-xs mt-1 line-clamp-2 ${theme.textTertiary}`}
                                >
                                  {episode.description}
                                </p>
                              )}
                            </div>
                            <button
                              onClick={(e) => {
                                e.preventDefault();
                                toggleBookmark(episodePath);
                              }}
                              className="ml-2 p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                              {isBookmarked ? (
                                <BsBookmarkFill
                                  size={14}
                                  className="text-yellow-500"
                                />
                              ) : (
                                <BsBookmark
                                  size={14}
                                  className={`${theme.textTertiary}`}
                                />
                              )}
                            </button>
                          </div>
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : (
              course?.seasons.map((season) => (
                <div key={season.id}>
                  <h3
                    className={`text-sm font-semibold mb-3 flex items-center ${theme.textPrimary}`}
                  >
                    <div
                      className={`w-2 h-2 rounded-full mr-2 ${theme.accent}`}
                    ></div>
                    {season.title}
                  </h3>
                  <div className="space-y-1 pl-4">
                    {season.episodes.map((episode) => {
                      const episodePath = `/${course.id}/${season.id}/${episode.id}`;
                      const isActive = location.pathname === episodePath;
                      const isBookmarked = bookmarks.includes(episodePath);

                      return (
                        <div key={episode.id} className="group">
                          <Link
                            to={episodePath}
                            className={`flex items-center justify-between p-2 rounded-lg transition-all duration-200 ${
                              isActive
                                ? `${theme.accent} ${theme.accentForeground}`
                                : `${theme.textSecondary} ${theme.hover} hover:${theme.textPrimary}`
                            }`}
                          >
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium truncate">
                                {episode.title}
                              </p>
                              {episode.description && (
                                <p
                                  className={`text-xs mt-1 truncate ${theme.textTertiary}`}
                                >
                                  {episode.description}
                                </p>
                              )}
                            </div>
                            <button
                              onClick={(e) => {
                                e.preventDefault();
                                toggleBookmark(episodePath);
                              }}
                              className="ml-2 p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                              {isBookmarked ? (
                                <BsBookmarkFill
                                  size={12}
                                  className="text-yellow-500"
                                />
                              ) : (
                                <BsBookmark
                                  size={12}
                                  className={`${theme.textTertiary}`}
                                />
                              )}
                            </button>
                          </Link>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
