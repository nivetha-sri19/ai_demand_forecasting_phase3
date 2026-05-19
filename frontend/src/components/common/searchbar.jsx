import { Search } from "lucide-react";

const SearchBar = ({
  value,
  onChange,
  placeholder = "Search...",
}) => {
  return (
    <div className="relative w-full">
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full border rounded-xl py-3 pl-10 pr-4 outline-none"
      />

      <Search
        size={18}
        className="absolute left-3 top-4 text-gray-400"
      />
    </div>
  );
};

export default SearchBar;