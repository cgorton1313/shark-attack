let chart;

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

  let data = google.visualization.arrayToDataTable(countryChartData);
  let options = {}; // if we want any options on the geochart, they go here
  chart = new google.visualization.GeoChart(document.getElementById('regions_div'));
  chart.draw(data, options);
}

//create trigger to resizeEnd event     
document.querySelector(window).resize(function() {
  if(this.resizeTO) clearTimeout(this.resizeTO);
  this.resizeTO = setTimeout(function() {
      document.querySelector(this).trigger('resizeEnd');
  }, 500);
});

//redraw graph when window resize is completed  
document.querySelector(window).addEventListener('resizeEnd', function() {
  chart.draw(data, options);
});