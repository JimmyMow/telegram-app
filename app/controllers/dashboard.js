import Ember from 'ember';

var DashboardController = Ember.ArrayController.extend({
  needs: ['application'],

  currentUser: Ember.computed.alias('controllers.application.currentUser'),

  postLength: 140,

  postKey: function(){
      this.set("postLength", 140 - this.get('postBody').length);
  }.observes('postBody'),

  actions: {
    createPost: function() {
      var self = this;
      var postBody = this.get('postBody');

      if (!postBody.trim()) {
        return;
      }

      var post = this.store.createRecord('post', {
        body: postBody,
        createdAt: new Date(),
      });

      this.get("currentUser").then(function(record) {
        post.set("user", record);
      });

      this.set('postBody', '');

      post.save();
    }
  }
});

export default DashboardController;
