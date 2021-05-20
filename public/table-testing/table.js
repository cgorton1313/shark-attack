  google.charts.load('current', {'packages':['table']});
  google.charts.setOnLoadCallback(drawTable);

  function drawTable() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Species');
    data.addColumn('number', 'Year');
    data.addColumn('string', 'Country');
    data.addColumn('string', 'Area');
    data.addColumn('boolean', 'Provoked');
    data.addColumn('string', 'Injury');
    data.addColumn('boolean', 'Fatal');
    data.addRows([
      ['Lemon Shark', {v: 2020, f: '2020'}, 'Australia', 'Queensland', false, 'Lacerations to leg', false],
      ['White Shark', {v: 2019, f: '2019'}, 'U.S.A', 'Rhode Island', false, 'FATAL', true],
      ['Reef Shark', {v: 2015, f: '2015'}, 'U.S.A', 'Gulf Coast, Florida', true, 'Loss of arm and lacerations to the abdomen', false],
      ['White Shark', {v: 2013, f: '2013'}, 'Portugal', 'Madeira', false, 'surfing accident, only board was bitten', false]
    ]);

    var table = new google.visualization.Table(document.getElementById('table_div'));

    table.draw(data, {showRowNumber: true, width: '100%', height: '50%'});
  }
