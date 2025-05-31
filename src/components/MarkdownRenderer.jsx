import { useTheme } from "../hook/useTheme";

export const MarkdownRenderer = ({ content }) => {
  const { theme } = useTheme();

  const parsedContent = content
    // Headings
    .replace(/^###### (.*$)/gim, '<h6 class="text-xs font-semibold mt-4 mb-2">$1</h6>')
    .replace(/^##### (.*$)/gim, '<h5 class="text-sm font-semibold mt-4 mb-2">$1</h5>')
    .replace(/^#### (.*$)/gim, '<h4 class="text-base font-semibold mt-4 mb-2">$1</h4>')
    .replace(/^### (.*$)/gim, '<h3 class="text-lg font-semibold mt-4 mb-2">$1</h3>')
    .replace(/^## (.*$)/gim, '<h2 class="text-xl font-bold mt-6 mb-2">$1</h2>')
    .replace(/^# (.*$)/gim, '<h1 class="text-2xl font-bold mt-6 mb-4">$1</h1>')

    // Code blocks (```...```)
    .replace(/```([\s\S]*?)```/gim, '<pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded text-sm overflow-auto"><code>$1</code></pre>')

    // Inline code
    .replace(/`([^`]+)`/gim, '<code class="bg-gray-200 dark:bg-gray-800 px-1 py-0.5 rounded text-[13px]">$1</code>')

    // Bold and Italic
    .replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/gim, '<em>$1</em>')

    // Links
    .replace(/\[([^\]]+)\]\(([^)]+)\)/gim, '<a href="$2" class="text-blue-600 dark:text-blue-400 underline">$1</a>')

    // Ordered lists: 1. item
    .replace(/(^|\n)(\d+\..+(\n\d+\..+)*)/gim, (match) => {
      const items = match.trim().split("\n").map(line => {
        const text = line.replace(/^\d+\.\s*/, '');
        return `<li class="ml-4">${text}</li>`;
      }).join('');
      return `<ol class="list-decimal ml-6 my-2">${items}</ol>`;
    })

    // Unordered lists: - item
    .replace(/(^|\n)(-\s.+(\n-\s.+)*)/gim, (match) => {
      const items = match.trim().split("\n").map(line => {
        const text = line.replace(/^-+\s*/, '');
        return `<li class="ml-4">${text}</li>`;
      }).join('');
      return `<ul class="list-disc ml-6 my-2">${items}</ul>`;
    })

    // Tables
    .replace(/((?:^\|.+\|\s*\n?)+)/gm, (match) => {
      const rows = match.trim().split('\n').filter(Boolean);
      const isHeader = rows[1]?.includes("---");

      const tableRows = rows.map((row, i) => {
        if (i === 1 && isHeader) return ""; // skip separator
        const cells = row.trim().split("|").slice(1, -1);
        const Tag = i === 0 ? "th" : "td";
        return `<tr>${cells.map(cell =>
          `<${Tag} class="px-4 py-2 border ${theme.border.primary}">${cell.trim()}</${Tag}>`
        ).join('')}</tr>`;
      }).join('');

      return `<table class="table-auto w-full text-sm text-left ${theme.text.primary} ${theme.border.primary} border mt-6 mb-6"><tbody>${tableRows}</tbody></table>`;
    })

    // Paragraphs — this must be last!
    .replace(/(^|\n)(?!<h|<ul|<ol|<li|<pre|<table|<tr|<td|<th|<code|<p|<blockquote)([^<\n].+)/gim, (match, newline, text) => {
      return `${newline}<p class="my-2">${text.trim()}</p>`;
    });

  return (
    <div
      className="whitespace-pre-wrap"
      dangerouslySetInnerHTML={{ __html: parsedContent }}
    />
  );
};
