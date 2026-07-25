Meteor.startup(function(){ 
  mixpanel.init('21e64d791937b37ab3b4282f34555217');
  analytics.init({secret: 'utekfbsc5zmosp47jrvb'});
});

//Meteor.setLocale('ee');
Meteor.Router.add({
  '/ee': function() {
    Meteor.setLocale('ee');
   },
   '/en': function() {
    Meteor.setLocale('en');
   },
   '/pt': function() {
     Meteor.setLocale('pt');
   }
});

for (var namespace in Meteor.i18nMessages) {
  var obj = {};
  for (var msg in Meteor.i18nMessages[namespace]) {
    var str = 'obj["' + msg + '"] = function() { return __("' + namespace + '.' + msg + '"); }';
    //console.log(str);
    eval(str);
  } 
  Template[namespace].helpers(obj);
}

Template.private.helloName = function() {
  Meteor.subscribe("current_user_data");
  return __('private.hello') + " " + Meteor.user().profile.first_name;
}

Template.notifier.status = function() {
  return Session.get("status") + " [" + Meteor.absoluteUrl() + "]";
};

Template.private.rendered = function() {
  
  Meteor.subscribe("list-all-users-who-have-pledged");
  mixpanel.identify(Meteor.user()._id);
  mixpanel.alias(Meteor.user()._id);
  mixpanel.name_tag(Meteor.user().profile.email);
  
  mixpanel.people.set({
      $email: Meteor.user().profile.email,
      $first_name: Meteor.user().profile.first_name,
      $last_name: Meteor.user().profile.last_name
  });
  
  var have_i_pledged = Meteor.render(function () {
    
    if(Meteor.users.find({_id:Meteor.user()._id, "profile.has_pledged": true}).count() === 1) {

      $('#btn').removeClass('undone');
      $('span#dsc').animate({'marginLeft':'90px'},'1500').text('Toetan!');
      $('img#check').animate({'opacity':'1'},'1500');
      $('#btn').addClass('done');
      $('#pledge').animate({'width':'200'},'7000');
      $('#tick-this-box').animate({'opacity':'0'},'500');
      
      $('#why').animate({'opacity':'1'},'3500', function(){
        $(this).removeClass('hide');
      })  
    } else {
      
      $('#why').animate({'opacity':'0'},'3500', function(){
        $(this).addClass('hide');
      })
    }
  });
}

Template.supporters.daysUntilFinish = function () {
  
    var DateDiff = {
      
        inMinutes: function(d1, d2) {
            var t2 = d2.getTime();
            var t1 = d1.getTime();
        
            return parseInt((t2-t1)/(60*1000));
        },
        
        inHours: function(d1, d2) {
            var t2 = d2.getTime();
            var t1 = d1.getTime();
        
            return parseInt((t2-t1)/(3600*1000));
        },
    
        inDays: function(d1, d2) {
            var t2 = d2.getTime();
            var t1 = d1.getTime();
    
            return parseInt((t2-t1)/(24*3600*1000));
        },
    
        inWeeks: function(d1, d2) {
            var t2 = d2.getTime();
            var t1 = d1.getTime();
    
            return parseInt((t2-t1)/(24*3600*1000*7));
        }
    }
  
    var dString = "May, 6, 2013";
    
    var d1 = new Date(dString);
    var d2 = new Date();
    
    var minutes = "Mai 6, 2013: " + DateDiff.inMinutes(d1, d2);
    var hours   = "Mai 6, 2013: " + DateDiff.inHours(d1, d2);
    var days    = "Mai 6, 2013: " + DateDiff.inDays(d1, d2);
    var weeks   = "Mai 6, 2013: " + DateDiff.inWeeks(d1, d2);
    
    return days.replace("-",""); 
}

Template.progress.pledgeProgressPercent = function () {
  
    var pledgeCount = Meteor.users.find({"profile.has_pledged": true}).count();
    var pctraised   = Math.round(pledgeCount * (1000 / 15000 * 100));
    
    return pctraised + "%"; 
}


Template.progress.pledgeProgressEuros = function () {

    var pledgeCount = Meteor.users.find({"profile.has_pledged": true}).count();
    var eurosRaised  = pledgeCount * 1000;

    return __('supporters.totalraised') + ": €" + eurosRaised; 
}

