import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  classNames: ['user-list'],

  confirmRepost: false,

  isOwner: function() {
    var currUser = this.get('session.user.id');
    return currUser === this.get('post.user.id') || currUser === this.get('post.repost.id');
  }.property('post.user.id', 'post.repost.id', 'session.user.id'),

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
        });

        this.get("post.user").then(function(record) {
          newPost.set('user', record);
        });

        newPost.save();
        this.set('confirmRepost', false);
      } else {
        this.set('confirmRepost', false);
      }
    },

    delete: function() {
      var post = this.get('post').deleteRecord();
      post.save();
    }
  }
});
