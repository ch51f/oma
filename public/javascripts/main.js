$(function() {
	$("#submit").click(function() {
		var data = $("#contact-form").serialize();
		$.ajax({
			url: '/addContact?' + data,
			type: 'get',
			success: function(res) {
				if(res.code == 200) {
					alert("谢谢您的宝贵留言，管理员将会尽快与您联系！");
					$("#contact-form")[0].reset();
				}
			}
		});
		return false;
	})
});