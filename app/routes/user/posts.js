import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    // this.modelFor('user.id')
    return this.store.find('post', { user: 'JimmyMow' });
  }
});
