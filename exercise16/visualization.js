d3.selectAll('path').remove();

var newArc = d3.arc().innerRadius(75).outerRadius(150);

loadPieChart(pie, newArc);