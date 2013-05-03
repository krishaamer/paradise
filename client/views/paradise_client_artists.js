Template.movie.events = {
"click .movie-still": function (e, tmpl) {
		
	  //mixpanel.track("Movie Thumb Clicked", {"name": Meteor.user().profile.name});
	
	  $('#movie-still-big-view').attr("src", $(e.target).attr("src")); 
	  $('.movie-still').removeClass('thumb-selected');
	
	  if(!$(e.target).hasClass('thumb-selected')) {
	  	$(e.target).addClass('thumb-selected');
	  }
	
	  if(e.target.id == "movie-still-1") {
	  	$('#movie-still-big-header').text('Alex-Keller Fonseca');
	  	$('#movie-still-big-desc').text(__('movie.atmamaafrica'));
	  } else if (e.target.id == "movie-still-2") {
	  	$('#movie-still-big-header').text('Alex-Keller & Kwame Sousa');
	  	$('#movie-still-big-desc').text(__('movie.brasilemb'));
	  } else if (e.target.id == "movie-still-3") {
	  	$('#movie-still-big-header').text('Alex-Keller & Rita Cruz');
	  	$('#movie-still-big-desc').text(__('movie.rtpinterview'));
	  } else if (e.target.id == "movie-still-4") {
	  	$('#movie-still-big-header').text('Alex-Keller on a Mototaxi');
	  	$('#movie-still-big-desc').text(__('movie.crosstheislands'));
	  } else if (e.target.id == "movie-still-5") {
	  	$('#movie-still-big-header').text('Alex-Keller Selecting Paintings');
	  	$('#movie-still-big-desc').text(__('movie.olavohelp'));
	  } else if (e.target.id == "movie-still-6") {
	  	$('#movie-still-big-header').text('Alex-Keller on the Exhibiton Day');
	  	$('#movie-still-big-desc').text(__('movie.paintingsrevelation'));
	  }
	}
};

Template.featured.events({
	"click .artist": function (e, tmpl) {
		
		function listProperties(obj) {
		   var propList = "";
		   for(var propName in obj) {
			  if(typeof(obj[propName]) != "undefined") {
				 propList += (propName + ", ");
			  }
		   }
		   alert(propList);
		}		
		//listProperties(e.currentTarget.id);

		if($(e.currentTarget).height() == 100) {
			
		var artistname = $(e.currentTarget).attr("title");
		
		//mixpanel.track("Open Alex", {"name": Meteor.user().profile.name});
		
		$(e.currentTarget).animate({'height':'215'},'7000');
		$('#title-featured-artist').removeClass('fadeInLeft').addClass('fadeOutRight', 10, function(){
		  $(this).removeClass('fadeOutRight', 500, function() {
			$(this).text(artistname).addClass('fadeInLeft');
		  })
		});
		
		} else {
		
		//mixpanel.track("Alex Close", {"name": Meteor.user().profile.name});
		
		$(e.currentTarget).animate({'height':'100'},'7000');
		$('#title-featured-artist').removeClass('fadeInLeft').addClass('fadeOutRight', 10, function(){
		  $(this).removeClass('fadeOutRight', 500, function() {
			$(this).text(__('featuredartists')).addClass('fadeInLeft');
		  })
		});
		} 
	   }
});