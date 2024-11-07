export default function json2html(data) {
    // Determine columns dynamically from the keys in the first object
    const columns = Array.from(new Set(data.flatMap(Object.keys)));
  
    // Start building the HTML table
    let html = <table data-user="saratreddy910@gmail.com">;
    html += <thead><tr>;
  
    // Add header row with column names
    columns.forEach((column) => {
      html += <th>${column}</th>;
    });
    html += </tr></thead><tbody>;
  
    // Add rows for each data item
    data.forEach((row) => {
      html += <tr>;
      columns.forEach((column) => {
        html += <td>${row[column] !== undefined ? row[column] : ""}</td>;
      });
      html += </tr>;
    });
  
    // Close the table
    html += </tbody></table>;
  
    return html;
  }