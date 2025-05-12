import { exportToCSV, exportToPDF } from "../services/exportService";

const ExportButtons = ({ data, filename }) => {
  return (
    <div className="flex gap-4 my-4">
      <button
        onClick={() => exportToCSV(data, filename)}
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        Export CSV
      </button>
      <button
        onClick={() => exportToPDF(data, filename)}
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
      >
        Export PDF
      </button>
      {/* Google Sheets could go here if needed */}
    </div>
  );
};

export default ExportButtons;