Template.supporters.supporterCount = function () {
    
    Meteor.subscribe("list-all-users-who-have-pledged");
    var usercount = Meteor.users.find({"profile.has_pledged": true}).count();
    var qualifier = __('supporters.person');
    if(usercount != 1) {
      qualifier = __('supporters.people');
    }
    return __('supporters.projectsupportedby') + " " + usercount + " " + qualifier;
}  

Template.supporters.listHavePledged = function() {
  
  Meteor.subscribe("list-all-users-who-have-pledged");
  var sup = Meteor.users.find({"profile.has_pledged": true}, {fields: {name: 1, 'profile.has_pledged': 1}}).fetch();
    
  return sup;
}

Template.why.currentMessage = function() {

  var msg = Meteor.users.findOne({_id:Meteor.user()._id}, {fields: {'profile.message': 1}});
  return msg.profile.message;
}

Template.why.events({
  'submit': function (e, tmpl) {
    
    e.preventDefault();
    var myMessage = $('#updateMessage').val();
    Meteor.users.update({_id:Meteor.user()._id}, {$set: {"profile.message": myMessage}});
    
    $('#hero').scrollIntoView();    
  }
})

Template.private.events({
  'click #watchMovieModalButton': function(e, tmpl) {

      mixpanel.track("Watch Movie Button", {"name": Meteor.user().profile.name});
      mixpanel.people.track_charge(9.99);
  }
})

Template.movie.events({
  'click #wantmore': function(e, tmpl) {
    
    alert("movie");
    e.preventDefault();
    
      $('#hero').scrollIntoView();
      
  }
})

Template.pledge.events({
  "click #btn": function (err, tmpl) {
    
    if($('#btn').hasClass('done')){

      $('#btn').removeClass('done');
      $('span#dsc').animate({'marginLeft':'23px'},'1500').text('Liitun Toetajatega');
      $('img#check').animate({'opacity':'0'},'1500');
      $('#btn').removeClass('undone');
      
      $('#tick-this-box').animate({'opacity':'1'},'1500');
      $('#pledge').animate({'width':'350'},'7000');
      
      Meteor.call("update_pledge", false, function(error, pledge_status) {
          Session.set("pledge_status", pledge_status);
      });
      mixpanel.track("Pledge Unjoined by " + Meteor.user().profile.name, {"name": Meteor.user().profile.name})
      
    } else {
      
      $('#btn').removeClass('undone');
      $('span#dsc').animate({'marginLeft':'90px'},'1500').text('Toetan!');
      $('img#check').animate({'opacity':'1'},'1500');
      $('#btn').addClass('done');
      
      $('#tick-this-box').animate({'opacity':'0'},'1500');
      $('#pledge').animate({'width':'200'},'7000');
      
      mixpanel.track("Pledge Joined by " + Meteor.user().profile.name, {"name": Meteor.user().profile.name});
      Meteor.call("update_pledge", true, function(error, pledge_status) {
          Session.set("pledge_status", pledge_status);
      });
    }
  }
});

Template.user_loggedout.events({
  "click #login": function (err, tmpl) {
    
    mixpanel.track("Login Clicked");
    
    Meteor.loginWithFacebook({ 
      requestPermissions: ['email']},
    function (err) {
        if (err) {
          Session.set("status", "Login Failed!" + "[" + err.reason + "]");
          mixpanel.track("Login Failed");
          
        } else {
          Session.set("status", "Login Success!");
          mixpanel.track("Login Success");
        }
    });
  }
})

Template.navbar.events({
  "click #logout": function (err, tmpl) {
    Meteor.logout(function (err) {      
      if (err) {
        Session.set("status", err.reason);
        mixpanel.track("Logout Error");
        
      } else {
        mixpanel.track("Logout Success");
      }
    })
  },
  "click #navlogin": function (err, tmpl) {
    
    mixpanel.track("Login Clicked");
    
    Meteor.loginWithFacebook({ 
      requestPermissions: ['email']},
    function (err) {
        if (err) {
          Session.set("status", "Login Failed!" + "[" + err.reason + "]");
          mixpanel.track("Login Failed");
          
        } else {
          Session.set("status", "Login Success!");
          mixpanel.track("Login Success");
        }
    });
  }
})