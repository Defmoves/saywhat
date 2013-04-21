#! /usr/bin/env node

var app = require("../lib/app.js"),
	program = require('commander'),
	query = process.argv.slice(2),
	choice = process.argv.slice(2)[1];

// command line options
program
  .version('0.0.4')
  .option('-r, --read', 'Read article')
  .parse(process.argv);


// read request
if(program.read){
	app.getCache("temp",function(err,result){
		if (err) throw err;
		app.viewAtricle(choice,result);
	});
// news search
} else {
	app.getNews(query,function(err,result){
		if (err) throw err;
		app.display(result);
	});
}