var http = require('http')
var fs = require('fs')
var url = require('url')
var path = require('path')
http.createServer(function(req, res){
  var pathObj = url.parse(req.url, true)
  console.log(pathObj)
  switch (pathObj.pathname) {
    case '/loadmore':
      var data=[
      "后台设置头部信息Access-Control-Allow-Origin",
      "Access-Control-Allow-Origin",
      "Access-Control-Allow-Origin"
      ]      
      res.setHeader("Access-Control-Allow-Origin","*")
      //后台设置头部信息，*允许所有域请求到数据
      res.setHeader("Content-Type","text/json;charset=utf-8")
      //防止乱码设置
      res.end(JSON.stringify(data))
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


