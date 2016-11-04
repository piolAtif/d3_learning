var studentRecord = [
	{name:'ramesh',subject:'maths',score:87},
	{name:'suresh',subject:'maths',score:45},
	{name:'pokemon',subject:'english',score:65},
	{name:'mary',subject:'kannada',score:44},
	{name:'riya',subject:'science',score:72},
	{name:'katie',subject:'social studies',score:82},
	{name:'katie',subject:'maths',score:98},
	{name:'ramesh',subject:'bengali',score:25},
	{name:'suresh',subject:'science',score:55},
	{name:'riya',subject:'tamil',score:75},
	{name:'pokemon',subject:'sports',score:95},
	{name:'pokemon',subject:'social studies',score:32}
];


var selection= function(collection){ 
	return collection.filter(function(item, pos, self){return self.indexOf(item) == pos;})
}

var setOfSubjects = studentRecord.map(function(a){return a.subject});
setOfSubjects = selection(setOfSubjects);

var color = d3.scaleOrdinal()
	.domain(setOfSubjects)
	.range(["#1F77B4","#FF7F0E","#2CA02C","#D62728","#9467BD","#8C564B","#E377C2","#7F7F7F"]);

var initialChart = function(data){
d3.select(".container").selectAll("div")
	.data(data).enter().append("div")
	.style("width",function(d){return d.score*4+"px"})
	.text(function(d){return d.name+" "+d.score;})
	.style("background-color",function(d,i){return color(d.subject)});

d3.select(".subjectSection").text("Subjects:")
	.selectAll("div")
	.data(setOfSubjects).enter().append("div")
	.text(function(d){return d;})
	.style("background-color",function(d){return color(d)});
}


var sortAccordingToScore = function(){
	d3.select(".container").selectAll("div").sort(function(a,b){return a.score-b.score});
}

var sortAccordingToName =  function(){
	d3.select(".container").selectAll("div").sort(function(a,b){return d3.ascending(a.name, b.name)});
}

var sortAccordingToSubject = function(){
	d3.select(".container").selectAll("div").sort(function(a,b){return d3.ascending(a.subject, b.subject)});
}

window.onload = initialChart(studentRecord);






