/* eslint-disable no-unused-vars */
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import { useTheme } from "../hook/useTheme";


const MarkdownRenderer = ({ content }) => {
  const { theme } = useTheme();

  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeSlug]}
      components={{
        h1: (content) => (
          <h1 className="text-2xl font-bold mt-6 mb-4" {...content} />
        ),
        h2: (content) => (
          <h2 className="text-xl font-bold mt-6 mb-2" {...content} />
        ),
        code: ({ inline, children, ...content }) => {
          return inline ? (
            <code
              className="bg-gray-200 dark:bg-gray-800 px-1 py-0.5 rounded text-[13px]"
              {...content}
            >
              {children}
            </code>
          ) : (
            <pre
              className="bg-gray-100 dark:bg-gray-800 p-4 rounded text-sm overflow-auto"
              {...content}
            >
              <code>{children}</code>
            </pre>
          );
        },
        table: (content) => (
          <table
            className={`table-auto w-full text-sm text-left border  my-4`}
            {...content}
          />
        ),
        th: (content) => (
          <th
            className={`px-4 py-2 border `}
            {...content}
          />
        ),
        td: (content) => (
          <td
            className={`px-4 py-2 border `}
            {...content}
          />
        ),
        a: (content) => (
          <a
            className="text-blue-600 dark:text-blue-400 underline"
            target="_blank"
            rel="noopener noreferrer"
            {...content}
          />
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
};


export default MarkdownRenderer