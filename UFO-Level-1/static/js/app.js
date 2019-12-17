// from data.js
var tableData = data;

// YOUR CODE HERE!
// Select the button
var button = d3.select("#filter-btn");

button.on("click", function() {

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
  
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
  
    console.log(inputValue);
    console.log(tableData);
  
    // Filter the data to match input
    var filteredData = tableData.filter(date => date.datetime === inputValue);
  
    console.log(filteredData);

    // Get different data
    var date = filteredData.map(date => date.datetime);
    var city = filteredData.map(cities => cities.city);
    var state = filteredData.map(states => states.state);
    var country = filteredData.map(countries => countries.country);
    var shape = filteredData.map(shapes => shapes.shape);
    var duration = filteredData.map(duration => duration.durationMinutes);
    var comments = filteredData.map(comment => comment.comments);

    // Build table
    buildTable(date, city, state, country, shape, duration, comments);

    function buildTable(date, city, state, country, shape, duration, comments) {
        var table = d3.select("#ufo-table");
        var tbody = table.select("tbody");
        var trow;
        for (var i = 0; i < filteredData.length; i++) {
          trow = tbody.append("tr");
          trow.append("td").text(date[i]);
          trow.append("td").text(city[i]);
          trow.append("td").text(state[i]);
          trow.append("td").text(country[i]);
          trow.append("td").text(shape[i]);
          trow.append("td").text(duration[i]);
          trow.append("td").text(comments[i]); 
        }
      }

});


