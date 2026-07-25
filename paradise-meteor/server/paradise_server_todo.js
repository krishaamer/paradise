/*

Meteor.methods({
	sendEmail: function(to, from, subject, text) {
		this.unblock();

		Email.send({
			to: to,
			from: from,
			subject: subject,
			text: text
		});
	},
	changeEmail: function(newEmail) {
		// TODO Need to validate that new e-mail does not already exist
		Meteor.users.update(Meteor.userId(), {
			$set: {
				emails: [{
					address: newEmail,
					verified: false
				}]
			}
		});
	 }
});

Meteor.publish('searchResults', function(query){
  var re = new RegExp(query, 'i')
  return Users.find({ 'name' : {$regex: re}})
})

*/
/*
Meteor.publish("facebook_email", function() { 
	return Meteor.users.find({_id: this.userId}, {fields: {
		'services.facebook.email': 1,
		'services.facebook.id': 1,
		'services.facebook.name': 1,
		'services.facebook.gender': 1,
		'services.facebook.picture': 1,
		'services.facebook.picture.data': 1,
		'services.facebook.picture.data.url': 1
	}}); 
});
*/

/*
Meteor.publish("current_user_data", function () {
	return Meteor.users.find({_id: this.userId},
		{fields: {'profile.first_name': 1, 'profile.last_name': 1}});
});
*/