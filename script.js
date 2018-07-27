$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "../send.php", //Change
			data: th.serialize()
		}).done(function() {
			
			$("form > *").hide();
			$("form").append("<span class='animated zoomIn' style='animation-delay: .5s; animation-duration: 2s;'>Спасибо! Наш сотрудник свяжется с Вами в ближайшее время.</span>");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
				$("form span").remove();
				$("form > *").show();
			}, 3000);
		});
		return false;
	});