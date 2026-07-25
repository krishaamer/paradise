Meteor.startup(function(){

});

/* Update Pledge */
Meteor.methods({
	update_pledge: function(pledge_status) {
		console.log("UPDATING PLEDGE: " + pledge_status + " for user " + this.userId);
		Meteor.users.update({_id: this.userId}, {$set:{"profile.has_pledged":pledge_status}});
	
		return true;
	}
});

Meteor.publish('list-all-users-who-have-pledged', function () {
	
	var banned = ["Vania Negrao", "Veljo Haamer", "Daisy Kruus", "Annes AlexOrg"];
	return Meteor.users.find({"profile.has_pledged": true, "profile.name": { $nin: banned }}, {
		fields: {
			'profile.name': 1,
			'profile.has_pledged': 1,
			'profile.first_name': 1,
			'profile.last_name': 1,
			'profile.picture': 1,
			'profile.message': 1
		}
	});
});

Meteor.publish("access_token", function () {
	return Meteor.users.find({ _id : this.userId}, 
		{'services.facebook.accessToken': 1}
	);
});

