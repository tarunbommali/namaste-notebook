import { courseList } from "../utils/constants";
import { Link } from "react-router-dom";

const Home = () => {
  return (

    <div className=" min-h-[100vh]">
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 ">
      {courseList.map((course) => {
        // Calculate total episodes from all seasons
        const totalEpisodes = course.seasons.reduce(
          (sum, season) => sum + season.episodes.length,
          0
        );

        return (
          <li key={course.id} className="h-full">
            <Link
              to={`/${course.id}`}
              className="flex flex-col p-6 rounded-2xl shadow-lg bg-base-100 h-full transition-transform hover:scale-105"
            >
              <h1 className="text-2xl font-bold mb-2">{course.courseTitle}</h1>

              {/* Push this to bottom with mt-auto */}
              <h2 className="text-lg text-base-content/70 mt-auto">
                Total EP: {totalEpisodes}
              </h2>
            </Link>
          </li>
        );
      })}
    </ul>
    </div>
  );
};

export default Home;
