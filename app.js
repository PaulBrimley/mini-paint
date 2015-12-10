$(document).ready(function() {
	
	
	/*$('#red').on('click', function() {
		$('.box').on('click', function() {
			$(this).css('background-color', 'red');
		});
	})		
	$('#green').on('click', function() {
		$('.box').on('click', function() {
			$(this).css('background-color', 'green');
		});
	})	
	$('#blue').on('click', function() {
		$('.box').on('click', function() {
			$(this).css('background-color', 'blue');
		});
	})	
	$('#yellow').on('click', function() {
		$('.box').on('click', function() {
			$(this).css('background-color', 'yellow');
		});
	})	
	$('#white').on('click', function() {
		$('.box').on('click', function() {
			$(this).css('background-color', 'white');
		});
	})	
	$('#reset').on('click', function() {
		$('.box').css('background-color', 'black');
	})	*/

	/*---Better Way Below---*/

	/*var activeColor = white;
	
	$('.box').on('click', function() {
		$(this).css('background-color', activeColor);
	});
	$('#red').on('click', function() {
		activeColor = 'red';
	});
	$('#green').on('click', function() {
		activeColor = 'green';
	});
	$('#blue').on('click', function() {
		activeColor = 'blue';
	});
	$('#yellow').on('click', function() {
		activeColor = 'yellow';
	});
	$('#white').on('click', function() {
		activeColor = 'white';
	});
	$('#reset').on('click', function() {
		$('.box').css('background-color', 'black');
	});
	$('.box').dblclick(function() {
		$(this).css('background-color', 'black');
	});
*/

	/*---Even Better---*/

	var activeColor = white;
	var colors = 'yellow white red green blue black';

	$('.box').click(function() {
		$(this).removeClass(colors);
		$(this).addClass(activeColor);
	});
	$('#red').click(function() {
		activeColor = 'red';
	});
	$('#green').click(function() {
		activeColor = 'green';
	});
	$('#blue').click(function() {
		activeColor = 'blue';
	});
	$('#yellow').click(function() {
		activeColor = 'yellow';
	});
	$('#white').click(function() {
		activeColor = 'white';
	});
	$('#reset').click(function() {
		$('.box').css('background-color', 'black');
	});
	$('.box').dblclick(function() {
		$(this).removeClass(colors);
	});

})
	