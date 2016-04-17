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
		$("main footer").fadeIn("slow");

		// Background image		
		if( localStorage.getItem("search_theme") ) {

			var previously_chosen_theme = localStorage.getItem("search_theme"); // Get previous theme name from localStorage		
			$("main").attr("id", previously_chosen_theme); // This will change the background image
		
			// Audio
			changeAudio(previously_chosen_theme);
			
			// Hide giphy logo if not previously chosen theme
			if ( previously_chosen_theme != "giphy" ) {
				$("#giphy-logo").hide();
			}
			
			// Add faded id to this theme's button and remove from siblings
			var faded_button = "main footer a." + previously_chosen_theme;
			$(faded_button).attr("id", "faded");
			$(faded_button).siblings().removeAttr("id");
			
			
		} else {
		
		// Default theme
		$("main").attr("id", "giphy");
		
		}
		
	} else {
		
		// Default theme
		$("main").attr("id", "giphy");
		
	}
	
	// Choose theme functionality
	$("main footer a").on("click", function(e){
		
		e.preventDefault();
		
		$(this).attr("id", "faded");  // Visually represent chosen theme
		
		$(this).siblings().removeAttr("id");  // Removes any previously set 'faded' id on other buttons
		
		var mainID = $(this).attr("class");  // Get class to use for main id attribute and audio source src attribute, and show giphy logo
		$("main").attr("id", mainID);
		
		// Audio
		changeAudio(mainID);
		
		if ( mainID == "giphy" ) {
			$("#giphy-logo").show();
		} else { 
			$("#giphy-logo").hide();
		}
		
		// Store theme in local storage
		
		if(typeof(Storage) !== "undefined") {
			localStorage.setItem("search_theme", mainID);
		}
	
	});
	
});