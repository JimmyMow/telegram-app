import Ember from 'ember';

export default Ember.ArrayController.extend({
  needs: ['application'],

  currentUser: Ember.computed.alias('controllers.application.currentUser'),

  belowLimit: false,

  varifyUser: function() {
    if( !this.get('currentUser') ) {
      this.transitionToRoute('/login');
    }
  }.on('init'),

  postCharactersLeft: function() {
    var returnVal = 140 - (this.get('postBody') || '').length;

    if( returnVal < 0 ) {
      this.set('belowLimit', true);
    }

    return returnVal;
  }.property('postBody'),


  actions: {
    createPost: function() {
      var postBody = this.get('postBody');

      if (!postBody.trim() || postBody.length > 140) {
        alert('error');
        return;
      }

      var post = this.store.createRecord('post', {
        body: postBody,
        createdAt: new Date(),
        user: this.get("currentUser")
      });

      this.set('postBody', '');

      post.save();
    }
  }
});
