$(function() {
	setInterval(function() {
		if($(".slide .show").next()[0]) {
			$(".slide .show").velocity({
				"opacity": 0
			}, {
				complete: function() {
					$(this).removeClass("show");
					$(this).next().addClass("show").velocity({
						"opacity": 1
					});
				}
			});
		} else {
			// 到尽头
			$(".slide .show").velocity({
				"opacity": 0
			}, {
				complete: function() {
					$(this).removeClass("show");
					$(".slide>ul>li:first-child").addClass("show").velocity({
						"opacity": 1
					});
				}
			});
		}
	}, 1000);
})