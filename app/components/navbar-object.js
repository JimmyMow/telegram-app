import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'nav',
  classNames: ['app-nav'],

  actions: {
    signOut: function() {
      var controller = this.get('targetObject');
      Ember.$.ajax({
       url: '/api/logout',
       type: 'GET'
      }).then(function(response) {
          if(response){
            controller.set('session.user', null);
            controller.transitionToRoute('/login');
            controller.store.unloadAll('user');
            controller.store.unloadAll('post');
          } else {
            alert("There was an error signing you out");
          }
      });
    }
  }
});
