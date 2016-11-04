var stateWiseRecord = [{"state":"Bengal","names":["Brindavan Patra","Suman Maithy","Suman Das","Syan Bisui","Sanjit Das","Surjit Chondger","Jishnu Sanyal","Rahul Nandi","Prasun pchowdhary","Ranju karmakar"], "number":10},
	{"state":"Utter_Pradesh","names":["Vinay Shukla","Adarsh Tripati","Sagar Maurya","Sitaram Yadav","Simran Pal","Jitendra Sachdeva","Vikash Upadhay","Abhishek Gupta","Jai Om Pandey","Nabeel Ahmed"],"number":10},
	{"state":"Kerala","names":["Syanima KS","Bindu","Shibi Raghuravan","Anjali Joy","Anushree Prakash","Sooraj Prameshwaram","Ashwin KA","Sarth VS","Arun Sathian","Nimesh"],"number":10},
	{"state":"UtteraKhand","names":["Abhishek Thakur","Lalit Pandey","Dharmendra Singh"],"number":3},
	{"state":"Gurgaon","names":["Mitesh Jha","Akshay Kumar"],"number":2},
	{"state":"Andhra_Pradesh","names":["Durga Mansa","Navya Basava"],"number":2},
	{"state":"Karnataka","names":["Vatshala Malikarjun","Vijay"],"number":2},
	{"state":"TamilNadu","names":["Saran Raj"],"number":1},
	{"state":"Maharasthra","names":["Madhuri Patil","Supriya Gole","Gaurav Kuperkar","Ganesh Patil","Viraj Parab"],"number":5},
	{"state":"Rajasthan","names":["Preeti Sharma"],"number":1},
	{"state":"Sikkim","names":["Shruti Chakraboraty"],"number":1}];

var states = stateWiseRecord.map(function(s){return s.state});
console.log(stateWiseRecord);

var color = d3.scaleOrdinal()
	.domain(stateWiseRecord)
	.range(["#1F77B4","#FF7F0E","#2CA02C","#D62728","#9467BD","#8C564B","#E377C2","#7F7F7F","antiquewhite","aquamarine","aliceblue"]);

var xScale = d3.scaleLinear()
	.domain([1,11])
	.range([1,100]);

var default_chart = function(){
d3.select('.states').selectAll("div") 	
	.data(stateWiseRecord)
	.enter().append("div")
	.attr("width",function(d){return xScale(d.number)+5})
	.style("background-color",function(d){return color(d.state)})
	.text(function(d){return d.state});
}

var minority_chart = function(){
	d3.select(".states").selectAll("div").sort(function(a,b){return d3.descending(b.number, a.number)})
}

var majority_chart = function(){
	d3.select(".states").selectAll("div").sort(function(a,b){return d3.ascending(a.number, b.number)})
}


window.onload = default_chart();
