import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { utils, writeFile } from "xlsx";

export const exportToCSV = (data, filename = "export") => {
  const ws = utils.json_to_sheet(data);
  const wb = utils.book_new();
  utils.book_append_sheet(wb, ws, "Sheet1");
  writeFile(wb, `${filename}.csv`);
};

export const exportToPDF = (data, filename = "report") => {
  const doc = new jsPDF();
  const tableData = data.map((obj) => Object.values(obj));
  const headers = [Object.keys(data[0])];

  autoTable(doc, {
    head: headers,
    body: tableData,
  });

  doc.save(`${filename}.pdf`);
};
