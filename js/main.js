



	// //wow.js on scroll animations initialization
	// wow = new WOW(
	//     {
	// 	  animateClass: 'animated',
	// 	  mobile: false,
	// 	  offset: 50
	// 	}
	// );
    
    // wow.init();
















	






	// //Mailchimp subscription form initialization
	// $('#submit_form').submit(function(){
	// 	$('#mc_submit').attr('disabled', 'disabled');		
   	// 	processing('icon', 'loading');
	// });

	// if($('#submit_form').length){
	// 	//Mailchim Subscription form
	// 	$('#submit_form').ajaxChimp({
	// 	    callback: chimpResponce
	// 	});
	// }	

	//Mail chimp callback function
	// function chimpResponce(resp) {
   	// 	if (resp.result === 'success') {   			
   	// 		processing('loading', 'icon');
	// 		$('#mc_submit').removeAttr('disabled', 'disabled');
	//         $('#submit_form #mc-email').val('');
   	// 		$('#error_msg').hide();
   	// 		$('#success_msg').show();
	//     }else{		
   	// 		processing('loading', 'icon');
   	// 		$('#success_msg').hide();
   	// 		$('#error_msg').show();
	//     	$('#mc_submit').removeAttr('disabled', 'disabled');
	//     }
	// }

	// function processing(hide, show){
	// 		$('#mc_submit i').removeClass(hide).addClass(show);
	// }








	// //Popup video
	// $('#play_video').click(function(e){
	// 	e.preventDefault();	

	// 	var video_link = $(this).data('video');
	// 	video_link = '<iframe src="' + video_link + '" width="500" height="208" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';

	// 	$('.about_video').append(video_link).fadeIn(200);
	// });

	// $('.close_video').click(function(e){
	// 	e.preventDefault();	

	// 	$('.about_video').fadeOut(200,function(){
	// 		$('iframe', this).remove();
	// 	});

	// });

