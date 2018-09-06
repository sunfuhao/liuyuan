express = require('express');
var app = express();

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'me',
  password : 'secret',
  database : 'my_db'
});

var pool = connection.connect();
app.get('//', function (req, res) {
	var data ={data:[{id:'1',nickname:'孙好',realname:'',sex:1,housearea:'河北',currentarea:'beijing',age:24,height:174,study:'本科',school:'>河北建工',iphone:'13124793355',wechat:'13124793355',isay:' 我是一个人真的是',icon:'http://t11.baidu.com/it/u=1934927245,1175704773&fm=173&s=BB9445805E1876C670815DC1030050B8&w=640&h=446&img.JPEG',imglist:[],power:0},{id:'2',nickname:'孙好',realname:'',sex:2,housearea:'河北',currentarea:'beijing',age:24,height:174,study:'本科',school:'河北建工',iphone:'13124793355',wechat:'13124793355',isay:'我是十>四是十四是啊大大那时的你大大地那份啊舒服撒风的北京市的吧就是大 我>是一个人真的是',icon:'http://www.zjkyinyuan.com/Public/Home/images/avatar-man.jpg',imglist:[],power:0},{id:'2',nickname:'孙好',realname:'',sex:2,housearea:'河北',currentarea:'beijing',age:24,height:174,study:'本科',school:'河北建工',iphone:'13124793355',wechat:'13124793355',isay:'我是十>四是十四是啊大大那时的你大大地那份啊舒服撒风的北京市的吧就是大 我>是一个人真的是',icon:'http://www.zjkyinyuan.com/Public/Home/images/avatar-man.jpg',imglist:[],power:0},{id:'2',nickname:'孙好',realname:'',sex:2,housearea:'河北',currentarea:'beijing',age:24,height:174,study:'本科',school:'河北建工',iphone:'13124793355',wechat:'13124793355',isay:'我是十>四是十四是啊大大那时的你大大地那份啊舒服撒风的北京市的吧就是大 我>是一个人真的是',icon:'http://www.zjkyinyuan.com/Public/Home/images/avatar-man.jpg',imglist:[],power:0},{id:'2',nickname:'孙好',realname:'',sex:2,housearea:'河北',currentarea:'beijing',age:24,height:174,study:'本科',school:'河北建工',iphone:'13124793355',wechat:'13124793355',isay:'我是十>四是十四是啊大大那时的你大大地那份啊舒服撒风的北京市的吧就是大 我>是一个人真的是',icon:'http://www.zjkyinyuan.com/Public/Home/images/avatar-man.jpg',imglist:[],power:0},{id:'2',nickname:'孙好',realname:'',sex:2,housearea:'河北',currentarea:'beijing',age:24,height:174,study:'本科',school:'河北建工',iphone:'13124793355',wechat:'13124793355',isay:'我是十>四是十四是啊大大那时的你大大地那份啊舒服撒风的北京市的吧就是大 我>是一个人真的是',icon:'http://www.zjkyinyuan.com/Public/Home/images/avatar-man.jpg',imglist:[],power:0},{id:'2',nickname:'孙好',realname:'',sex:2,housearea:'河北',currentarea:'beijing',age:24,height:174,study:'本科',school:'河北建工',iphone:'13124793355',wechat:'13124793355',isay:'我是十>四是十四是啊大大那时的你大大地那份啊舒服撒风的北京市的吧就是大 我>是一个人真的是',icon:'http://www.zjkyinyuan.com/Public/Home/images/avatar-man.jpg',imglist:[],power:0},{id:'2',nickname:'孙好',realname:'',sex:2,housearea:'河北',currentarea:'beijing',age:24,height:174,study:'本科',school:'河北建工',iphone:'13124793355',wechat:'13124793355',isay:'我是十>四是十四是啊大大那时的你大大地那份啊舒服撒风的北京市的吧就是大 我>是一个人真的是',icon:'http://www.zjkyinyuan.com/Public/Home/images/avatar-man.jpg',imglist:[],power:0},{id:'2',nickname:'孙好',realname:'',sex:2,housearea:'河北',currentarea:'beijing',age:24,height:174,study:'本科',school:'河北建工',iphone:'13124793355',wechat:'13124793355',isay:'我是十>四是十四是啊大大那时的你大大地那份啊舒服撒风的北京市的吧就是大 我>是一个人真的是',icon:'http://www.zjkyinyuan.com/Public/Home/images/avatar-man.jpg',imglist:[],power:0},{id:'2',nickname:'孙好',realname:'',sex:2,housearea:'河北',currentarea:'beijing',age:24,height:174,study:'本科',school:'河北建工',iphone:'13124793355',wechat:'13124793355',isay:'我是十>四是十四是啊大大那时的你大大地那份啊舒服撒风的北京市的吧就是大 我>是一个人真的是',icon:'http://www.zjkyinyuan.com/Public/Home/images/avatar-man.jpg',imglist:[],power:0},{id:'2',nickname:'孙好',realname:'',sex:2,housearea:'河北',currentarea:'beijing',age:24,height:174,study:'本科',school:'河北建工',iphone:'13124793355',wechat:'13124793355',isay:'我是十>四是十四是啊大大那时的你大大地那份啊舒服撒风的北京市的吧就是大 我>是一个人真的是',icon:'http://www.zjkyinyuan.com/Public/Home/images/avatar-man.jpg',imglist:[],power:0}]}
	res.send({data:data,msg:'ok'});
});
app.get('/detail', function (req, res) {

 userdetail = {id:'1',nickname:'孙好',realname:'',sex:1,housearea:'河北',currentarea:'beijing',age:24,height:174,study:'本科',school:'>河北建工',iphone:'13124793355',wechat:'13124793355',isay:' 我是一个人真的是',icon:'http://t11.baidu.com/it/u=1934927245,1175704773&fm=173&s=BB9445805E1876C670815DC1030050B8&w=640&h=446&img.JPEG',imglist:['http://t10.baidu.com/it/u=3994952046,3665680125&fm=173&s=51127591107D5B8E227865F30300D0B3&w=640&h=396&img.JPEG','http://t10.baidu.com/it/u=3231088869,2392068320&fm=173&s=A51216D18D034A4F5CBAEFD9030080BF&w=640&h=446&img.JPEG'],power:2,heart:112,work:''}
  res.send({data:userdetail,msg:'ok'})
});
var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
