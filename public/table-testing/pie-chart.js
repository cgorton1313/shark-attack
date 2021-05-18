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
    data.addRows([
        ['Great White', 6],
        ['Hammerhead', 3],
        ['Whale Shark', 4],
        ['Basking', 2],
        ['Tiger Shark', 5]
    ]);

    // Set chart options
    var options = {
        'title': 'Attacks by Various Sharks',
        'width': 500,
        'height': 400
    };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
    console.log(chart);
    chart.draw(data, options);

    
}