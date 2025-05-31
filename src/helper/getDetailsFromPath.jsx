import { courseList } from "../utils/constants";
// helper function 
export const getDetailsFromPath = (path) => {
    // path format: /courseId/seasonId/episodeId
    const parts = path.split('/').filter(Boolean); // remove empty strings

    if (parts.length !== 3) return null;

    const [courseId, seasonId, episodeId] = parts;

    const course = courseList.find(c => c.id === courseId);
    if (!course) return null;

    const season = course.seasons.find(s => s.id === seasonId);
    if (!season) return null;

    const episode = season.episodes.find(e => e.id === episodeId);
    if (!episode) return null;

    return {
      courseTitle: course.courseTitle,
      seasonTitle: season.title,
      episodeTitle: episode.title,
      path,
    };
  };

  

export const getFullDetailsFromPath = (path) => {
  const parts = path.split('/').filter(Boolean);
  if (parts.length !== 3) return null;

  const [courseId, seasonId, episodeId] = parts;

  const course = courseList.find(c => c.id === courseId);
  if (!course) return null;

  const season = course.seasons.find(s => s.id === seasonId);
  if (!season) return null;

  const episode = season.episodes.find(e => e.id === episodeId);
  if (!episode) return null;

  return {
    course,
    season,
    episode,
    path,
  };
};
