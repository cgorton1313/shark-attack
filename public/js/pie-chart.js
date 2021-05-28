let chart, data, options;
// Load the Visualization API and the corechart package.
google.charts.load('current', { 'packages': ['corechart'] });

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawChart);

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function drawChart() {

    // Create the data table.
    data = new google.visualization.DataTable();
    data.addColumn('string', 'Shark Type');
    data.addColumn('number', 'Attacks');
    // TODO:    change out this mock data with real data that you get by querying the database (manually)
    //          so, use phpmyadmin or run SQL right from VS Code to find out how many fatalites were 'Y' and
    //          how many were 'N'. disregard any other values. then use that data below, instead of the fake stuff
    //          you see here
    data.addRows([
        ['Fatal', 1401],
        ['Not Fatal', 4439],
        ['Unknown', 71],
    ]);

    // Set chart options
    options = {
        title: 'Fatalities of Shark Attacks',
    };

    // Instantiate and draw our chart, passing in some options.
    chart = new google.visualization.PieChart(document.getElementById('chart_div'));
    chart.draw(data, options);
}

function resize () {
    chart = new google.visualization.PieChart(document.getElementById('chart_div'));
    chart.draw(data, options);
  }
  
  window.onresize = resize;