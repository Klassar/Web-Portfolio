const portfolioArray = [
	{
		"value": "show_all",
		"image": "/img/portfolio_images/Popcorn-Trailers.jpg",
		"title": "Popcron Trailers",
		"projectType": "github",
		"description": "Popcorn Trailers is a web app for viewing movie trailers, ratings, and audience scores from a variety of titles. Ratings and audience data comes from Rotton Tomatoes.",
		"link": "https://github.com/Klassar/Popcorn-Traillers",
	},
	{
		"value": "show_all",
		"image": "img/portfolio_images/ReportCard.jpg",
		"title": "Report Card",
		"projectType": "github",
		"description": "Report Card is a beta build Ajax application designed to dymanically search, edit and track students grades, schedules and teacher notes.",
		"link": "https://github.com/Klassar/Report-Card",
	},
	{
		"value": "show_all",
		"image": "img/portfolio_images/RSVP.jpg",
		"title": "RSVP Me",
		"projectType": "github",
		"description": "RSVP Me is a registration application for user to add, edit or delete event attendees. Currently all infomation is stored on the client side in browser cookies. Later editions may include datase support to host attendees infomation.",
		"link": "https://github.com/Klassar/RSVP-Me",
	},
	{
		"value": "show_all",
		"image": "img/portfolio_images/MovieQuoteGenerator.jpg",
		"title": "Movie Quotes",
		"projectType": "codepen",
		"description": "Movie-Quote-Generator is a simple JS project that allows users to randomly display new quotes/bg color whenever a click event is triggered.",
		"link": "https://github.com/Klassar/Movie-Quote-Generator",
	},
];


// create portfolio card
function createPortfolioCard(e) {
	for (let i = 0; i < portfolioArray.length; i++) {
		if (portfolioArray[i].projectType === e || portfolioArray[i].value === e) {
			// assembles html for div card and stores it in card variable
			const card = "<a href=" + "'" + `${portfolioArray[i].link}` + "'" + " class='wrapper section--boxed project-item'>" +
								 "<img class='portfolioImg' src=" + "'" + `${portfolioArray[i].image}` + "'" + ">" +
								 "<div class='portfolioInfo-wrapper'>" +
								 "<h3>" + `${portfolioArray[i].title}` + "</h3>" +
								 // "<p class='testP'>" + `${portfolioArray[i].description}` + "</p>" +
								 "<p>View full project</p>" +
								 "</div>" +
								 "</a>";
		  // Renders the fitlered card in #portfolioCard--container div
			$("#portfolioCard--container").append(card);
		}
	}
}

// filter through select options
	// exact value from user selected option
$("option").on('click', function() {
	const filterOptions = $("select");
	for (let i = 0; i < filterOptions.length; i++) {
		const e =	filterOptions[i].value;

		// Empty container before recalling the createPortfolioCard function
		$("#portfolioCard--container").empty();

		// Create new card with selected project type value
		createPortfolioCard(e);
	}
});

// Call function to display all cards on document load
createPortfolioCard("show_all");





// Inables slick slider on tech-carousel div
$(document).ready(function () {
	$('.tech-carousel').slick({
	  dots: false,
	  infinite: true,
	  speed: 600,
	  slidesToShow: 5,
	  slidesToScroll: 2,
	  autoplay: true,
	  autoplaySpeed: 4000,
	  responsive: [
	    {
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 4,
	        slidesToScroll: 2,
	        infinite: true,
	        dots: false
	      }
	    },
	    {
	      breakpoint: 600,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 2
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 1
	      }
	    }
	  ]
	});
});

// testimonials slider
$(document).ready(function () {
	$('.testimonials--container').slick({
	  dots: false,
	  infinite: true,
	  speed: 600,
	  slidesToShow: 2,
	  slidesToScroll: 1,
	  autoplay: false,
	  responsive: [
	    {
	      breakpoint: 1100,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1,
	        infinite: true,
	        dots: false
	      }
	    }
	  ]
	});
});

// Create google maps
function myMap() {
var mapProp= {
    center:new google.maps.LatLng(51.508742,-0.120850),
    zoom:5,
};
var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
}

myMap();
