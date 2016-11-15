var svg = d3.select('.container').append('svg').attr("width",600).attr("height",150);
const HEIGHT = 100;
const WIDTH = 100;
const INNERWIDTH = WIDTH/2;
const INNERHEIGHT = HEIGHT/2;
const INTIALIZER = 0;
var yCoordinate = 25;

var drawline = function(){
 return svg.append('line')
	.attr("x1",WIDTH)
	.attr("y1",0)
	.attr("x2",0)
	.attr("y2",HEIGHT)
	.attr('class','content');
}

var drawCircle = function(){
return svg.append('circle')
    .attr("cx", INNERWIDTH)
    .attr("cy", INNERHEIGHT)
    .attr("r", INNERWIDTH)
    .attr('class', 'content')
}

var drawRectangle = function(){
 return svg.append("rect")
 	.attr("width",WIDTH)
 	.attr("height",HEIGHT)
 	.attr("x",0)
 	.attr("y",0)
 	.attr("rx",10)
 	.attr("ry",10)
 	.attr('class','content');
}

var drawTriangle = function(){
 var points = [[INTIALIZER,HEIGHT], [INNERWIDTH,0], [WIDTH,HEIGHT]].join(" ");
 return svg.append('polygon')
 	.attr('points',points)
 	.attr('class','content')
 	.attr('transform','translate('+0+','+INTIALIZER+')');
}

var shapes = [drawline,drawCircle,drawRectangle,drawTriangle];


var transition = function(shape,index){
	return shape.attr('transform','translate('+index*(HEIGHT+INNERHEIGHT)+','+yCoordinate+")");
}

var drawShape = function(shapes){
	 shapes.forEach(function(shape,index){
			transition(shape(),index);
	}) 
};

drawShape(shapes);














