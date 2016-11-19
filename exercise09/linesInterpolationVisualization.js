removePaths();
removeCircles();

var setOfCurves = ['curveLinear','curveLinearClosed','curveStepAfter','curveBasis','curveBundle','curveCardinalClosed','curveCardinal','curveMonotoneX'];

var change = function(){
	var value = d3.select('#interpolate').property('value');
	drawOnlyLine(d3[value],'#427FB2');
	drawLineWithSineValues(d3[value], '#921010');
}

var drawDropDownList = function(){
	d3.select('#interpolate')
	.on("change",change)
	.selectAll('option')
	.data(setOfCurves)
	.enter().append('option')
	.attr("value",function(d){return d})
	.text(function(d){return d});
}

var drawLinePath = function(data, curveShape,color){
	svg.append('path')
	.datum(data)
	.attr("stroke-width","2")
	.attr("fill","none")
	.attr("d",d3.line().curve(curveShape)
		.x(function(d){return xScale(d.x)})
		.y(function(d){return yScale(d.y)}))
	.attr('stroke',color)
	.attr('transform','translate('+31+','+11+')')
	.attr('class','lineContainer');
}

drawOnlyLine = function(curve, color){
	removePaths();
	drawLinePath(converter(valuesAfterDivideBy10,points),curve,color);
	drawCircles(converter(valuesAfterDivideBy10,points));
}

drawLineWithSineValues = function(curve, color){
	drawLinePath(converter(modifiedSineValues,sineXValue),curve, color)
	drawCircles(converter(modifiedSineValues,sineXValue));
}

drawDropDownList();
drawOnlyLine(d3['curveLinear'],'#427FB2');
drawLineWithSineValues(d3['curveLinear'],'#921010');
