// Modified giphy.js to choose random giphy image - https://gist.github.com/nealrs/28dbfe2c74dfdde26a30

document.addEventListener('DOMContentLoaded', function () {
	q = "silliness silly"; // search query
	
	request = new XMLHttpRequest;
	request.open('GET', '//api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag='+q, true);
	
	request.onload = function() {
		if (request.status >= 200 && request.status < 400){
			data = JSON.parse(request.responseText).data.image_url;
			console.log(data);
			document.getElementById("giphybg").innerHTML = '<style> #giphyme { background-image: url(" '+ data +' ") }';
		} else {
			console.log('reached giphy, but API returned an error');
		 }
	};

	request.onerror = function() {
		console.log('connection error');
	};

	request.send();
});
