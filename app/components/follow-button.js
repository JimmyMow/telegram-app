import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['form-button'],

  actions: {
    follow: function() {
      var controller = this.get('targetObject');
      var _this = this;
      controller.store.find("user", {follow: this.get('user.id'), operation: 'follow'}).then(function(usersArray) {
        if( usersArray.get('firstObject') ) {
          var user = _this.get('user');
          user.set('followedByCurrentUser', true);
          user.save();
        } else {
          // Do something
        }
      });
    },

    unfollow: function() {
      var controller = this.get('targetObject');
      var _this = this;
      controller.store.find("user", {unfollow: this.get('user.id'), operation: 'unfollow'}).then(function(usersArray) {
        if( usersArray.get('firstObject') ) {
          var user = _this.get('user');
          user.set('followedByCurrentUser', false);
          user.save();
        } else {
          // Do something
        }
      });
    }
  }
});
