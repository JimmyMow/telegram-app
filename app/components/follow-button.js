import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['form-button'],

  actions: {
    follow: function() {
      var _this = this.get('targetObject');
      var currUser = _this.get('session.user.id');
      _this.store.find("user", {follow: this.get('user.id')}).then(function(res) {
        console.log(res);
      });
    }
  }
});
