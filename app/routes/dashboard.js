import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function() {
    if( !this.get('session.isAuthenticated') ) {
      this.transitionTo('/login');
    }
  },

  model: function() {
    return this.store.find("post", {operation: 'dashboard'});
  }
});
