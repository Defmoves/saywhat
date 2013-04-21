var app = require("../lib/app.js"),
	exec = require('child_process').exec;

describe("get method",function(){
	it("Should send a query to bing and return a result",function(){
		var resp = {};
		runs(function(){
			app.getNews("london",function(err,result){
				resp = result;
			});
		});
		waits(1000);
		runs(function(){
			expect(resp.statusCode).toBe(200);
		});
	});
});

describe("cache methods",function(){
	it("should write and read a file to and from disk",function(){
		var test = {test:"test"};
			response = {};

		runs(function(){
			app.setCache("test",test);
		});
		waits(1000);
		runs(function(){
			app.getCache("test",function(err,result){
				if (err) throw err;
				response = JSON.parse(result);
			});
		});
		waits(200);
		runs(function(){
			expect(response.test).toBe(test.test);
			exec("rm test.json", function(err, stdout, stderr){
				if(err) throw err;
			});
		});
	});
});



