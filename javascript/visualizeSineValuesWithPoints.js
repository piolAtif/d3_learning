var points = [{'x':0,'y':5},{'x':1,'y':9},{'x':2,'y':7},{'x':3,'y':5},{'x':4,'y':3},{'x':6,'y':4},{'x':7,'y':2},{'x':8,'y':3},{'x':9,'y':2}];
var sineXValue = [{"x":0},{"x":1},{"x":2},{"x":3},{"x":4},{"x":5},{"x":6},{"x":7},{"x":8},{"x":9}];

var setOfCurves = ['curveLinear','curveLinearClosed','curveStepAfter','curveBasis','curveBundle','curveCardinalClosed','curveCardinal','curveMonotoneX'];

var xScale = d3.scaleLinear()
	.domain([0,1.0])
	.range([0,410]);

var yScale = d3.scaleLinear()
	.domain([0,1.0])
	.range([410,0]);

var xAxis = d3.axisBottom(xScale);
var yAxis = d3.axisLeft(yScale);

var svg = d3.select('body').append('svg').attr("width",600).attr("height",500);
svg.append('g').call(xAxis).attr('transform','translate('+30+','+420+')');
svg.append('g').call(yAxis).attr('transform','translate('+30+','+10+')');
	

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

var change = function(){
	drawLinesWithCircles(d3.select('select').property('value'));
}

var drawDropDownList = d3.select('#interpolate')
	.on("change",change)
	.selectAll('option')
	.data(setOfCurves)
	.enter().append('option')
	.attr("value",function(d){return d})
	.text(function(d){return d});	

var drawPath = function(data, curveShape){
	svg.append('path')
	.datum(data)
	.attr("stroke-width","2")
	.attr("fill","none")
	.attr("d",d3.line()
		.curve(curveShape)
		.x(function(d){return xScale(d.x)})
		.y(function(d){return yScale(d.y)}))
	.attr('stroke','black')
	.attr('transform','translate('+31+','+11+')')
	.attr('class','lineContainer');
}

var drawCircles = function(data){
	var group = svg.append('g').attr('transform','translate('+31+','+11+')')
	group.selectAll('circle').data(data)
	.enter().append('circle')
	.attr("cx",function(d){return xScale(d.x)})
	.attr("cy",function(d){return yScale(d.y)})
	.attr("r",3);
};


var drawOnlyLines = function(curveShape){
	d3.selectAll('circle').remove();
	d3.selectAll('path.lineContainer').remove();
	drawPath(converter(valuesAfterDivideBy10,points),d3[curveShape]);
	drawPath(converter(modifiedSineValues,sineXValue),d3[curveShape]);
}

var drawLinesWithCircles = function(curve){
	drawOnlyLines(curve);
	drawCircles(converter(modifiedSineValues,sineXValue));
	drawCircles(converter(valuesAfterDivideBy10,points));
} 

window.onload = function(){
	drawDropDownList;
	drawOnlyLines('curveLinear');

}





