var array = [1,2,3,4,5,6,7];
var string = ["st","nd","rd","th","th","th","th"];

var extent = d3.extent(array, function(array){return array+string[array-1]});
var max = d3.max(array);
var min = d3.min(array);
var sum = d3.sum(array);

var body = d3.select('body');
d3.select('#number').append('span').attr('class','value').text(array);
d3.select('#min').append('span').attr('class','value').text(d3.min(array));
d3.select('#max').append('span').attr('class','value').text(d3.max(array));
d3.select('#extent').append('span').attr('class','value').text(extent);
d3.select('#sum').append('span').attr('class','value').text(d3.sum(array));
d3.select('#mean').append('span').attr('class','value').text(d3.mean(array));
d3.select('#median').append('span').attr('class','value').text(d3.median(array));
d3.select('#quantile').append('span').attr('class','value').text(d3.quantile(array,0.6));
d3.select('#variance').append('span').attr('class','value').text(d3.variance(array));
d3.select('#deviation').append('span').attr('class','value').text(d3.deviation(array));



