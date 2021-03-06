import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.find("user", {operation: 'followers', user: this.modelFor('user').get('id')});
  }
});
