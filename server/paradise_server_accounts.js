Accounts.loginServiceConfiguration.remove({
	service: "facebook"
});

Accounts.onCreateUser(function (options, user) {

	var accessToken = user.services.facebook.accessToken, result, profile;

	result = Meteor.http.get("https://graph.facebook.com/me", {
		params: {
		  access_token: accessToken
		}
	});

	if (result.error)
		throw result.error;

	profile = _.pick(result.data, "services.facebook.name", "services.facebook.picture", "services.facebook.email");

	// We still want the default hook's 'profile' behavior.
	if (options.profile) {
		options.profile.picture 	= "http://graph.facebook.com/" + user.services.facebook.id + "/picture/?type=large";
		options.profile.first_name 	= user.services.facebook.first_name;
		options.profile.last_name 	= user.services.facebook.last_name;
		options.profile.email		= user.services.facebook.email;
		options.profile.has_pledged = false;
		options.profile.message		= "";
		user.profile = options.profile;
	}

	return user;
});


/* Make sure we're using the correct API keys for the dev / live servers */
if(Meteor.absoluteUrl() == "http://localhost:3000/"){

	Accounts.loginServiceConfiguration.insert({
	  service: "facebook",
	  appId: "129899660532195",
	  secret: "1561de8d0a90f685de1693b19e454235"
	});

	} else if (Meteor.absoluteUrl() == "http://tome.meteor.com/"){

	Accounts.loginServiceConfiguration.insert({
	  service: "facebook",
	  appId: "122131637979111",
	  secret: "73fcb57f327e8e0208ebd74373d74913"
	});
}