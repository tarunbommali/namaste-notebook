import { useEffect, useState } from "react";

export const TableOfContents = ({ content }) => {
  const [toc, setToc] = useState([]);

  useEffect(() => {
    const headings = content.match(/^#{1,6}\s+.+$/gm) || [];
    const tocItems = headings.map((heading, index) => ({
      id: index,
      level: heading.match(/^#+/)[0].length,
      text: heading.replace(/^#+\s+/, ''),
      anchor: heading.replace(/^#+\s+/, '').toLowerCase().replace(/[^a-z0-9]+/g, '-')
    }));
    setToc(tocItems);
  }, [content]);

  if (toc.length === 0) return null;

  return (
    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 mb-6">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
        <RiBookOpenLine className="mr-2" />
        Table of Contents
      </h3>
      <nav className="space-y-1">
        {toc.map((item) => (
          <a
            key={item.id}
            href={`#${item.anchor}`}
            className={`block text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors ${
              item.level > 1 ? `ml-${(item.level - 1) * 4}` : ''
            }`}
            style={{ marginLeft: `${(item.level - 1) * 16}px` }}
          >
            {item.text}
          </a>
        ))}
      </nav>
    </div>
  );
};