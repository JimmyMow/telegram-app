import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['application'],

  currentUser: Ember.computed.alias('controllers.application.currentUser'),

  // checkForUser: function() {
  //   if( this.get('currentUser') ) {
  //     this.transitionToRoute('dashboard');
  //   }
  // }.on('init'),

  errorMessage: false,

  actions: {
    login: function() {
      var self = this;
      var data = this.getProperties("username", "password");

      this.store.find("user", data.username).then(function(record) {

        if( data.password === record.get("password") ) {
          self.set("currentUser", record);
          self.transitionToRoute('dashboard');
        } else {
          alert('here');
          self.set('errorMessage', 'Your username or password was incorrect :(');
        }

      });

    }
  }
});
