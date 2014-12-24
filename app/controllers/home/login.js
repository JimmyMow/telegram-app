import Ember from 'ember';

export default Ember.Controller.extend({
  errorMessage: false,

  actions: {
    login: function() {
      var self = this;
      var credientials = this.getProperties("username", "password");
      alert(Ember.$.md5(credientials.password));
      var user = this.store.createRecord('user', {
        id: credientials.username,
        password: Ember.$.md5(credientials.password),
        operation: 'login'
      });

      user.save().then(function(user) {
        if( user ) {
          self.set('session.user', user);
          self.transitionToRoute('dashboard');
        } else {
          self.set('errorMessage', 'Your username or password was incorrect :(');
        }
      }, function(response) {
        alert(response);
      });


      this.set('username', '');
      this.set('password', '');
    }
  }
});
