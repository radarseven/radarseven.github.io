//jQuery is 'The Man'
$(document).ready(
	function() {
		
		// Sticky goodness
		var sticky_elem = 'div#me_inner';
		// Offsent of sticky element to document window
		var sticky_pos = $(sticky_elem).offset();
		sticky_pos = sticky_pos.top;
		$(window).scroll(function(e,i){	
			sticky_buns(sticky_elem,sticky_pos);
		});
		
		// qTip for image thumbs
		$('a.tip-img').each(function() 
		{
		
			//Get image thumb locations
			var content = '<img src="';
			content += $(this).attr('href');
			content += '" alt="" />';
			
			// Setup qTip to display thumbs
			$(this).qtip(
			{
				content: content,
				position: {
					corner: {
						tooltip: 'bottomMiddle',
						target: 'topMiddle'
					},
					adjust: {
						screen: true,
						scroll: true
					}
				},
				style: {
					tip: true,
					name: 'red',
					padding: 0
				},
				api: {
					onShow: function() 
					{
						var imgHeight = this.elements.content.find('img').height();
						//alert(imgHeight);
						this.elements.contentWrapper.height(imgHeight);
					}
				}
			});
			
		});
		
		// Notice the use of the each method to gain access to each element individually
		   $('a.tip-url').each(function()
		   {
		      // Create image content using websnapr thumbnail service
		      var content = '<img src="http://images.websnapr.com/?url=';
		      content += $(this).attr('href');
		      content += '" alt="Loading thumbnail..." height="152" width="202" />';

		      // Setup the tooltip with the content
		      $(this).qtip(
		      {
		         content: content,
		         position: {
		            corner: {
		               tooltip: 'bottomMiddle',
		               target: 'topMiddle'
		            },
					adjust: {
						screen: true,
						scroll: true
					}
		         },
		         style: {
		            tip: true, // Give it a speech bubble tip with automatic corner detection
		            name: 'red',
					padding: 0
		         },
				api: {
					onShow: function() 
					{
						var imgHeight = this.elements.content.find('img').height();
						//alert(imgHeight);
						this.elements.contentWrapper.height(imgHeight);
					}
				}
		      });
		   });
		
		// External links
		// $('a').filter(function() {
		// 			return this.hostname && this.hostname !== location.hostname;
		// 		  }).after(' <img src="/i/icons/external-link.gif" alt="external link">');
		// $('a[rel="ext"]').each(function() 
		// 			{
		// 				if(this.href.indexOf(location.hostname) == -1) {
		// 					$(this).click(function(){window.open(this.href);return false;
		// 				}); 
		// 			}
		// 		});
		$('a[rel="ext"]').each(function() 
		{
			$(this).click(function()
			{
				window.open(this.href);
				return false;
			});
		});
		
		// Fancybox image gallery
		$('a[rel="fb"]').fancybox(
		{
			padding: 0,
			overlayOpacity: 0.75,
			zoomSpeedIn: 500,
			zoomSpeedOut: 200,
			overlayShow: true,
			overlayColor: '#fff',
			centerOnScroll: true
		});
		// $('a[rel="fb"]').each(function()
		// 		{
		// 				// Get thumb filename
		// 				var thumb = $(this).next('img').attr('src');
		// 				var image = 
		// 		});
		
		// Scrollto #me
		// $('#me').scrollFollow({
		// 	speed: 300,
		// 	offset: 40
		// });
		
		// Scroll to top
		$('a.top').click(function() {
			$.scrollTo('#hi', 1200, {easing:'easeInCirc'});
			return false;
		});
		
		// IE pngFix
		$(document).pngFix();

		// Sticky Buns
		// Make a DOM element sticky
		// after the window scrolls beyond that element
		function sticky_buns(sticky_elem,sticky_pos) {
			// Class name to make element sticky
			var sticky_class = 'sticky_buns';
			// Pass these to the make function
			make_sticky_buns(sticky_elem,sticky_pos,sticky_class);
			// Time to make the sticky buns
			function make_sticky_buns(target,sticky_pos,sticky_class)
			{
				// Get the window position
				var window_pos = $(window).scrollTop();
				window_pos = window_pos +20;
				//alert(window_pos + ' :: ' + sticky_pos);
				// Check if window_pos has reached sticky_pos
				if(window_pos >= sticky_pos) {
					$(target).addClass(sticky_class);
				}
				else if(window_pos <= sticky_pos) {
					$(target).removeClass(sticky_class);
				}
			}
		}
				
	}
);