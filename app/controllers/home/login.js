import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['application'],

  currentUser: Ember.computed.alias('controllers.application.currentUser'),

  actions: {
    login: function() {
      var self = this;
      var data = this.getProperties("username", "password");

      this.store.find("user", data.username).then(function(record) {

        if( data.password === record.get("password") ) {
          self.set("currentUser", record);
          self.transitionToRoute('dashboard');
        } else {
          alert("username or password was wrong");
        }

      });

    }
  }
});
