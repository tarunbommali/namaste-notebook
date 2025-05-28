import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import SideBar from "../components/SideBar";
import { courseList, REPO_URL } from "../utils/constants";
import { readmeMap } from "../utils/readmeMap";
import { useState } from "react";

const Markdown = () => {
  const { courseId, seasonId, episodeId } = useParams();
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const course = courseList.find((course) => course.id === courseId);

  const toggleSidebar = () => setIsSidebarVisible((prev) => !prev);

  // Normalize params (dashes to underscores, lowercase)
  const normalize = (val) => val?.toLowerCase().replace(/-/g, "_");

  const content =
    readmeMap?.[normalize(courseId)]?.[normalize(seasonId)]?.[
      normalize(episodeId)
    ];

  return (
    <div className="flex md:flex-row">
      <SideBar
        isSidebarVisible={isSidebarVisible}
        course={course}
        toggleSidebar={toggleSidebar}
      />

      <div
        className={`markdown-content p-6 max-w-4xl transition-all duration-300 ${
          isSidebarVisible ? "ml-80" : "ml-12"
        }`}
      >
        {content ? (
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeSlug]}
          >
            {content}
          </ReactMarkdown>
        ) : (
          <div className="text-red-500">
            <p className="text-xl font-semibold mb-2">🚧 Content Missing!</p>
            <p className="mb-2">
              This episode doesn't have content yet. Want to help the community?
            </p>
            <p>
              👉{" "}
              <a
                href={REPO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 mx-2 underline hover:text-blue-800"
              >
                Fork the repo on GitHub 
              </a>
                and contribute to the Namaste Dev Folks 🙌
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Markdown;
