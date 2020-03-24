//倒计时
;(function(){
	let maxtime = 3*60*60*1000 //3个小时的毫秒数 
	timer = setInterval(() => {
		if(maxtime>=0){
			let hours = Math.floor(maxtime / (3600 * 1000)) //获取小时数
			let leave2 = maxtime % (3600 * 1000);// 排除小时的毫秒数
			let minutes = Math.floor(leave2 / (60 * 1000)) //获取分钟
			let leave3 = leave2 % (60 * 1000); //排除分钟的毫秒数
			let seconds = Math.round(leave3 / 1000); //获取秒
			let msg = (hours > 9 ? hours : "0" + hours) + ":" + (minutes > 9 ? minutes : "0" + minutes) + ":" + (seconds > 9 ? seconds : "0" + seconds)
			$('#timer').html(msg)
			maxtime -= 1000 
		}  
		else{  
			clearInterval(timer);  
		}  
	},1000); 
})()
 
 
 