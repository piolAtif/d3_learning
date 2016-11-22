var points = [{x:0,y:5},{x:1,y:9},{x:2,y:7},{x:3,y:5},{x:4,y:3},{x:6,y:4},{x:7,y:2},{x:8,y:3},{x:9,y:2}];
var sineXValue = [{x:0},{x:1},{x:2},{x:3},{x:4},{x:5},{x:6},{x:7},{x:8},{x:9}];
const HEIGHTESTPOINT = 410;

var xScale = d3.scaleLinear()
	.domain([0,1.0])
	.range([0,HEIGHTESTPOINT]);

var yScale = d3.scaleLinear()
	.domain([0,1.0])
	.range([HEIGHTESTPOINT,0]);

var xAxis = d3.axisBottom(xScale);
var yAxis = d3.axisLeft(yScale);

var translate = function(x,y){
	return `translate(${x},${y})`;
};

var svg = d3.select('body').append('svg').attr("width",600).attr("height",500);
svg.append('g').call(xAxis).attr('transform',translate(30,420));
svg.append('g').call(yAxis).attr('transform',translate(30,10));

var valuesAfterDivideBy10 = function(entrySet, newEntrySet){
	newEntrySet.x = entrySet.x/10;
	newEntrySet.y = entrySet.y/10;
	return newEntrySet;
}

var modifiedSineValues = function(elements, newSetOfElements){
	newSetOfElements.x = elements.x/10;
	newSetOfElements.y = Math.abs((Math.sin(elements.x)/10)+0.5);
	return newSetOfElements;
}

var converter = function(operation,setOfElements){
	return setOfElements.map(function(element){
		var newElementSet = {};
		return operation(element, newElementSet);
	});
}

var generateLine = d3.line()
		.x(function(d){return xScale(d.x)})
		.y(function(d){return yScale(d.y)})

var drawPath = function(data){
	return svg.append('path')
	.attr("d",generateLine(data))
	.attr("stroke-width","2")
	.attr("fill","none")
	.attr('transform',translate(31,11))
	.attr('class','lineContainer')
}

var writeText = function(word,[x,y]){
	svg.append('text')
		.text(word)
		.attr('class','word')
		.attr('transform',translate(x+30,y))
};

var getHighestValue = function(values){
	return values.reduce(function(result,d){
		return result.y > d.y ? result : d;
	});
};

var removeWords = function(){
	d3.selectAll('.word').remove();
}

var removePaths = function(){
	d3.selectAll('.lineContainer').remove();
}

var addText = function(value,word){
	var highestPoints = getHighestValue(value)
	var xValue = xScale(highestPoints.x);
	var yValue = yScale(highestPoints.y);
	writeText(word,[xValue,yValue]);
};

var textForLine = "line of points (0,5),(1,9),(2,7),(3,5),(4,3),(6,4),(7,2),(8,3),(9,2)";
var textForSineValuesLine = "sin(x) shifted up by 0.5";

var values = converter(valuesAfterDivideBy10,points);
drawPath(values);
addText(values,textForLine);
var sineValues = converter(modifiedSineValues,sineXValue);
var path = drawPath(sineValues);
addText(sineValues,textForSineValuesLine);