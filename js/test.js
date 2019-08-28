table.on('tool(test)', function(obj) { 

    var data = obj.data; //获得当前行数据
    var layEvent = obj.event; //获得 lay-event 对应的值（也可以是表头的 event 参数对应的值）
    var tr = obj.tr; //获得当前行 tr 的DOM对象
    $ = layui.jquery;
if (layEvent === 'download') { //删除

        var fileName = data.fileName;
     window.location="layer/download?fileName="+fileName;

    }
});