removeAreaPath();


var setOfAreaCurves = ['curveLinearClosed','curveStepAfter','curveBasisOpen','curveCatmullRomClosed','curveBasis'];

var change = function(){
	var value = d3.select('#curveAreaOptions').property('value');
	drawLineChart(d3[value], '#427FB2');
}

var drawDropDownList = function(){
	d3.select('#curveAreaOptions')
	.on("change",change)
	.selectAll('option')
	.data(setOfAreaCurves)
	.enter().append('option')
	.attr("value",function(d){return d})
	.attr("class","list")
	.text(function(d){return d});
}

drawAreaPath(d3['curveLinear']);

drawLineChart = function(curve, color){
	removeAreaPath();
	drawAreaPath(curve);
	drawLinePath(converter(sineValues,currentsineValue),curve, color);
	drawCircles(converter(sineValues,currentsineValue),curve, color);
}

drawDropDownList();
drawLineChart(d3['curveLinear'],'#427FB2');