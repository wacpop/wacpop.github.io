(function( $ ) {

	$.fn.randomBackground = function (alpha) {
		
		// Set up array to hold values
		var rgb = [ ];
		
		// Generate random numbers between 0 + 255 (Use 256 as Math.floor rounds down)
		for( i=0; i < 3; i++ ) {
			rgb[i] = Math.floor( (Math.random() * 256) );
		};
		
		// Build rgba CSS style
		var rgba = "rgba(" + rgb[0] + "," + rgb[1] + "," + rgb[2] + "," + alpha + ")";
		
		// Apply style to element(s)
		$(this).css('background-color', rgba);
		
	};

}( jQuery ));