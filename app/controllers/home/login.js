import Ember from 'ember';

export default Ember.Controller.extend({
  errorMessage: false,

  actions: {
    login: function() {
      var self = this;
      var data = this.getProperties("username", "password");

      this.store.find("user", {id: data.username, password: data.password, operation: 'login'}).then(function(recordArray) {
        if( recordArray.get('firstObject') ) {
          self.set('session.user', recordArray.get('firstObject'));
          self.transitionToRoute('dashboard');
        } else {
          alert('here');
          self.set('errorMessage', 'Your username or password was incorrect :(');
        }
      });

      this.set('username', '');
      this.set('password', '');
    }
  }
});
