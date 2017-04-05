(function($) {

$(window).ready(function(){
	setTimeout(function(){
		var socialButtons = $("#sociallinks").find("div")[0];

		var downloadButton = document.createElement("a");
		downloadButton.innerHTML = "გადმოწერა";

		var video = $("video");
		// on some computers there are 3 video tags (and not 1 like on mine)
		video = video.length > 1 ? video[2] : video[0];

		video.addEventListener("durationchange",function(){
			// if video is less than 20 seconds, it's an ad
			if (video.duration > 20) {
				$(downloadButton).attr({
					"href": video.src, // video source
					"download": $(".film_title.notbold.blue.film_title_eng").html(), // html5 download
					"class": "button" // imovies button class
				}).css({
					"background-color": "#299ecc",
					"border-radius"   : "3px",
					"padding-top"     : "0",
					"margin-left"     : "0",
					"margin-top"      : "0",
					"height"          : "19px",
					"color"           : "white",
				});
				$(socialButtons).append(downloadButton);
			}
		});
	}, 2000);
});

})(jQuery, window);