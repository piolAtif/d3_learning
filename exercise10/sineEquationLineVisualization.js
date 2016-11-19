removePaths();
removeCircles();

var sineValues = function(elements, newSetOfElements){
	newSetOfElements.x = elements.x/10;
	newSetOfElements.y = (Math.sin(3*elements.x)+1)/2;
	return newSetOfElements;
}

drawPath(converter(sineValues,sineXValue));
drawCircles(converter(sineValues,sineXValue));
