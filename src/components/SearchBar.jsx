const SearchBar = ({ value, onChange }) => {
  return (
    <div className="w-full max-w-md mx-auto">
      <input
        type="text"
        placeholder="Search articles or blogs..."
        className="w-full p-2 border border-gray-300 rounded-md"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
