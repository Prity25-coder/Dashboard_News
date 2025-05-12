import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const Payout = ({ data }) => {
  const [rate, setRate] = useState(() => {
    const stored = localStorage.getItem("rate");
    return stored ? parseFloat(stored) : 10;
  });

  useEffect(() => {
    localStorage.setItem("rate", rate);
  }, [rate]);

  const calculatePayout = (count) => count * rate;

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Payout Details</h2>
      <div className="mb-4">
        <label className="block mb-1">Set Rate per Article:</label>
        <input
          type="number"
          className="border p-2 rounded"
          value={rate}
          onChange={(e) => setRate(parseFloat(e.target.value))}
        />
      </div>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 border">Author</th>
            <th className="p-2 border">Articles</th>
            <th className="p-2 border">Payout</th>
          </tr>
        </thead>
        <tbody>
          {data.map((author) => (
            <tr key={author.name}>
              <td className="p-2 border">{author.name}</td>
              <td className="p-2 border">{author.count}</td>
              <td className="p-2 border">
                ${calculatePayout(author.count).toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Add prop type validation
Payout.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      count: PropTypes.number,
    })
  ),
};

// Add default props
Payout.defaultProps = {
  data: [],
};

export default Payout;
