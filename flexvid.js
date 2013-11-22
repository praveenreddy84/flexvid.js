/*!
 *  FluidVids.js v1.0.0
 *  Making embeded videos Responsive and fluid.
 *  Tutorial: 
 *  by Praveen Reddy: http://t4s.me
 *
 *  Copyright 2013 T4S.me. MIT licensed.
 */

$(document).ready(function(){
	
	/*
    *get all videos on the document which need to be responsive
	*/
	$('.flexvid').each(function(index){
		
		var iframe=$(this).find('iframe');
		
		/*
        * RegExp, extend this if you need more players
        */
        players = /www.youtube.com|player.vimeo.com/;
		
		if ( iframe.attr('src').search( players ) > 0 ) {
		
			/*
            * Calculate the video ratio based on the iframe's w/h dimensions
            */
			var videoRatio = (iframe.height()/iframe.width())*100;
			
			/*
            * Replace the iframe's dimensions and position
            * the iframe absolute, this is the trick to emulate
            * the video ratio
            */
            iframe.css('position','absolute');
			iframe.css('top','0px');
			iframe.css('left','0px');
            iframe.width("100%");
            iframe.height("100%");
			
			/*
            * Add dynamically calculated videoration as padding-top property based
            * on the video's w/h dimensions
            */
			
			$(this).css('padding-top',videoRatio+'%');
			
		}
	});
});

