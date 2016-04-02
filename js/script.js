$(function() {
	
	// Play audio before submitting form
	$(".psuedo-search").on("click", function(e){
		
		e.preventDefault();
		var audio =  document.getElementById("audio");
		
		audio.play();
		
		audio.onended = function() {
			$(".do-search").click();
		};
		
	});
	
	// Check for previously selected theme
	if(typeof(Storage) !== "undefined" && localStorage.getItem("search_theme") ) {
		
		var previously_chose_theme = localStorage.getItem("search_theme");
		var audioSrc = "audio/" + previously_chose_theme + ".mp3";
		
		$("main").attr("id", previously_chose_theme);
		
		$("#audio source").attr("src", audioSrc);
		
		document.getElementById("audio").load();
		
	} else {
	
		$("main").attr("id", "yoda");
		
	}
	
	// Choose theme functionality
	$("footer a").on("click", function(e){
		
		e.preventDefault();
		
		$(this).attr("id", "faded");
		
		$(this).siblings().removeAttr("id");
		
		var mainID = $(this).attr("class");
		var audioSrc = "audio/" + mainID + ".mp3";
		
		$("main").attr("id", mainID);
		
		$("#audio source").attr("src", audioSrc);
		
		document.getElementById("audio").load();
		
		// Store theme in local storage
		
		if(typeof(Storage) !== "undefined") {
			localStorage.setItem("search_theme", mainID);
		}
	
	});
	
});