let router = express.Router();
var pool = require("./sql") 
var url = require("url")
var name_biao = "userinfo";
var request = require("request")
var search_json = require("./search_json")
console.log(search_json)
var wxConfig = {
	AppID:"",
	Secret:""
}
router.get('/post_zeng', function (req, res) {   
    var param = req.query;
	keys = ''
	val = ''
	allkey = Object.keys(param)
	allkey.map(function(x,i,me){
		if(i<me.length-1){
			keys += x + ","
			val += "'"+param[x] +"'"+ ','
		}else{
			keys += x
			val += "'"+param[x]+"'"
		}
	})
	var  sql_zeng = "INSERT INTO  " + name_biao + "(" +keys + ")   " + "VALUES(" + val +")"
	console.log(sql_zeng,222)
	pool(sql_zeng, [1], function(err,results,fields){  
	    //do something  
	    if(err){
			errfn(err,'post_zeng')
	    }
	    console.log("charu ok")
	    res.send({data:userdetail,msg:'post_zeng',code:0})
	});	
});

router.get('/zeng', function (req, res) {   
    var param = req.query;
	keys = ''
	val = ''
	allkey = Object.keys(param)
	allkey.map(function(x,i,me){
		if(i<me.length-1){
			keys += x + ","
			val += "'"+param[x] +"'"+ ','
		}else{
			keys += x
			val += "'"+param[x]+"'"
		}
	})
	var  sql_zeng = "INSERT INTO  " + name_biao + "(" +keys + ")   " + "VALUES(" + val +")"
	pool(sql_zeng, [1], function(err,results,fields){  
	    //do something  
	    if(err){console.log(err)}
	    console.log("zeng ok")
	    res.send({data:param,msg:'ok'})
	});
});
router.get('/shan', function (req, res) {
	var param = req.query;
	keys = ''
	allkey = Object.keys(param)
	allkey.map(function(x,i,me){
		if(i<me.length-1){
			keys += x + "=" + param[x] +" and "
		}else{
			keys += x + "=" + param[x]
		}
	})
	var  sql_shan = "DELETE FROM " + name_biao + " WHERE "  +keys 
	pool(sql_shan, [1], function(err,results,fields){  
	    //do something  
	    if(err){console.log(err)}
	    console.log('shan ok')
	    res.send({data:param,msg:'shanchu',code:0})
	});

});
router.get('/gai', function (req, res) {
	var param = req.query;
	console.log(param)
	keys = ''
	allkey = Object.keys(param)
	allkey.map(function(x,i,me){
		if(i<me.length-1){
			keys += x + "='" + param[x] +"' , "
		}else{
			keys += x + "='" + param[x] +"'"
		}
	})
	var  sql_gai = " UPDATE " + name_biao + " SET "+ keys  + "    WHERE id = 6666" + ""
	pool(sql_gai , [1], function(err,results,fields){  
	    //do something  
	   	if(err){
	    	console.log(err)
	    }
	    console.log("gai ok")
	    res.send({data:results,msg:'gai',code:0})
	});
});
router.get('/gai_search', function (req, res) {
	var param = req.query;
	console.log(param)
	keys = ''
	allkey = Object.keys(param)
	var  sql_gai = " UPDATE " + name_biao + " SET yi_search =CONCAT(yi_search,'"+ param.yi_search +"')    WHERE id = "+ param.id
	pool(sql_gai , [1], function(err,results,fields){  
	    //do something  
	   	if(err){
	    	console.log(err)
	    }
	    console.log("gai ok")
	    res.send({data:results,msg:'gai',code:0})
	});
});
router.get('/cha', function (req, res) {
	var param = req.query;
	keys = ''
	allkey = Object.keys(param)

	console.log(param)
	let _id = "id="+param['id']
	let _sex = "sex="+param['sex']
	let _age = " age >= " + search_json['search_age'][param['age']][0] + " and  age <= " +  search_json['search_age'][param['age']][1]
	let _height = " height >= " + search_json['search_height'][param['height']][0] + " and  height <= " +  search_json['search_height'][param['height']][1]
	let housearea = " housearea  like'%" + param['old_area'] +"%'"
	let currentarea = " currentarea  like '%" + param['current_area'] +"%'"
	var  sql_cha = "select * from " + name_biao + " WHERE "  + _sex + ' and ' + _age + ' and ' + _height + ' and ' + housearea + ' and ' + currentarea
	//var  sql_cha = "select * from " + name_biao + " WHERE "  + _id +' and ' + _sex + ' and ' + _age + ' and ' + _height
	console.log(sql_cha)
	pool(sql_cha, [1], function(err,results,fields){  
		if(err){
	    	console.log(err)
	    }
	    console.log("cha ok")
	    res.send({data:results,msg:'cha',code:0})
	});
});
router.get('/cha_by_id', function (req, res) {
	var param = req.query;
	let _id = "id="+param['id']
	var  sql_cha = "select * from " + name_biao + " WHERE " + _id
	pool(sql_cha, [1], function(err,results,fields){  
	    //do something  
	    console.log(results)
	    res.send({data:results,msg:'cha_by_id',code:0})

	});
 userdetail = {id:'1',nickname:'孙好',realname:'',sex:1,housearea:'河北',currentarea:'beijing',age:24,height:174,study:'本科',school:'>河北建工',iphone:'13124793355',wechat:'13124793355',isay:' 我是一个人真的是',icon:'http://t11.baidu.com/it/u=1934927245,1175704773&fm=173&s=BB9445805E1876C670815DC1030050B8&w=640&h=446&img.JPEG',imglist:['http://t10.baidu.com/it/u=3994952046,3665680125&fm=173&s=51127591107D5B8E227865F30300D0B3&w=640&h=396&img.JPEG','http://t10.baidu.com/it/u=3231088869,2392068320&fm=173&s=A51216D18D034A4F5CBAEFD9030080BF&w=640&h=446&img.JPEG'],power:2,heart:112,work:''}
});
router.get('/', function (req, res) {
	var data ={data:[{id:'1',nickname:'孙好',realname:'',sex:1,housearea:'河北',currentarea:'beijing',age:24,height:174,study:'本科',school:'>河北建工',iphone:'13124793355',wechat:'13124793355',isay:' 我是一个人真的是',icon:'http://t11.baidu.com/it/u=1934927245,1175704773&fm=173&s=BB9445805E1876C670815DC1030050B8&w=640&h=446&img.JPEG',imglist:[],power:0},{id:'2',nickname:'孙好',realname:'',sex:2,housearea:'河北',currentarea:'beijing',age:24,height:174,study:'本科',school:'河北建工',iphone:'13124793355',wechat:'13124793355',isay:'我是十>四是十四是啊大大那时的你大大地那份啊舒服撒风的北京市的吧就是大 我>是一个人真的是',icon:'http://www.zjkyinyuan.com/Public/Home/images/avatar-man.jpg',imglist:[],power:0},{id:'2',nickname:'孙好',realname:'',sex:2,housearea:'河北',currentarea:'beijing',age:24,height:174,study:'本科',school:'河北建工',iphone:'13124793355',wechat:'13124793355',isay:'我是十>四是十四是啊大大那时的你大大地那份啊舒服撒风的北京市的吧就是大 我>是一个人真的是',icon:'http://www.zjkyinyuan.com/Public/Home/images/avatar-man.jpg',imglist:[],power:0},{id:'2',nickname:'孙好',realname:'',sex:2,housearea:'河北',currentarea:'beijing',age:24,height:174,study:'本科',school:'河北建工',iphone:'13124793355',wechat:'13124793355',isay:'我是十>四是十四是啊大大那时的你大大地那份啊舒服撒风的北京市的吧就是大 我>是一个人真的是',icon:'http://www.zjkyinyuan.com/Public/Home/images/avatar-man.jpg',imglist:[],power:0},{id:'2',nickname:'孙好',realname:'',sex:2,housearea:'河北',currentarea:'beijing',age:24,height:174,study:'本科',school:'河北建工',iphone:'13124793355',wechat:'13124793355',isay:'我是十>四是十四是啊大大那时的你大大地那份啊舒服撒风的北京市的吧就是大 我>是一个人真的是',icon:'http://www.zjkyinyuan.com/Public/Home/images/avatar-man.jpg',imglist:[],power:0},{id:'2',nickname:'孙好',realname:'',sex:2,housearea:'河北',currentarea:'beijing',age:24,height:174,study:'本科',school:'河北建工',iphone:'13124793355',wechat:'13124793355',isay:'我是十>四是十四是啊大大那时的你大大地那份啊舒服撒风的北京市的吧就是大 我>是一个人真的是',icon:'http://www.zjkyinyuan.com/Public/Home/images/avatar-man.jpg',imglist:[],power:0},{id:'2',nickname:'孙好',realname:'',sex:2,housearea:'河北',currentarea:'beijing',age:24,height:174,study:'本科',school:'河北建工',iphone:'13124793355',wechat:'13124793355',isay:'我是十>四是十四是啊大大那时的你大大地那份啊舒服撒风的北京市的吧就是大 我>是一个人真的是',icon:'http://www.zjkyinyuan.com/Public/Home/images/avatar-man.jpg',imglist:[],power:0},{id:'2',nickname:'孙好',realname:'',sex:2,housearea:'河北',currentarea:'beijing',age:24,height:174,study:'本科',school:'河北建工',iphone:'13124793355',wechat:'13124793355',isay:'我是十>四是十四是啊大大那时的你大大地那份啊舒服撒风的北京市的吧就是大 我>是一个人真的是',icon:'http://www.zjkyinyuan.com/Public/Home/images/avatar-man.jpg',imglist:[],power:0},{id:'2',nickname:'孙好',realname:'',sex:2,housearea:'河北',currentarea:'beijing',age:24,height:174,study:'本科',school:'河北建工',iphone:'13124793355',wechat:'13124793355',isay:'我是十>四是十四是啊大大那时的你大大地那份啊舒服撒风的北京市的吧就是大 我>是一个人真的是',icon:'http://www.zjkyinyuan.com/Public/Home/images/avatar-man.jpg',imglist:[],power:0},{id:'2',nickname:'孙好',realname:'',sex:2,housearea:'河北',currentarea:'beijing',age:24,height:174,study:'本科',school:'河北建工',iphone:'13124793355',wechat:'13124793355',isay:'我是十>四是十四是啊大大那时的你大大地那份啊舒服撒风的北京市的吧就是大 我>是一个人真的是',icon:'http://www.zjkyinyuan.com/Public/Home/images/avatar-man.jpg',imglist:[],power:0},{id:'2',nickname:'孙好',realname:'',sex:2,housearea:'河北',currentarea:'beijing',age:24,height:174,study:'本科',school:'河北建工',iphone:'13124793355',wechat:'13124793355',isay:'我是十>四是十四是啊大大那时的你大大地那份啊舒服撒风的北京市的吧就是大 我>是一个人真的是',icon:'http://www.zjkyinyuan.com/Public/Home/images/avatar-man.jpg',imglist:[],power:0}]}
	res.send({data:data,msg:'ok'});
});
router.get('/get_search_info', function (req, res) {

 userdetail = {id:'1',nickname:'孙好',realname:'',sex:1,housearea:'河北',currentarea:'beijing',age:24,height:174,study:'本科',school:'>河北建工',iphone:'13124793355',wechat:'13123333393355',isay:' 我是一个人真的是',icon:'http://t11.baidu.com/it/u=1934927245,1175704773&fm=173&s=BB9445805E1876C670815DC1030050B8&w=640&h=446&img.JPEG',imglist:['http://t10.baidu.com/it/u=3994952046,3665680125&fm=173&s=51127591107D5B8E227865F30300D0B3&w=640&h=396&img.JPEG','http://t10.baidu.com/it/u=3231088869,2392068320&fm=173&s=A51216D18D034A4F5CBAEFD9030080BF&w=640&h=446&img.JPEG'],power:2,heart:112,work:''}
  res.send({data:userdetail,msg:'ok'})
});

