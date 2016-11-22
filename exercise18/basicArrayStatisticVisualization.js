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

calculateValue =function(data){
	return setOfText.map(function(text){
		var elementDiv = d3.select('.container').append('div');
		elementDiv.append('span').attr('class','title').text(text.title);
		elementDiv.append('span').attr('class','value').text(text.method(data));
		return elementDiv;
	});
	
};

var showArrayStatistic = function(){
	var values = (document.getElementById('numberValue').value).split(' ');
	var set = values.map((value)=>+value);
	calculateValue(set);
};



