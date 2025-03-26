$(function() {

	// Pop up
	$("#wacpop a").on("click", function(e){

		e.preventDefault();
		$(this).toggleClass("hover");

	});



	// Modified giphy.js to choose random giphy image - https://gist.github.com/nealrs/28dbfe2c74dfdde26a30

	request = new XMLHttpRequest;
	request.open('GET', 'http://api.giphy.com/v1/gifs/trending?api_key=DW8ssTaVjWpcUbbdajF7Fv8yTpt4xjIT&limit=100', true);
	
	// Array to store the giphy images
	var giphy_images = [];

	// Generate random number between 0-49
	var random = Math.floor(Math.random()*(50));

	request.onload = function() {
		if (request.status >= 200 && request.status < 400){
			
			for (i = 0; i < 5; i++) {

				// Random url from 100 giphy trending results
				giphy_images[i] = JSON.parse(request.responseText).data[random + i].images.fixed_height_small.url;
				
				// Apply background to section elements
				$("main section:nth-of-type(" + (i + 2) + ")").css("background-image", "url(" + giphy_images[i] + ")");

				// Remove loader background
				$("body").removeClass("loader");

			}
				
		} else {
				console.log('reached giphy, but API returned an error');
		}
		
	};
	request.onerror = function() {
		console.log('connection error');
	};

	request.send();

	// Random background on the search container 

	$(".search.container").randomBackground(0.3);
	
});
