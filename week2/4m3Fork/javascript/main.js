/*
	$(function() {
		var $mycanvas = $("#canpus_photos_canvas");
		var mycanv = $mycanvas[0];
		var cxt = mycanv.getContext("2d");
		preImage("img/gallery1.png", function(){ cxt.drawImage(this, 0, 0, 484, 166); });
	});

	function preImage(url,callback){  
    	var img = new Image(); //创建一个Image对象，实现图片的预下载  
    	img.src = url;  
    	
    	if(img.complete) { // 如果图片已经存在于浏览器缓存，直接调用回调函数  
    		callback.call(img);  
    		return; // 直接返回，不用再处理onload事件  
    	}
  
    	img.onload = function () { //图片下载完毕时异步调用callback函数。  
    		callback.call(img);//将回调函数的this替换为Image对象  
    	};
	}
*/

$(document).ready(function() {
	
});