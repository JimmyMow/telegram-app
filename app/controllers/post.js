import Ember from 'ember';
var PostController = Ember.ObjectController.extend({
  needs: ['application'],

  currentUser: Ember.computed.alias('controllers.application.currentUser'),

  actions: {
    repost: function() {
      var post = this.store.createRecord('post', {
        body: this.get("body"),
        createdAt: this.get("createdAt"),
      });

      this.get("user").then(function(record){
        post.set("user", record);
      });

      this.get("currentUser").then(function(record) {
        post.set("repost", record);
      });

      post.save();
    }
  },

  delete: function() {
    var post = this.get('model');
    post.deleteRecord();
    post.save();
  }
});

export default PostController;
