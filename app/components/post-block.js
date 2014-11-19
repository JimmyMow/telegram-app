import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  classNames: ['user-list'],

  confirmRepost: false,

  belongsToCurrentUser: function() {
    return this.get('post.user') === this.get('session.user');
  }.property('post.user', 'session.user'),

  actions: {
    repostClicked: function() {
      this.set('confirmRepost', true);
    },

    repost: function(bool) {
      if(bool) {
        var store = this.get('targetObject.store');

        var newPost = store.createRecord('post', {
          body: this.get('post.body'),
          createdAt: this.get('post.createdAt'),
          repost: this.get('session.user'),
          user: this.get('post.user')
        });

        newPost.save();
        this.set('confirmRepost', false);
      } else {
        this.set('confirmRepost', false);
      }
    }
  },

  delete: function() {
    var post = this.get('post').deleteRecord();
    post.save();
  }
});
