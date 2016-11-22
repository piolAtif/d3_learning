var set = [];

var allDetails = d3.select('body').append('div');

var number = function(data){
	return allDetails.append('div').text('Number(x):').append('span').attr('class','value').text(data);
}

var min = function(data){
	return allDetails.append('div').text('MinOfNumber(min[x]):').append('span').attr('class','value').text(d3.min(data));
}

var max = function(data){
	return allDetails.append('div').text('MaxOfNumber(max[x]):').append('span').attr('class','value').text(d3.max(data));
}

var extent = function(data){
	return allDetails.append('div').text('Extent of number:').append('span').attr('class','value').text(d3.extent(data));
}

var sum = function(data){
	return allDetails.append('div').text('SumOfNumber(∑x):').append('span').attr('class','value').text(d3.sum(data));
}

var mean = function(data){
	return allDetails.append('div').text('MeanOfNumber(Ẍ):').append('span').attr('class','value').text(d3.mean(data));
}

var median = function(data){
	return allDetails.append('div').text('Median of number(m):').append('span').attr('class','value').text(d3.median(data));
}

var quantile = function(data){
	return allDetails.append('div').text('Quantile of 6th number(q6):').append('span').attr('class','value').text(d3.quantile(data,0.6));
}

var variance = function(data){
	return allDetails.append('div').text('Variance of number(s):').append('span').attr('class','value').text(d3.variance(data));
}

var deviation = function(data){
	return allDetails.append('div').text('Deviation of number(𝞂):').append('span').attr('class','value').text(d3.deviation(data));
}

var setOfOperation = [number,min,max,extent,sum,mean,median,quantile,variance,deviation];

drawValue =function(data){
	return setOfOperation.map((operation)=>operation(data));
}

var enterData = function(){
	var values = (document.getElementById('numberValue').value).split(' ');
	set = values.map((value)=>+value);
}

var showDetail = function(){
	drawValue(set);
}



