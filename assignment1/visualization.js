var setOfNumbers = [1,2,3,4,25,15,6,7];

var color = d3.scaleOrdinal()
	.domain([0,8])
	.range(["#83A4E9", "#7491EE", "#6882F0","#4556F5","#87A8EC","#9CC2E9","#A4CDE7","#7997EE","#4556F5","#1116FA","#9CC2E9"]);

var update = function(data){
	var xScale = d3.scaleLinear()
		.domain([1,20])
		.range([1,100]);

	var old_div =  d3.select(".container").selectAll("div")
		.data(data, function(d,i){return i});

	old_div.enter()
		.append("div");

	old_div.style("width",function(d){return xScale(d)+"px";})
		.classed("new_div",true)
		.style("background-color",function(d){return color(d);})
		.text(function(d){return d});

	old_div.exit().transition().duration(500).remove();

}

var timer = function(){
	d3.select(".timer")
		.text((Math.round(d3.now()/1000)-1)+" sec");
}

update(setOfNumbers);
setInterval(function(){
	setOfNumbers.push(Math.floor(Math.random()*100));
	setOfNumbers.shift();
	update(setOfNumbers);
	timer();
},1000);
