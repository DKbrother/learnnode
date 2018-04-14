var optfile = require('./optfile');
var url = require('url');
var querystring = require('querystring');		//post请求需导入

var getHtmlCallBack = function (req,res,post) {
	res.writeHead(200,{'Content-Type':'text/html;charset = utf-8'});

	var callback = function (data) {
		data = data.toString();
		//post对象是否为空
		if(JSON.stringify(post) != '{}'){
			data = data.replace(/{{email}}/,post["email"])
					.replace(/{{password}}/,post["password"]);
		}else{
			data = data.replace(/{{email}}/,"")
					.replace(/{{password}}/,"");
		}
		res.write(data);
		res.end();
	} 
	return callback;
}

module.exports = {
	login:function (req,res,pathname) {
		//get请求接受参数
		/*  var rest = url.parse(req.url,true).query;
		if(rest["email"] != undefined){
			console.log(`email:${rest["email"]}`);
			console.log(`password:${rest["password"]}`);
		} */

		var post = "";
		req.on('data',function (chunk) {
			post += chunk;
		});
		req.on('end',function () {
			post = querystring.parse(post);
			var callback = getHtmlCallBack(req,res,post);
			var path = `../view/${pathname}.html`;
			optfile.readfile(path,callback);
		});

		
	}
}