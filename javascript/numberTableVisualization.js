var headings = ["title", "1","2","3","4","5","6","7","8","9","10"];

var table = d3.select('body').append('table');
var thead = table.append('thead');
var tbody = table.append('tbody');

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var powScale = d3.scalePow()
    .exponent(2)
    .domain([1, 10])
    .range([1, 100]);

var floatingPrecise = d3.format(".4f");

var logScale = d3.scaleLog()
    .base(Math.E)
    .domain([Math.exp(0),Math.exp(9)])
    .range([0,9]);


var powNumber = d3.map(numbers, powScale).keys();
var logNumber = d3.map(numbers, logScale).keys();
var preciseLogNumber = logNumber.map(function(number){return floatingPrecise(number)});
var roundedNumber = logNumber.map(function(number){return Math.round(number)});

var tableOfNumbers = [{ title: "n", "values": numbers},
    { title: "n square", "values":powNumber},
    { title: "log(n)", "values": preciseLogNumber},
    { title: "log(n) rounded", "values": roundedNumber}
];

var mergingValues = function(number) {
    number.values.unshift(number.title);
    return number.values;
}

thead.append('tr').selectAll('th')
    .data(headings).enter().append('th')
    .text(function(d) {return d;});

var rows = tbody.selectAll('tr').data(tableOfNumbers).enter().append('tr');

var cells = rows.selectAll('td')
    .data(function(row) {return mergingValues(row);})
    .enter().append('td')
    .text(function(d) {return d;});
            