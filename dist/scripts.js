$(function() {
	$('.hamburger-menu').on('click', function() {
		$('.toggle').toggleClass('open');
		$('.nav-list').toggleClass('open');
	});
});

$(function() {
	$('.nav-item').on('click', function() {
		$('.toggle').toggleClass('open');
		$('.nav-list').toggleClass('open');
	});
});

//AOS Animation
AOS.init({
	easing: 'ease',
	duration: 1000
});
