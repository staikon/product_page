$(document).ready(function () {
	console.log('dom ready');

//fonction pour transformer les couleur "classique" en couleur "rgb"
	var color = ""
	function hexc(colorval) {
	    var parts = colorval.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
	    delete(parts[0]);
	    for (var i = 1; i <= 3; ++i) {
	        parts[i] = parseInt(parts[i]).toString(16);
	        if (parts[i].length == 1) parts[i] = '0' + parts[i];
	    }
	    color = '#' + parts.join('');
	}


	$("#coeur").click(function () {
		//if ($("#coeur").css('background-color')=="red")
		var x = $("#coeur").css('background-color');
		hexc(x);
		
		if (color=='#ffffff') {
			//console.log('1');
			$(this).css('background-color', "#ff0000");
		} else {
			//console.log('2');
			$(this).css('background-color', "#ffffff");
		}

	})
});