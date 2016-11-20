d3.selectAll('path').remove();
var newPie = d3.pie().value(function(d){return d}).sort(null).endAngle(function(){return Math.PI});

loadPieChart(newPie, arc);