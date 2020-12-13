// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// Simple JavaScrpit console.log statement
function printHello() {
    console.log("Hello there!");
}

//Converted to an arrow function
addition = (a, b) => a + b;

// DoubleAddition arrow function
doubleAddition = (c, d) => addition(c, d)*2;

function buildTable(data) {
    // First, clear out any existing data
    tbody.html("");
  
    // Next, loop through each object in the data
    // and append a row and cells for each value in the row
    data.forEach((dataRow) => {
      // Append a row to the table body
      let row = tbody.append("tr");
  
      // Loop through each field in the dataRow and add
      // each value as a table cell (td)
      Object.values(dataRow).forEach((val) => {
        let cell = row.append("td");
        cell.text(val);
        }
      );
    });
}

function handleClick() {
    // Grab the datetime value from the filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;

    // if statment for if a date is present - only return data with date
    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    };

    // rebuild the table using the filtered data
    buildTable(filteredData);
}

// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build tbale when the page loads
buildTable(tableData);
