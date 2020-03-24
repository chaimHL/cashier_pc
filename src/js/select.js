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