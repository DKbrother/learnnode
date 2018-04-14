var optfile = require('./optfile');

var getHtmlCallBack = function (req,res) {
	res.writeHead(200,{'Content-Type':'text/html;charset = utf-8'});

	var callback = function (data) {
		res.write(data);
		res.end();
	} 
	return callback;
}

module.exports = {
	login:function (req,res,pathname) {
		var callback = getHtmlCallBack(req,res);
		var path = `../view/${pathname}.html`;
		optfile.readfile(path,callback);
	}
}