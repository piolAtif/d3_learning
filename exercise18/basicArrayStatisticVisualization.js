var array = [1,2,3,4,5,6,7];
var string = ["st","nd","rd","th","th","th","th"];
var set = [];




var body = d3.select('body');
drawValue =function(data){
	d3.select('#number').append('span').attr('class','value').text(data);
	d3.select('#min').append('span').attr('class','value').text(d3.min(data));
	d3.select('#max').append('span').attr('class','value').text(d3.max(data));
	d3.select('#extent').append('span').attr('class','value').text(d3.extent(data));
	d3.select('#sum').append('span').attr('class','value').text(d3.sum(data));
	d3.select('#mean').append('span').attr('class','value').text(d3.mean(data));
	d3.select('#median').append('span').attr('class','value').text(d3.median(data));
	d3.select('#quantile').append('span').attr('class','value').text(d3.quantile(data,0.6));
	d3.select('#variance').append('span').attr('class','value').text(d3.variance(data));
	d3.select('#deviation').append('span').attr('class','value').text(d3.deviation(data));
}

var enterData = function(){
	var values = (document.getElementById('numberValue').value).split(' ');
	set = values.map((value)=>+value);
}

var showDetail = function(){
	d3.select('.allDetails').style('visibility','visible');
	drawValue(set);
}



