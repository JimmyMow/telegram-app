import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['form-button'],

  actions: {
    follow: function() {
      var controller = this.get('targetObject');
      var _this = this;
      var currUser = controller.get('session.user');
      currUser.set('operation', 'follow');
      currUser.set('userId', this.get('user.id'));
      currUser.save().then(function(user){
        var user = _this.get('user');
        user.set('followedByCurrentUser', true);
      });
    },

    unfollow: function() {
      var controller = this.get('targetObject');
      var _this = this;
      var currUser = controller.get('session.user');
      currUser.set('operation', 'unfollow');
      currUser.set('userId', this.get('user.id'));
      currUser.save().then(function(user){
        var user = _this.get('user');
        user.set('followedByCurrentUser', false);
      });
      // var controller = this.get('targetObject');
      // var _this = this;
      // controller.store.find("user", {unfollow: this.get('user.id'), operation: 'unfollow'}).then(function(usersArray) {
      //   if( usersArray.get('firstObject') ) {
      //     var user = _this.get('user');
      //     user.set('followedByCurrentUser', false);
      //   } else {
      //     // Do something
      //   }
      // });
    }
  }
});
