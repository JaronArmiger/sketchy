$(document).ready(function() {
    //$('.container').append('<div class=\'box\'></div>');
//why is this being run twice?

    buildGridT(16);
   

    $('button').click(function() {
    	var size = prompt('Grid Size?');
    	$('table').remove();
    	buildGridT(size);

    	$('td').hover(function() {
    	$(this).css('background-color', getRandomColor);
    
    }); 
    	
    });
    var bw = 255;
     $('td').hover(function() {
    	$(this).css('background-color', 'rgb(' + [bw,bw,bw].join(',') + ')')
    }, function() {
        bw -= 5;
    }); 
});

//color generator
function getRandomColor() {
        var letters = '789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++ ) {
            color += letters[Math.floor(Math.random() * 9)];
        }
        return color;
    }


//build as inline-block
function buildGridI(x) {
    for (var i = 0; i < x; i++) {
    	$('.container').append("<div class='row'>")
    	for (var j=0; j < x; j++) {
    		var $myDiv = "<div class = 'box' id='";
    		$myDiv += j;
    		$myDiv += "'></div>"
    		$('.container').append($myDiv);
    	}
    	$('.container').append("</div>")
    }

}


//build as table
function buildGridT(x) {
	$('.container').append("<table><tbody></tbody></table>")
	for (var i = 0; i < x; i++) {
    	$('table').append("<tr class='" + (i+1) + "'></tr>")
    	for (var j=0; j < x; j++) {
    		$("." + (i+1)).append("<td></td>")
    	}
    }
}