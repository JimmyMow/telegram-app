import Ember from 'ember';

export default Ember.ArrayController.extend({
  belowLimit: function() {
    return this.get('postCharactersLeft') < 0;
  }.property('postCharactersLeft'),

  postCharactersLeft: function() {
    return 140 - (this.get('postBody') || '').length;
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
        user: this.get("session.user")
      });

      this.set('postBody', '');

      post.get('user').then(function() {
        post.save();
      });
    }
  }
});
