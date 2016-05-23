$(function() {
	$("#contact-form").Validform({
		ajaxPost: true,
		callback: function(res) {
			if(res.code == 200) {
				$("#contact-form")[0].reset();
				setTimeout(function() {
					$.Hidemsg();
					alert("谢谢您的宝贵留言，管理员将会尽快与您联系！");
				}, 2000);
			}
		}
	});
});