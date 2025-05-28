import { Navigate, useParams } from "react-router-dom";
import { courseList } from "../utils/constants";

const RedirectToFirstEpisode = () => {
  const { courseId } = useParams();
  const course = courseList.find((c) => c.id === courseId);

  if (!course) return <p className="p-4 text-red-500">Course not found!</p>;

  const firstSeason = course.seasons?.[0];
  const firstEpisode = firstSeason?.episodes?.[0];

  if (!firstSeason || !firstEpisode)
    return <p className="p-4 text-red-500">No content available.</p>;

  return (
    <Navigate to={`/${courseId}/${firstSeason.id}/${firstEpisode.id}`} replace />
  );
};

export default RedirectToFirstEpisode;
