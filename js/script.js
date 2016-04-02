$(function() {
	
	// Play audio before submitting form
	$("#submit-that-form").on("click", function(e){
		
		e.preventDefault();
		
		var audio =  document.getElementById("audio");
		
		audio.play();
		
		audio.onended = function() {
			$("#cse-search-box").submit();
		};
		
	});
	
	// Change audio source src attributes for mp3 and ogg formats
	function changeAudio(audioFilename){
		
		var audioSrcMp3 = "audio/" + audioFilename + ".mp3";
		var audioSrcOgg = "audio/" + audioFilename + ".ogg";
		$("#audio source.mp3-audio").attr("src", audioSrcMp3);
		$("#audio source.ogg-audio").attr("src", audioSrcOgg);
		
		document.getElementById("audio").load(); // Need to reload audio for the changes to be played by the browser
	};
	
	// Check for previously selected theme
	if(typeof(Storage) !== "undefined") {
		
		// Fade in footer
		$("footer").fadeIn("slow");

		// Background image		
		if( localStorage.getItem("search_theme") ) {

			var previously_chose_theme = localStorage.getItem("search_theme"); // Get previous theme name from localStorage		
			$("main").attr("id", previously_chose_theme); // This will change the background image
		
			// Audio
			changeAudio(previously_chose_theme);
		} else {
		
		// Default theme
		$("main").attr("id", "yoda");
		
	}
		
	} else {
		
		// Default theme
		$("main").attr("id", "yoda");
		
	}
	
	// Choose theme functionality
	$("footer a").on("click", function(e){
		
		e.preventDefault();
		
		$(this).attr("id", "faded");  // Visually represent chosen theme
		
		$(this).siblings().removeAttr("id");  // Removes any previously set 'faded' id on other buttons
		
		var mainID = $(this).attr("class");  // Get class to use for main id attribute and audio source src attribute
		$("main").attr("id", mainID);
		
		// Audio
		changeAudio(mainID);
		
		// Store theme in local storage
		
		if(typeof(Storage) !== "undefined") {
			localStorage.setItem("search_theme", mainID);
		}
	
	});
	
});