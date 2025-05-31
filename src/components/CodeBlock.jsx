import { useState } from "react";

const CodeBlock = ({ children, className }) => {
  const [copied, setCopied] = useState(false);
  const language = className?.replace('language-', '') || '';

  const copyToClipboard = () => {
    navigator.clipboard.writeText(children);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group">
      <div className="flex items-center justify-between bg-gray-800 text-gray-200 px-4 py-2 text-sm rounded-t-lg">
        <span className="font-medium">{language || 'code'}</span>
        <button
          onClick={copyToClipboard}
          className="flex items-center space-x-1 text-gray-400 hover:text-white transition-colors"
        >
          {copied ? <FiCheck size={14} /> : <FiCopy size={14} />}
          <span>{copied ? 'Copied!' : 'Copy'}</span>
        </button>
      </div>
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-b-lg overflow-x-auto">
        <code>{children}</code>
      </pre>
    </div>
  );
};