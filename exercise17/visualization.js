d3.selectAll('path').remove();

var newArc = d3.arc().innerRadius(75).outerRadius(150);
var newPie = d3.pie().value(function(d){return d}).sort(null).endAngle(function(){return Math.PI});
loadPieChart(newPie, newArc);