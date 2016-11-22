var set = [];

var allDetails = d3.select('body').append('div');
var number = function(data){
	return data;
}

var quantile = function(data){
	return d3.quantile(data,0.6);
}

setOfText = [{title:'Number',method:number},{title:'Min Of Number',method:d3.min},
	{title:'Max of number',method:d3.max},{title:'Extent of number',method:d3.extent},
	{title:'SumOfNumber',method:d3.sum},{title:'MeanOfNumber',method:d3.mean},
	{title:'Median of number',method:d3.median},{title:'Quantile of 6th number',method:quantile},
	{title:'Variance of number',method:d3.variance},{title:'Deviation of number',method:d3.deviation}
	];

drawValue =function(data){
	return setOfText.map(function(text){
		return allDetails.append('div')
		.append('span').attr('class','title').text(text.title)
		.append('span').attr('class','value').text(text.method(data));
	});
	
};

var showDetail = function(){
	var values = (document.getElementById('numberValue').value).split(' ');
	set = values.map((value)=>+value);
	drawValue(set);
};



