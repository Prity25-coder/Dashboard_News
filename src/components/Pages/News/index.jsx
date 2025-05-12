import { useEffect, useState } from "react";
import SearchBar from "../../SearchBar";
import Filters from "../../../components/Filters";
import { fetchTopHeadlines } from "../../../services/newsService";

const News = () => {
  const [data, setData] = useState([]);
  const [topic, setTopic] = useState("technology");
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState({
    author: "",
    type: "",
    startDate: "",
    endDate: "",
  });

  useEffect(() => {
    const getData = async () => {
      const articles = await fetchTopHeadlines(topic);
      setData(articles);
    };
    getData();
  }, [topic]); // re-fetch when topic changes

  const filtered = data.filter((item) => {
    const matchesAuthor = filters.author
      ? item.author.toLowerCase().includes(filters.author.toLowerCase())
      : true;
    const matchesType = filters.type ? item.type === filters.type : true;
    const matchesSearch = search
      ? item.title.toLowerCase().includes(search.toLowerCase())
      : true;

    const itemDate = new Date(item.publishedAt);
    const startDate = filters.startDate ? new Date(filters.startDate) : null;
    const endDate = filters.endDate ? new Date(filters.endDate) : null;

    const matchesStartDate = startDate ? itemDate >= startDate : true;
    const matchesEndDate = endDate ? itemDate <= endDate : true;

    return (
      matchesAuthor &&
      matchesType &&
      matchesSearch &&
      matchesStartDate &&
      matchesEndDate
    );
  });

  return (
    <div className="p-6 space-y-4">
      <h2 className="text-2xl font-bold">News & Blogs</h2>

      <div className="flex flex-wrap items-center gap-4">
        <SearchBar value={search} onChange={setSearch} />
        <select
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="technology">Technology</option>
          <option value="health">Health</option>
          <option value="finance">Finance</option>
          <option value="sports">Sports</option>
          <option value="business">Business</option>
          <option value="education">Education</option>
        </select>
      </div>

      <Filters filters={filters} setFilters={setFilters} />

      <table className="w-full mt-4 border border-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 border">Title</th>
            <th className="p-2 border">Author</th>
            <th className="p-2 border">Type</th>
            <th className="p-2 border">Published</th>
          </tr>
        </thead>
        <tbody>
          {filtered.length ? (
            filtered.map((item, index) => (
              <tr key={index} className="border-t">
                <td className="p-2 border">{item.title}</td>
                <td className="p-2 border">{item.author}</td>
                <td className="p-2 border capitalize">{item.type}</td>
                <td className="p-2 border">{item.publishedAt}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center p-4 text-gray-500">
                No results found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default News;
