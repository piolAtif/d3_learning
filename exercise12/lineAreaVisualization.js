removePaths();
removeCircles();

var currentsineValue = [{"x":0},{"x":1},{"x":2},{"x":3},{"x":4},{"x":5},{"x":6},{"x":7},{"x":8},{"x":9},{"x":10}];

var sineValues = function(elements, newSetOfElements){
	newSetOfElements.x = elements.x/10;
	newSetOfElements.y = (3*(Math.sin(elements.x))+5)/10;
	return newSetOfElements;
}

var drawArea =function(curveShape){
	return d3.area()
	.x(function(d){return xScale(d.x)})
	.y0(HEIGHTESTPOINT-1)
	.y1(function(d){return yScale(d.y)})
	.curve(curveShape)
}

var drawAreaPath = function(curve){
svg.append("path")
	.datum(converter(sineValues,currentsineValue))
	.attr("class","area")
	.attr("d",drawArea(curve))
	.attr("transform",translate(31,11));
}

var removeAreaPath = function(){
	d3.selectAll('.area').remove();
	removePaths();
	removeCircles();
}

drawAreaPath(d3['curveLinear']);
drawPath(converter(sineValues,currentsineValue));
drawCircles(converter(sineValues,currentsineValue));
