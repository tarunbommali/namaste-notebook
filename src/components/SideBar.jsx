import { RiMenuUnfold3Fill, RiMenuFold3Fill } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";

const SideBar = ({ isSidebarVisible, course, toggleSidebar }) => {
  const location = useLocation();

  return (
    <div>
      {/* Sidebar */}
      {isSidebarVisible && (
        <aside className="fixed w-80 p-4 pb-4  border-r border-gray-200 bg-base-100 h-screen overflow-y-scroll transition-all duration-300">
          {course ? (
            <div>
              <div className="flex justify-between items-center mb-4 ">
                <h2 className="text-lg font-thin">{course.courseTitle}</h2>
                <button
                  onClick={toggleSidebar}
                  className="p-2 rounded-md bg-base-200 shadow-md transition-all duration-300"
                >
                  <RiMenuFold3Fill size={18} />
                </button>
              </div>

              {course.seasons.map((season) => (
                <div key={season.id} className="mb-4">
                  <h3 className="text-lg font-semibold text-blue-700 mb-2">
                    {season.title}
                  </h3>
                  <ul className="space-y-1 pb-4 mb-20">
                    {season.episodes.map((episode) => {
                      const episodePath = `/${course.id}/${season.id}/${episode.id}`;
                      const isActive = location.pathname === episodePath;

                      return (
                        <li key={episode.id}>
                          <Link
                            to={episodePath}
                            className={`block px-3 py-2 rounded-md transition-all duration-200 text-sm font-medium ${
                              isActive
                                ? "bg-blue-100 text-blue-800 font-semibold"
                                : "text-base-content/80 hover:bg-gray-100 hover:text-blue-700"
                            }`}
                          >
                            {episode.title}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
              
            </div>
          ) : (
            <p className="text-red-500">Course not found!</p>
          )}
        </aside>
      )}

      {/* Toggle Button */}
      {!isSidebarVisible && (
        <button
          onClick={toggleSidebar}
          className="fixed top-20 left-4 z-50 p-2 rounded-md bg-base-100 shadow-md transition-all duration-300"
        >
          <RiMenuUnfold3Fill size={18} />
        </button>
      )}
    </div>
  );
};

export default SideBar;
