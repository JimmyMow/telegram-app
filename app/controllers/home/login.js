import Ember from 'ember';

export default Ember.Controller.extend({
  errorMessage: false,

  actions: {
    login: function() {
      var self = this;
      var data = this.getProperties("username", "password");

      this.store.find("user", data.username).then(function(record) {

        if( data.password === record.get("password") ) {
          self.set('session.user', record);
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
