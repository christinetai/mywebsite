function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1} 
    slides[slideIndex-1].style.display = "block"; 
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 8000);    
}

function attachEventHandlers() {
	// TODO
	$('.img-proj').on('click', handleImageClick); // when a div with the class image is clicked, do the function handleImageClick
}

function handleImageClick(event) {
	const target = $(event.target);
	const images = $('.img-proj');
	const nameLabel = $('.proj-name');
	const descLabel = $('.proj-desc');
	const linkLabel = $('.proj-more');

	const imgSrc = target.attr('src');
	const sources = ['flatulan.jpg','galaxy.jpg','encode.jpg'];
	const names = ['Project 1','Project 2','Project 3'];
	const descriptions = ['Can you survive against the Flatulans?',
							'Using the stars and galaxy, can you guess the word?',
							'Now you can play a piano song using the sequence of characters the ButtonBass software wants'];
	const links = ["https://docs.google.com/document/d/1cATeBtum9PjtJNo8YNcHSZIcCHOi2aMj7hD73Qgg-XE/edit?usp=sharing",
					"https://docs.google.com/document/d/1OkZ570sTHCfeU6ituYFypHy8osHxJWv6R2WAG7Zc_X0/edit?usp=sharing",
					"https://docs.google.com/document/d/13bjHMQkk-j6IhGXrRxp7Qx0x8M-qS_AG8NoOzHCu8oc/edit?usp=sharing"];

	// TODO
	if(target.hasClass('selected')) {
		target.removeClass('selected');
		images.removeClass('not-selected');
		nameLabel.text("");
		descLabel.text("");
		linkLabel.hide();
		
	} else {
		images.removeClass('selected');
		images.addClass('not-selected');

		target.addClass('selected');
		target.removeClass('not-selected');

		const index = sources.indexOf(imgSrc);

		
		linkLabel.show();
		nameLabel.text(names[index]);
		descLabel.text(descriptions[index]);
		linkLabel.attr('href',links[index]);
	}
	
}

$('document').ready(function() {

	attachEventHandlers();
	$('.proj-name').text("");
	$('.proj-desc').text("");
	$('.proj-more').hide();

});