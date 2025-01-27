import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

export const exportToExcel = (data: TCandidate[], fileName: string) => {
   if (data.length === 0) {
      console.error('No data provided');
      return;
   }

   // Create a worksheet from the JSON data
   const worksheet = XLSX.utils.json_to_sheet(data);

   // Create a new workbook and append the worksheet
   const workbook = XLSX.utils.book_new();
   XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');

   // Write the workbook and convert it to a Blob
   const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
   const blob = new Blob([excelBuffer], { type: 'application/octet-stream' });

   // Save the file
   saveAs(blob, `${fileName}.xlsx`);
};
