import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var user = this.modelFor('user');
    return this.store.find('post', { user: user.id, operation: "userProfile" });
  }
});
