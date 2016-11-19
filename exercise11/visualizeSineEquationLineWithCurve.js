removeCircles();
removePaths();

var lineTension = [-2,-1.5,-1,0,1];

var changeLineTension = function(){
	var value = d3.select('#lineTension').property('value');
	drawLineWithSineEvaluateValues(d3['curveCardinal'].tension(+value),'#427FB2');
}

var drawDropDownLineTension = function(){
	d3.select('#lineTension')
	.on("change",changeLineTension)
	.selectAll('option')
	.data(lineTension)
	.enter().append('option')
	.attr("value",function(d){return d})
	.text(function(d){return d});
}

var drawLineWithSineEvaluateValues = function(curve, color){
	removePaths();
	drawLinePath(converter(sineValues,sineXValue),curve,color);
	drawCircles(converter(sineValues,sineXValue));
}

drawDropDownLineTension();
drawLineWithSineEvaluateValues(d3['curveCardinal'],'#427FB2')