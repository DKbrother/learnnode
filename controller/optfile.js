var fs = require('fs');

module.exports = {
	readfile:function (path,callback) {
		console.log(path);
		fs.readFile(path,function (err,data) {
			if(err){
				console.log(err);
				callback(err);
			}else{
				callback(data);
			}
		});
		console.log('讀取文件成功!');
	}
}