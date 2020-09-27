// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select('tbody')

// // Simple JavaScript console.log statement
// function printHello() {
//     console.log("Hello there!");
// }

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

function handleClick() {
    // select = select the very first element that matches our selector string #datetime
    // selector string (datetime) is the item we're telling D3.js to look for
    // .property("value") telling to actually grab information instead of just looking for it
    // & hold it in the date variable
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;

    // Check to see if a date was entered and filter the data using that table
    if (date) {
        // this says "show only the rows where the date is equal to the date filter we created above"
        // === tests for equality, meaning that the date in the table has to match the filter exactly.
        filteredData = filteredData.filter(row => row.datetime === date);
    };

    // Rebuild the table using the filtered data
    // @NOTE: If no date was entered, then filteredData will just be
    //the original tableData.
    buildTable(filteredData);
};

// if-statement syntax
// if ( condition ) { code to execute }

// // pseudocode practice
// if (a date is entered) {
//     Filter the default data to show only the date entered
// };

// link our code directly to the filter button.
// execute handleClick function when the button with an id of filter-btn is clicked.
d3.selectAll("#filter-btn").on("click", handleClick);

// call the buildTable function using the original data
buildTable(tableData);