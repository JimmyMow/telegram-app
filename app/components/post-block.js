import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  classNames: ['user-list'],

  confirmRepost: false,

  isOwner: function() {
    var currUser = this.get('session.user.id');
    return currUser === this.get('post.creator.id');
  }.property('post.creator.id', 'session.user.id'),

  isRepost: function() {
    return this.get('post.creator.id') !== this.get('post.originalCreator.id');
  }.property('post.creator.id', 'post.originalCreator.id'),

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
          creator: this.get('session.user'),
        });

        this.get("post.creator").then(function(record) {
          newPost.set('originalCreator', record);
        });

        newPost.get('creator').then(function() {
          newPost.save();
        });
        this.set('confirmRepost', false);
      } else {
        this.set('confirmRepost', false);
      }
    },

    delete: function() {
      this.get('post').destroyRecord();
    }
  }
});
