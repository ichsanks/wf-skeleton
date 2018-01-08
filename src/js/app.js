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
	})

	$('[data-toggle="modal"]').on('click', function(e) {
		e.preventDefault();
		e.stopPropagation();
	})
});