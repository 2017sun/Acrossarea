var http = require('http')
var fs = require('fs')
var url = require('url')
var path = require('path')
http.createServer(function(req, res){
  var pathObj = url.parse(req.url, true)
  switch (pathObj.pathname){
    case '/loadmore':
      var data=[
      "提前在页面声明一个函数",
      "原始数据上包裹这个函数名",
      "原始数据上包裹这个函数名"
      ]
      res.setHeader("Content-Type","text/json;charset=utf-8")
      //设置头部信息，避免乱码，注意格式（'',';'）
      if(pathObj.query.callback){
        res.end(pathObj.query.callback+"("+JSON.stringify(data)+")")
        //原始数据上包裹这个函数名appendHtml*
        console.log(data)
      }      
      break;
    default:
     fs.readFile(path.join(__dirname , pathObj.pathname), function(err, data){
      if(err){
        res.statusCode = 404
        res.end('Not found')
      }else{
        res.end(data)
      }
     })      
  }
}).listen(9292)


