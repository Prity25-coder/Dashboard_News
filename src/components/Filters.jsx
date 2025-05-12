const Filters = ({ filters, setFilters }) => {
  return (
    <div className="flex flex-wrap gap-4 my-4">
      <input
        type="text"
        placeholder="Filter by author"
        className="border p-2 rounded"
        value={filters.author}
        onChange={(e) => setFilters({ ...filters, author: e.target.value })}
      />

      <select
        className="border p-2 rounded"
        value={filters.type}
        onChange={(e) => setFilters({ ...filters, type: e.target.value })}
      >
        <option value="">All Types</option>
        <option value="news">News</option>
        <option value="blog">Blog</option>
      </select>

      <input
        type="date"
        className="border p-2 rounded"
        value={filters.startDate}
        onChange={(e) => setFilters({ ...filters, startDate: e.target.value })}
      />
      <input
        type="date"
        className="border p-2 rounded"
        value={filters.endDate}
        onChange={(e) => setFilters({ ...filters, endDate: e.target.value })}
      />
    </div>
  );
};

export default Filters;
