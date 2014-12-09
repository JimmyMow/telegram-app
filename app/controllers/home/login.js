import Ember from 'ember';

export default Ember.Controller.extend({
  errorMessage: false,

  actions: {
    login: function() {
      var self = this;
      var credientials = this.getProperties("username", "password");

      this.store.find("user", {id: credientials.username, password: credientials.password, operation: 'login'}).then(function(recordArray) {
        if( recordArray.get('firstObject') ) {
          self.set('session.user', recordArray.get('firstObject'));
          self.transitionToRoute('dashboard');
        } else {
          self.set('errorMessage', 'Your username or password was incorrect :(');
        }
      });

      this.set('username', '');
      this.set('password', '');
    }
  }
});
