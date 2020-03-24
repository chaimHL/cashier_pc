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
 
 
 
;(function(){
	//选中添加样式
	$('.row-pay').on('click', '.item', function() {
		$(this).addClass('active')
		$(this).parent().siblings().find('.item').removeClass("active")
		$(this).siblings().removeClass("active")
	})
	//点击支付宝
	$('.alipay').click(function(){
		$('#alipay-detail').slideDown() 
		$(this).parent().siblings().find('.item').click(function(){
			$('#alipay-detail').hide()
		})
		$(this).siblings().click(function(){
			$('#alipay-detail').hide()
		})
		$('#button_pay').hide()
	})
	//点击微信支付
	$('.wechatpay').click(function(){
		$('#button_pay').show()
	})
	//点击银联
	$('.unionpay').click(function(){
		$('#button_pay').show()
	})
	//点击转账
	$('.transferpay').click(function(){
		$('#transferpay-detail').slideDown() 
		$(this).parent().siblings().find('.item').click(function(){
			$('#transferpay-detail').hide()
		})
		$(this).siblings().click(function(){
			$('#transferpay-detail').hide()
		})
		$('#button_pay').hide()
	})
	
})()