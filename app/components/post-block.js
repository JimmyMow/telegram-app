import Ember from 'ember';

export default Ember.Component.extend({
  belongsToCurrentUser: function(post) {

  }.property('post.user'),

  actions: {
    repost: function(post) {
      var store = this.get('targetObject.store');

      var newPost = store.createRecord('post', {
        body: post.get('body'),
        createdAt: post.get('createdAt'),
        repost: this.get('session.user'),
        user: post.get('user')
      });

      newPost.save();
    }
  },

  delete: function(post) {
    var post = post;
    post.deleteRecord();
    post.save();
  }
});
