let chart, data, options;

google.charts.load('current', { 'packages': ['geochart'] });
google.charts.setOnLoadCallback(drawRegionsMap);

async function drawRegionsMap() {
  let countryData = await fetch('/countryTotal');
  countryData = await countryData.json();
  console.log(countryData);

  let countryChartData = [['Country', 'Number of Attacks']];

  for (let record of countryData){
    if (record.country == 'USA'){
      record.country = 'US';
    }
    let tempArray = [record.country, record.numAttacks];
    countryChartData.push(tempArray);
  }

  data = google.visualization.arrayToDataTable(countryChartData);
  options = {}; // if we want any options on the geochart, they go here
  chart = new google.visualization.GeoChart(document.getElementById('regions_div'));
  chart.draw(data, options);
}

function resize () {
  chart = new google.visualization.GeoChart(document.getElementById('regions_div'));
  chart.draw(data, options);
}

window.onresize = resize;