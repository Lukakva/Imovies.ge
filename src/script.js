jQuery(window).ready(function(){
	setTimeout(function(){
		var socialButtons = jQuery("#sociallinks").find("div")[0];
		var newButton = document.createElement("a");
		newButton.innerHTML = "გადმოწერა";
		var imoviesVideoPlayer = jQuery("video");
		// on some computers there are 3 video tags (and not 1 like on mine)
		imoviesVideoPlayer = imoviesVideoPlayer.length > 1 ? imoviesVideoPlayer[2] : imoviesVideoPlayer[0];
		imoviesVideoPlayer.addEventListener("durationchange",function(){
			if(imoviesVideoPlayer.duration > 20){
				jQuery(newButton).attr({
					"href": imoviesVideoPlayer.src,
					"style": "background-color:#299ecc;border-radius: 3px;padding-top:0px;margin-top:0px;margin-left:8px;height: 19px;color:white",
					"download": jQuery(".film_title.notbold.blue.film_title_eng").html(),
					"class": "button"
				});
				jQuery(socialButtons).append(newButton);
			}
		});
	},1000);
});