import { useState } from "react";


export const useBookmarks = () => {
  const [bookmarks, setBookmarks] = useState(() => {
    const saved = localStorage.getItem('namaste-bookmarks');
    return saved ? JSON.parse(saved) : [];
  });

  const toggleBookmark = (episodePath) => {
    setBookmarks(prev => {
      const updated = prev.includes(episodePath) 
        ? prev.filter(b => b !== episodePath)
        : [...prev, episodePath];
      localStorage.setItem('namaste-bookmarks', JSON.stringify(updated));
      return updated;
    });
  };

  return { bookmarks, toggleBookmark };
};