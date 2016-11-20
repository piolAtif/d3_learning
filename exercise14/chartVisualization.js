const WIDTH = 500;
const HEIGHT = 500;
var setOfValues = [10, 10, 20, 20, 10, 20, 10];
var color = ['#1F77B4','#AEC7E8','#FF7F0E','#FFBB78','#2CA02C','#9BDF8A','#D62728'];

var svg = d3.select('body').append('svg').attr("width",WIDTH).attr("height",HEIGHT);

var arc = d3.arc().innerRadius(0).outerRadius(150);
var pie = d3.pie().value(function(d){return d}).sort(null);

var path = svg.selectAll('path')
	.data(pie(setOfValues)).enter()
	.append('path')
	.attr('d',arc)
	.attr('transform',`translate(${200},${200})`)
	.attr('fill',function(d, index){return color[index]});


