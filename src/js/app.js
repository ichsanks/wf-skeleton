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
			$(this).parent().toggleClass('collapse');
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

		$target = $(this).data('target');
		$($target).toggle();
	});

	$('.modal')
		.on('click','.close', function(e) {
			$(this).closest('.modal').hide();
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
			 		revert: 'invalid'			 		
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
			 	.on('click', function(e) {
			 		console.log('clicked');
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
    	helper: 'clone'
    }).on('click', function() {
    	console.log('clicked');
    });

    $('.product.mounted').resizable({
    	animate: true
    });    
});