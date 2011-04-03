/*
$(function (){


	// external links
	$("a[rel='external']").click(function () {
		$(this).attr({"target":"_blank"});
	});
			if ($(this).hasClass("opened")) {
				closeText($(this));
			}

	// text slider for articles
	$("#Page > article > h1").each(function(i) {
		var $this = $(this);
		var $textContainer = $this.next();
		var $link = $this.find("a.more");
		if (i > 0) {
			$textContainer.hide();
		}
		else {
			$link.hide();
			$textContainer.find('img').click(function() {
				$textContainer.hide('slow');
				$link.show();
			});
		}
		$this.find("a.more").click(function() {
			$this = $(this);
			$this.hide();
			$textContainer.show('slow');
			$textContainer.find('img').click(function() {
				$textContainer.hide('slow', function() {
					$(this).parent().find('div.ce_teaser').find('a.more').show();
				});
			});
		});
	});

});
*/