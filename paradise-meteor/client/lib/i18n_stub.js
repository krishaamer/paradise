// Minimal i18n shim to replace the old simple-i18n package
// Provides: Meteor.setLocale(locale), __("namespace.key")

if (typeof Meteor === 'undefined') {
  Meteor = {};
}

if (typeof Meteor.i18nMessages === 'undefined') {
  Meteor.i18nMessages = {};
}

(function () {
  // default locale
  if (Meteor.isClient) {
    Session.setDefault('locale', 'en');
  }

  Meteor.setLocale = function (locale) {
    if (Meteor.isClient) {
      Session.set('locale', locale);
    }
  };

  this.__ = function (key) {
    try {
      var locale = Meteor.isClient ? (Session.get('locale') || 'en') : 'en';
      var parts = (key || '').split('.');
      var obj = Meteor.i18nMessages;
      for (var i = 0; i < parts.length; i++) {
        obj = obj && obj[parts[i]];
      }
      if (obj && typeof obj === 'object') {
        return obj[locale] || obj.en || key;
      }
      return (obj != null) ? obj : key;
    } catch (e) {
      return key;
    }
  };
}).call(this);

