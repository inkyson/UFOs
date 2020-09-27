// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select('tbody')

// Simple JavaScript console.log statement
function printHello() {
    console.log("Hello there!");
}

function buildTable(data) {
    // First, clear out any existing data
    tbody.html("");

    // Next, loop through each object in the data
    // and append a row and cells for each value in the row
    // (dataRow represents each row of the data)
    data.forEach((dataRow) => {
        // Append a row ("tr" to the table body <tbody>
        let row = tbody.append("tr");

        // Loop through each field in the dataRow and add
        // each value as a table cell (td)
        // extract only text of the values (cell.text(val))
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
            }
        );
    });
}