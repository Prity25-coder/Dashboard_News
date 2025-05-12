import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";
import PropTypes from "prop-types";

const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042", "#00C49F"];

const Analytics = ({ data }) => {
  // Robust data validation and fallbacks
  const safeData = React.useMemo(() => {
    if (!Array.isArray(data)) return [];
    return data.map((item) => ({
      name: item?.name || "Unknown Author",
      count: Number(item?.count) || 0,
      type: item?.type || "Uncategorized",
    }));
  }, [data]);

  // Memoized chart data calculations
  const authorsChart = React.useMemo(
    () =>
      safeData.map((item) => ({
        name: item.name,
        count: item.count,
      })),
    [safeData]
  );

  const typesChart = React.useMemo(() => {
    const types = safeData.reduce((acc, item) => {
      acc[item.type] = (acc[item.type] || 0) + 1;
      return acc;
    }, {});
    return Object.keys(types).map((key) => ({
      name: key,
      value: types[key],
    }));
  }, [safeData]);

  if (safeData.length === 0) {
    return (
      <div className="p-6 text-center text-gray-500">
        No analytics data available
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-bold">News Analytics</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <ChartContainer title="Articles by Author">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={authorsChart}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>

        <ChartContainer title="Articles by Type">
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={typesChart}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                label={({ name, percent }) =>
                  `${name}: ${(percent * 100).toFixed(0)}%`
                }
              >
                {typesChart.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip formatter={(value) => [`${value} articles`, "Count"]} />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </ChartContainer>
      </div>
    </div>
  );
};

// Reusable chart container component
const ChartContainer = ({ title, children }) => (
  <div className="bg-white p-4 shadow rounded">
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    {children}
  </div>
);

// Prop type validation
Analytics.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      count: PropTypes.number,
      type: PropTypes.string,
    })
  ),
};

// Default props
Analytics.defaultProps = {
  data: [],
};

export default Analytics;
