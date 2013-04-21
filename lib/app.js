// Dependicies
var fs = require("fs"),
	bing = require('binger'),
	clc = require('cli-color'),
	exec = require('child_process').exec,
// Command line colours
	red = clc.red.bold,
	yel = clc.yellow,
	blu = clc.blue,
	cya = clc.cyan,
// Other
	tempFolder = "/tmp/";

module.exports = {
	// Query bing for news
	getNews : function(query,callback) {
		var b = bing({appId:"49EB4B94127F7C7836C96DEB3F2CD8A6D12BDB71",sources:"News"});
		if(!query){
			throw "Error: No search query submitted";
		}
		b.search(query, function(error, response, body){
			if(!error && response.statusCode == 200){
				callback(null,response);
			}else{
				callback(error,null);
			}
		},{limit: 40});
	},
	// View selected article
	viewAtricle : function(choice,result){
		var articles = JSON.parse(result),
			chrome = "/usr/bin/open -a '/Applications/Google Chrome.app' ",
			readability = "http://www.readability.com/read?url=",
			url = articles[choice].Url;

		exec(chrome + readability + url, function(err, stdout, stderr){
			if(err) throw err;
		});
	},
	// Write json to file
	setCache : function(fileName,articles){
		fileName = tempFolder + fileName + ".json";
		fs.writeFile(fileName, JSON.stringify(articles,null,4), function(err) {
			if (err) throw err;
		});
	},
	// Read json from file
	getCache : function(fileName,callback){
		fileName = tempFolder + fileName + ".json";
		fs.readFile(fileName, function (err, data) {
			callback(err,data);
		});
	},
	// Display response
	display: function(result){
		var body = {},
			articles = {},
			lineCount = 0;

		body = JSON.parse(result.body);
		articles = body.SearchResponse.News.Results;
		this.setCache("temp",articles);

		console.log(yel("Your news feeds, "),yel(articles.length));
		function displaySingleline(article){
			console.log(red(lineCount),blu(article.Title),red("@"),blu(article.Source));
			lineCount++;
		}
		articles.map(displaySingleline);
	}
}