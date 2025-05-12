// eslint-disable-next-line react/prop-types
const Dashboard = ({ totalArticles, totalBlogs }) => {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Dashboard Overview</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white rounded-xl shadow p-4">
          <h2 className="text-lg font-semibold">Total Articles</h2>
          <p className="text-3xl">{totalArticles}</p>
        </div>
        <div className="bg-white rounded-xl shadow p-4">
          <h2 className="text-lg font-semibold">Total Blogs</h2>
          <p className="text-3xl">{totalBlogs}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
