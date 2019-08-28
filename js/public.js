var host = "http://192.168.1.204:9090";
// http://139.196.75.14/hospital
function getHost() {
    return host;
}

function getToken() {
    var loc = location.href;//获取整个跳转地址内容，其实就是你传过来的整个地址字符串
    console.log("我的地址"+loc);
    var n1 = loc.length;//地址的总长
    var n2 = loc.indexOf("?");//取得=号的位置
    var parameter = decodeURI(loc.substr(n2+1, n1-n2));//截取从?号后面的内容,也就是参数列表，因为传过来的路径是加了码的，所以要解码
    var parameters  = parameter.split("&");//从&处拆分，返回字符串数组
    console.log("参数列表"+parameters);
    var paValue = new Array();//创建一个用于保存具体值得数组
    for (var i = 0; i < parameters.length; i++) {
        console.log("参数键值对值"+i+":"+parameters[i]);
        var m1 = parameters[i].length;//获得每个键值对的长度
        var m2 = parameters[i].indexOf("=");//获得每个键值对=号的位置
        var value = parameters[i].substr(m2+1, m1-m2);//获取每个键值对=号后面具体的值
        paValue[i] = value;
        console.log("参数值"+i+":"+value);
    }
    return value;
}

var token = getToken();
console.log(token);
/**市场人员部分 */
/**跳转到显示医生信息的页面，查询页面 */
s_doc = function(){
    window.location.href="s_doc.html?id="+token;
};

/**管理员部分 */
/**跳转到显示医院信息的页面，查询页面 */
s_hos = function(){
    window.location.href="s_hos.html?id="+token;
}
mana_s_doc = function(){
    window.location.href="s_doc.html?id="+token;
};


/**超级管理员部分 */
super_s_hos = function(){
    window.location.href="../manager/s_hos.html?id="+token;
}
super_s_doc = function(){
    window.location.href="../user/s_doc.html?id="+token;
};
s_mana = function(){
    window.location.href="s_mana.html?id="+token;
}
s_m_p = function(){
    window.location.href="s_m_p.html?id="+token;
}

