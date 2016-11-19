var setOfValues = [1, 1, 2, 2, 1, 2, 1];

var svg = d3.select('body').append('svg').attr("width",300).attr("height",500);
var circle = d3.select('svg').append('circle')
	.attr("cx",150)
	.attr("cy",150)
	.attr("r",150);