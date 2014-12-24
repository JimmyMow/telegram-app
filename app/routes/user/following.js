import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.find("user", {operation: 'following', user: this.modelFor('user').get('id')});
  },

  renderTemplate: function(controller) {
    this.render('user.followers', { controller: controller });
  }
});
