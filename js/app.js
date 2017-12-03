$(document).ready(function(){


	 $(".button-collapse").sideNav();

	 // For side-nav and Modal
        $('.modal').toggle('open');

        // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
        $('.modal').modal({
            dismissible: true, // Modal can be dismissed by clicking outside of the modal
            opacity: 0.5, // Opacity of modal background
            inDuration: 300, // Transition in duration
            outDuration: 200, // Transition out duration
            startingTop: '30%', // Starting top style attribute
            endingTop: '20%', // Ending top style attribute
          }
        );


        $(function() {
          $('a[href*=#]').on('click', function(e) {
            e.preventDefault();
            $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
          });
        });
 		
})
