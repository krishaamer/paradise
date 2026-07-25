// Minimal stubs for analytics and mixpanel used in legacy code

if (typeof analytics === 'undefined') {
  analytics = {
    init: function () {},
    track: function () {},
    identify: function () {}
  };
}

if (typeof mixpanel === 'undefined') {
  mixpanel = {
    init: function () {},
    identify: function () {},
    alias: function () {},
    name_tag: function () {},
    track: function () {},
    people: {
      set: function () {},
      track_charge: function () {}
    }
  };
}

