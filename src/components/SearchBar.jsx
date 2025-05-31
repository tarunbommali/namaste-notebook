import { BsSearch } from "react-icons/bs";

const SearchBar = ({ searchTerm, setSearchTerm, placeholder = "Search episodes..." }) => {
  return (
    <div className="relative mb-6">
      {/* Search Icon */}
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <BsSearch className="h-4 w-4 text-text-muted dark:text-gray-400" />
      </div>

      {/* Input Field */}
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder={placeholder}
        className="block w-full pl-10 pr-3 py-2 
          bg-background-light dark:bg-background-dark 
          text-text-light dark:text-text-dark 
          placeholder-text-muted dark:placeholder-gray-400 
          border border-border-light dark:border-border-dark 
          rounded-lg focus:outline-none focus:ring-2 
          focus:ring-primary focus:border-transparent"
      />
    </div>
  );
};

export default SearchBar;
