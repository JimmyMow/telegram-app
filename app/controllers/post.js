import Ember from 'ember';
var PostController = Ember.ObjectController.extend({
  needs: ['application'],

  currentUser: Ember.computed.alias('controllers.application.currentUser'),

  isOwner: false,

  checkIfOwner: function() {
    var _this = this;
    this.get('user').then(function(record) {
      if ( _this.get('currentUser.id') === record.get('id') ) {
        _this.set("isOwner", true);
        console.log(_this.get('isOwner'));
      }
    });
  }.on('init'),

  actions: {
    repost: function() {
      var post = this.store.createRecord('post', {
        body: this.get("body"),
        createdAt: this.get("createdAt"),
        repost: this.get("currentUser")
      });

      this.get("user").then(function(record){
        post.set("user", record);
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
