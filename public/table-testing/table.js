  google.charts.load('current', {'packages':['table']});
  google.charts.setOnLoadCallback(drawTable);

  // TODO: make this an async function
  function drawTable() {
    // TODO:  fetch the real data from the server and convert it into json,
    //        then create a new array of arrays using the real data, with just the
    //        columns you want in the table

    let data = new google.visualization.DataTable();
    // TODO: get correct data types. for now, you can just use strings
    data.addColumn('string', 'Species');
    data.addColumn('string', 'Year');
    data.addColumn('string', 'Country');
    data.addColumn('string', 'Area');
    data.addColumn('string', 'Provoked');
    data.addColumn('string', 'Injury');
    data.addColumn('string', 'Fatal');
    // TODO: replace this fake array of arrays with the real array of arrays
    data.addRows([
      ['Lemon Shark', {v: 2020, f: '2020'}, 'Australia', 'Queensland', false, 'Lacerations to leg', false],
      ['White Shark', {v: 2019, f: '2019'}, 'U.S.A', 'Rhode Island', false, 'FATAL', true],
      ['Reef Shark', {v: 2015, f: '2015'}, 'U.S.A', 'Gulf Coast, Florida', true, 'Loss of arm and lacerations to the abdomen', false],
      ['White Shark', {v: 2013, f: '2013'}, 'Portugal', 'Madeira', false, 'surfing accident, only board was bitten', false]
    ]);

    var table = new google.visualization.Table(document.getElementById('table_div'));

    table.draw(data, {showRowNumber: true, width: '100%', height: '50%'});
  }
