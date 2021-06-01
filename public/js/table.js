  google.charts.load('current', {'packages':['table']});
  google.charts.setOnLoadCallback(drawTable);

  async function drawTable() {

    let attackData = await fetch('./attacks');
    attackData = await attackData.json();
    console.log(attackData);
    let tableArray= [];
  
  for (let attack of attackData){
    let tempAttack = [attack.species, attack.year, attack.country, attack.area, attack.provoked, attack.injury, attack.fatal];
    tableArray.push(tempAttack);
  }
    let data = new google.visualization.DataTable();
    // TODO: get correct data types. for now, you can just use strings
    data.addColumn('string', 'Species');
    data.addColumn('string', 'Year');
    data.addColumn('string', 'Country');
    data.addColumn('string', 'Area');
    data.addColumn('string', 'Provoked');
    data.addColumn('string', 'Injury');
    data.addColumn('string', 'Fatal');
    data.addRows(tableArray);

    var options
    var options = {
      showRowNumber: true,
      width: '100%',
      height: '50%',
      page: 'enable',
      pageSize: 100,
      pagingButtons: 'auto'
  };

    var table = new google.visualization.Table(document.getElementById('table_div'));
    table.draw(data, options);
  }