router.get('/wx/onlogin', function (req, res, next) {
  let code = req.query.code

  request.get({
    uri: 'https://api.weixin.qq.com/sns/jscode2session',
    json: true,
    qs: {
      grant_type: 'authorization_code',
      appid: '你小程序的APPID',
      secret: '你小程序的SECRET',
      js_code: code
    }
  }, (err, response, data) => {
    if (response.statusCode === 200) {
      console.log("[openid]", data.openid)
      console.log("[session_key]", data.session_key)

      //TODO: 生成一个唯一字符串sessionid作为键，将openid和session_key作为值，存入redis，超时时间设置为2小时
      //伪代码: redisStore.set(sessionid, openid + session_key, 7200)

      res.json({ sessionid: sessionid })
    } else {
      console.log("[error]", err)
      res.json(err)
    }
  })
})
router.get('/api/getWxCode', function(req, res, next) {
    var param = req.query || req.params; 
    var code = param.code;
    var urlStr = 'https://api.weixin.qq.com/sns/jscode2session?appid=' + wxConfig.AppID + '&secret=' + wxConfig.Secret + '&js_code=' + code + '&grant_type=authorization_code';
    request(urlStr, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var jsBody = JSON.parse(body); 
            jsBody.status = 100;
            jsBody.msg = '操作成功';
            console.log(jsBody)
            res.end(JSON.stringify(jsBody));

        }
    })
});
module.exports=router