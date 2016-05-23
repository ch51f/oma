$(function() {
	var $nav = $("#nav");
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

	var arr = ['b', 'd', 'e'];
	var arrTop = [];

	for(var i = 0; i < arr.length; i++) {
		var temp = $("#panel-" + arr[i]);
		arrTop.push(temp.offset().top);
	}

	$(window).scroll(function() {
		var temp = $("body").scrollTop();
		if(temp < arrTop[0]) {
			navSelect(0);
		} else if (temp >= arrTop[0] && temp < arrTop[1]) {
			navSelect(1);
		} else if (temp >= arrTop[1] && temp < arrTop[2]) {
			navSelect(2);
		} else {
			navSelect(3);
		}
	})

	function navSelect(index) {
		$nav.find("a").each(function(i, e) {
			if(i == index) {
				$(e).addClass("active");
			} else {
				$(e).removeClass("active");
			}
		});
	}
});