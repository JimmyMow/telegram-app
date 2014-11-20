import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'nav',
  classNames: ['app-nav'],

  actions: {
    signOut: function() {
      this.set('session.user', null);
      var controller = this.get('targetObject');
      controller.transitionToRoute('/login');
    }
  }
});
