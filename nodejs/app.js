express = require('express');
var app = express();
var router =  require('./server/router');


//路由控制
app.use(router)


//登陆代码

//方法函数


//增删改差

// pool.getConnection(function(err, connection){
//   connection.query( “select * from table1”,  function(err, rows){
//     if(err) {
//       throw err;
//     }else{
//       console.log( rows );
//     }
//   });
//   connection.release();
// });
var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
