import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
export const NavigationButtons = ({ course, currentEpisode }) => {
  const allEpisodes =
    course?.seasons.flatMap((season) =>
      season.episodes.map((episode) => ({
        ...episode,
        seasonId: season.id,
        path: `/${course.id}/${season.id}/${episode.id}`,
      }))
    ) || [];

  const currentIndex = allEpisodes.findIndex(
    (ep) =>
      ep.path ===
      `/${course.id}/${currentEpisode.seasonId}/${currentEpisode.episodeId}`
  );

  const prevEpisode = currentIndex > 0 ? allEpisodes[currentIndex - 1] : null;
  const nextEpisode =
    currentIndex < allEpisodes.length - 1
      ? allEpisodes[currentIndex + 1]
      : null;

  return (
    <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
      {prevEpisode ? (
        <Link
          to={prevEpisode.path}
          className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        >
          <BsArrowLeft size={16} />
          <div className="text-left">
            <p className="text-xs text-gray-500 dark:text-gray-400">Previous</p>
            <p className="text-sm font-medium truncate max-w-48">
              
              {prevEpisode.id.charAt(0).toUpperCase() + prevEpisode.id.slice(1)}

            </p>
          </div>
        </Link>
      ) : (
        <div></div>
      )}

      {nextEpisode ? (
        <Link
          to={nextEpisode.path}
          className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
        >
          <div className="text-right">
            <p className="text-xs text-blue-200">Next</p>
            <p className="text-sm font-medium truncate max-w-48">
              {nextEpisode.id.charAt(0).toUpperCase() + nextEpisode.id.slice(1)}

            </p>
          </div>
          <BsArrowRight size={16} />
        </Link>
      ) : (
        <div></div>
      )}
    </div>
  );
};
