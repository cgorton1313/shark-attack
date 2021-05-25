// Load the Visualization API and the corechart package.
google.charts.load('current', { 'packages': ['corechart'] });

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawChart);

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function drawChart() {

    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Shark Type');
    data.addColumn('number', 'Attacks');
    // TODO:    change out this mock data with real data that you get by querying the database (manually)
    //          so, use phpmyadmin or run SQL right from VS Code to find out how many fatalites were 'Y' and
    //          how many were 'N'. disregard any other values. then use that data below, instead of the fake stuff
    //          you see here
    data.addRows([
            ['White Shark', 642],
            ['Tiger shark', 269],
            ['Bull Shark', 182],
            ['Nurse Shark', 103],
            ['Reef Shark', 72],
            ['Whaler Shark', 66],
            ['Other', 401],
    ]);

    // Set chart options
    var options = {
        title: '6 Most Dangerous Shark Species',
        width: 500,
        height: 400
    };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
    console.log(chart);
    chart.draw(data, options);
}