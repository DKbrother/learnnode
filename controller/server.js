var http = require('http');
var router = require('./route');
var url = require('url');

http.createServer(function (req, res) {
	var pathname = url.parse(req.url).pathname;
	pathname = pathname.replace(/\//, '');
	if (pathname) {
		try {
			router[pathname](req, res, pathname);
		} catch (err) {
			console.log(`抛出异常:${err}`);
			res.writeHead(200, {
				'Content-Type': 'text/html;charset = utf-8'
			});
			res.write("抛出异常:" + err.toString().split(":")[1]);
		}
	} else {
		res.writeHead(200, {
			'Content-Type': 'text/html;charset = utf-8'
		});
		res.write('Welcome Node.js!');
	}
	res.end();
}).listen(8000);
console.log('Server running at 127.0.0.1:8000 ...');