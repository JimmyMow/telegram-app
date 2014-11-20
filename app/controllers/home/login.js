import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['application'],

  currentUser: Ember.computed.alias('controllers.application.currentUser'),

  errorMessage: false,

  actions: {
    login: function() {
      var self = this;
      var data = this.getProperties("username", "password");

      this.store.find("user", data.username).then(function(record) {

        if( data.password === record.get("password") ) {
          self.set("currentUser", record);
          self.get('session').set('user', record);
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
