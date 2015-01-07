import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    reset_password: function() {
      var user = this.store.createRecord('user', {
        email: this.get('emailField'),
        operation: 'reset_password'
      });

      var self = this;
      user.save().then(function(success) {
        if( success ) {
          self.set('emailField', '');
        }
      }, function(error) {
        alert("Error! " + error);
      });
    }
  }
});
