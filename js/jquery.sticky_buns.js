/*

Sticky Buns v0.001

Requires jquery.js

Toggles a specified class to make a DOM element "stick" to the top of the document window when it scrolls beyond the sticky elements offset position on page load. At a minimum, the sticky element requires a parent container with a CSS property of position:relative and a CSS sticky style with at miminum a declaration of postion:fixed to create the sticky effect.

I'm off to Cinnabon...Enjoy.

*/

// Sticky goodness
// Set our sticky DOM element
var sticky_elem = 'div#me_inner';
// Offset of sticky element to document window
var sticky_pos = $(sticky_elem).offset();
// Get the top coordinate
sticky_pos = sticky_pos.top;
// Bind the document window to the scroll event
// And call sticky_buns() passing in our vars
$(window).scroll(function(e,i){	
	sticky_buns(sticky_elem,sticky_pos);
});

// Sticky Buns
// Make a DOM element sticky
// after the window scrolls beyond that element
function sticky_buns(sticky_elem,sticky_pos) {
	// Set class name to make element sticky
	var sticky_class = 'sticky_buns';
	// Pass our vars to the make function
	make_sticky_buns(sticky_elem,sticky_pos,sticky_class);
	// Time to make the sticky buns
	function make_sticky_buns(sticky_elem,sticky_pos,sticky_class)
	{
		// Get the window position
		var window_pos = $(window).scrollTop();
		// Set any offset padding here
		// to prevent any jumpiness when we
		// add our sticky class
		window_pos = window_pos +20;
		// Check if window_pos has reached sticky_pos
		if(window_pos >= sticky_pos) {
			$(sticky_elem).addClass(sticky_class);
		}
		else if(window_pos <= sticky_pos) {
			$(sticky_elem).removeClass(sticky_class);
		}
	}
}