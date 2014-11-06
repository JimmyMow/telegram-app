import Ember from 'ember';

export default Ember.Route.extend({
  activate: function() {
    Ember.$('html').addClass('home');
  },
  deactivate: function() {
    Ember.$('html').removeClass('home');
  }
});
