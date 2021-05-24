  google.charts.load('current', {'packages':['table']});
  google.charts.setOnLoadCallback(drawTable);

  async function drawTable() {
    let response = await fetch('/attacks');
    let attackData = await response.json();
    console.log(attackData);

    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Species');
    data.addColumn('number', 'Year');
    data.addColumn('string', 'Country');
    data.addColumn('string', 'Area');
    data.addColumn('boolean', 'Provoked');
    data.addColumn('string', 'Injury');
    data.addColumn('boolean', 'Fatal');
    data.addRows(attackData);

    var table = new google.visualization.Table(document.getElementById('table_div'));

    table.draw(data, {showRowNumber: true, width: '100%', height: '50%'});
  }
