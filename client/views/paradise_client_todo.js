/*

// collection of posts that includes array of tags
var Posts = new Meteor.Collection('posts');

// DB cursor to find all posts with 'important' in the tags array.
var cursor = Posts.find({tags: 'important'});

// watch the cursor for changes
var handle = cursor.observe({
  added: function (post) { ... }, // run when post is added
  changed: function (post) { ... } // run when post is changed
  removed: function (post) { ... } // run when post is removed
});

Template.user_profile_form.events({
	'click #submit_profile_btn': function(evt) {
		evt.preventDefault();
		var first_name = $('#profile_first_name').val()
			,last_name = $('#profile_last_name').val()
			,email = $('#profile_email').val()
			,email_lower_case = email.toLowerCase()
			,gravatar_hash = CryptoJS.MD5(email_lower_case);

		gravatar_hash = gravatar_hash.toString(CryptoJS.enc.Hex);

		// TODO need to create user sessions so that when you log out and log back in, you have a fresh session
		Meteor.users.update({_id: this.userId }, {
			$set: {
				profile: {
					first_name: first_name,
					last_name: last_name,
					gravatar_hash: gravatar_hash
				}
			}
		}, function(error) {
			if (!error) {
				Session.set('profile_edit', 'success');
				Meteor.setTimeout(function() {
					Session.set('profile_edit', null);
				}, 3000);
			} else {
				Session.set('profile_edit', 'error');
				Template.user_profile_form.error_message = function() {
					return error.reason;
				};
			}
		});

		Meteor.call('changeEmail', email);
	}
});

$('#navbar').scrollspy(); 
  $('[data-spy="scroll"]').each(function () {  
	var $spy = $(this).scrollspy('refresh')  
  }); 


Handlebars.registerHelper('isCurrentUser',function(input){
  return Session.get("isCurrentUser");
});

Handlebars.registerHelper('user',function(){
   return Meteor.user();
});


Template.private.helloPic = function() {
  var u = Meteor.user().profile.picture;

  //var u = Meteor.users.findOne({}, {fields: {emails: 1, profile: 1, 'services.facebook.email': 1}});

  return u;
}

Template.pledge.curstatus = function() {

  var u = "ok";
  if(Meteor.user().profile.has_pledged) {
	u = "s";
  }

  return u;
}



  //mixpanel.track("Page Loaded");
  
  //Session.set("userIsAdmin", true);
  //Meteor.users.update({_id:Meteor.userId()}, {$set:{username:"Zach Ary"}});
  //Meteor.users.update({_id:Meteor.user()._id}, {$addToSet:{"emails":{address:"newemail@newemail.com","verified":false}}});
  //Meteor.users.update({_id:Meteor.user()._id}, {$set:{"profile.name":"Carlos"}})
  //Meteor.users.update({_id:Meteor.user()._id}, {$set:{"emails":[{address:"newemail@newemail.com"}]});  
  //Session.set("pledge_status", Meteor.user().profile.has_pledged);
  
  
 
  Template.hero.events({
    "click #paradise": function (err, tmpl) {
  
  	mixpanel.track("Login Clicked -- Hero BG");
  
  	Meteor.loginWithFacebook({ 
  	  requestPermissions: ['email']},
  	function (err) {
  		if (err) {
  		  // Show error msg
  		  Session.set("status", "Login Failed!" + "[" + err.reason + "]");
  		  mixpanel.track("Login Failed -- Hero BG");
  		} else {
  		  // Show success msg
  		  Session.set("status", "Login Success!");
  		  mixpanel.track("Login Success -- Hero BG");
  		}
  	});
    }
  })
  */