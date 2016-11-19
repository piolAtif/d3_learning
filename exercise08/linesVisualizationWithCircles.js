removeWords();

var drawCircles = function(data){
	var group = svg.append('g').attr('transform','translate('+31+','+11+')')
	group.selectAll('circle').data(data)
	.enter().append('circle')
	.attr("cx",function(d){return xScale(d.x)})
	.attr("cy",function(d){return yScale(d.y)})
	.attr("r",3);
};

drawCircles(converter(valuesAfterDivideBy10,points));
drawCircles(converter(modifiedSineValues,sineXValue));






