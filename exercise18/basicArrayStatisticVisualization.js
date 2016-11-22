var number = function(data){
	return data;
}

var quantile = function(data){
	return d3.quantile(data,0.6);
}

setOfText = [{title:'Numbers',method:number},{title:'Min Of Numbers',method:d3.min},
	{title:'Max of numbers',method:d3.max},{title:'Extent of numbers',method:d3.extent},
	{title:'Sum Of Numbers',method:d3.sum},{title:'Mean Of Numbers',method:d3.mean},
	{title:'Median of numbers',method:d3.median},{title:'Quantile of 6th number',method:quantile},
	{title:'Variance of numbers',method:d3.variance},{title:'Deviation of numbers',method:d3.deviation}
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



