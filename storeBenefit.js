//Name: Isaac Moise
//Date: 10/29/2018
/*Purpose: To generate an HTML table filled with the amount earned by four different stores over the course of 4 weeks along with the week average.   The values will be retrieved from the database NodeTest except for the average which will be calculated before outputting the table. The modules used are 'mysql' and 'express'. Please Note: Express code will be outputted on local host 3000; 
*/
var express = require('express');
var app = express();
var mysql	= require('mysql');

var connection = mysql.createConnection({
	host	:	'localhost',
	user	:	'root',
	password	:	'XXX',
	database	:	'NodeTest'
});

app.get('/', function (req, res) {
	connection.query('select * from storebenefit', function (error, results, fields){
	if (error) throw error;
	
	var reply = "<body>";
	reply += "<table>";
	reply += "<tr>";
	reply += "<td class = 'headings'>No.</td>";
	reply += "<td class = 'headings headCenter'>Store Name</td>";
	reply += "<td class = 'headings headCenter'>Week 1 Benefit</td>";
	reply += "<td class = 'headings headCenter'>Week 2 Benefit</td>";
	reply += "<td class = 'headings headCenter'>Week 3 Benefit</td>";
	reply += "<td class = 'headings headCenter'>Week 4 Benefit</td>";
	reply += "<td class = 'headings headCenter'>Average</td>";
	reply += "</tr>";
	Object.keys(results).forEach(function(key) {
		var row = results[key];
		var average = ((row.Week_1 + row.Week_2 + row.Week_3 + row.Week_4)/4).toFixed(2)
		var averageString = average.toString();
		var averageComma = '';
		var counter = 3;

		for(var i = 0; i < averageString.length ; i++){
			
			if (averageString.indexOf(".") == 4){
				if(i == 1 ){
					averageComma += ",";
				}
			}
			
			
			else if (i < averageString.indexOf(".")){
				counter--;
				if(counter == 0 ){
					averageComma += ",";
				}
			}
			
			averageComma += averageString[i];
		}
		
		averageComma[averageString.indexOf(".") - 3]
		var week1 = (row.Week_1).toFixed(2);
		var week2 = (row.Week_2).toFixed(2);
		var week3 = (row.Week_3).toFixed(2);
		var week4 = (row.Week_4).toFixed(2);
		reply += "<tr>";
		reply += "<td>" + row.No + "</td>";
		reply += "<td>" + row.StoreName + "</td>";
		reply += "<td>" + "$"+ week1 + "</td>";
		reply += "<td>" + "$"+ week2 + "</td>";
		reply += "<td>" + "$"+ week3 + "</td>";
		reply += "<td>" + "$"+ week4 + "</td>";
		reply += "<td>" + "$"+ averageComma +"</td>";
		reply += "</tr>";
		//reply += "<h2>" + row.id + ": " + row.name + "</h2><br />";
	});
	reply += "</table>";
	reply += "<style>table, tr, td{ border: solid black 1px; background-color: lightblue;} .headCenter{text-align: center;} .headings{font-weight: bold; font-size: 18px;} </style>";
	reply += "</body>";
	
	
	res.send(reply);

	});
});

app.listen(3000, function () {
		console.log('Example app listening on port 3000!');
});

