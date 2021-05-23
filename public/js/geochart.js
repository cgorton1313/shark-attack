google.charts.load('current', { 'packages': ['geochart'] });
google.charts.setOnLoadCallback(drawRegionsMap);

// TODO: make this an async function
function drawRegionsMap() {
  // TODO:  fetch the real data from the server and convert it into json,
  //        then create a new array of arrays using the real data, with just the
  //        columns you want in the table

  // TODO: replace mock data below with real array of arrays from above
  let data = google.visualization.arrayToDataTable([
    ['Country', 'Number of Attacks'],
    ['Germany', 200],
    ['United States', 300],
    ['Brazil', 400],
    ['Canada', 100],
    ['France', 600],
    ['RU', 450]
  ]);
  let options = {}; // if we want any options on the geochart, they go here
  let chart = new google.visualization.GeoChart(document.getElementById('regions_div'));
  chart.draw(data, options);
}