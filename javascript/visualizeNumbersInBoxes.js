var numbers = [0,1,2,3,4,5,6,7,8,9,10];

var xScale = d3.scaleLinear()
	.domain([0,10])
	.range([12,120]);

var yScale = d3.scaleLinear()
	.domain([0,10])
	.range([30,180]);

var xAxis = d3.axisBottom()
	.scale(xScale);

var yAxis = d3.axisLeft()
	.scale(yScale);

d3.select('.container').selectAll('div').data(numbers)
	.enter().append('div')
	.text(function(d){return d})
	.style("height",function(d){return yScale(d)+"px"})
	.style("width", function(d){return xScale(d)+"px"})
	.style("font-size", function(d){return xScale(d)+"px"})
	.style("line-height", function(d){return yScale(d)+"px"})
	
