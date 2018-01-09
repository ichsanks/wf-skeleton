require('jquery');
require('jquery-ui-bundle');

const css = require('../scss/app.scss');

console.log("It works!");

$(document).ready(function() {

	$('[data-toggle="collapse"]').on('click', function(e) {
		e.preventDefault();
		e.stopPropagation();

		$target = $(this).data('target');
		if($target) {
			$($target).toggleClass('collapse');
		} else {
			$(this).next().toggleClass('collapse');
		}
	});

	$('[data-toggle="dropdown"]').on('click', function(e) {
		e.preventDefault();
		e.stopPropagation();
		
		$(this).siblings('.dropdown-menu').toggleClass('open');
	});

	$('[data-toggle="modal"]').on('click', function(e) {
		e.preventDefault();
		e.stopPropagation();
	});

	$('.calendar-body').droppable({
		accept: '.product:not(.mounted)',
		drop: function(event, ui) {
			 $(ui.draggable)
			 	.clone()
			 	.addClass('mounted')
			 	.append('<div class="tag-body"></div>')
			 	.appendTo($(this))
			 	.resizable({
			 		handles: 'n,s'
			 	})
			 	.draggable({
			 		revert: 'invalid',
			 		handle: '.fa-arrows'			 		
			 	})
			 	.droppable({
			 		accept: '.instructor',
			 		drop: function(event, ui) {
			 			$(ui.draggable)
			 			.clone()
			 			.addClass('mounted')
			 			.appendTo($(this).find('.tag-body'))
			 		}
			 	})
			 	.on('click', '.close', function(e) {
			 		$(this).closest('.tags').remove();
			 	})
		}
	});


	$('.product').droppable({
		accept: '.instructor',
		drop: function(event, ui) {
			console.log('drop');
		}
	});

    $( ".instructor, .product" ).draggable({
    	revert: 'invalid',
    	handle: '.fa-arrows',
    	helper: 'clone'
    });

    $('.product.mounted').resizable({
    	animate: true
    });
});