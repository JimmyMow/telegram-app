import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['application'],

  currentUser: Ember.computed.alias('controllers.application.currentUser'),

  content: {},

  actions: {
    createUser: function() {
       var self = this;
       var data = this.getProperties("name", "username", "email", "password");

      var user = this.store.createRecord('user', {
        id: data.username,
        name: data.name,
        email: data.email,
        picture: "https://lh6.googleusercontent.com/-hBbaFeCzpFs/AAAAAAAAAAI/AAAAAAAAANA/r02VbznNRIs/w48-c-h48/photo.jpg",
        password: data.password
      });

      user.save().then(function() {
        self.set("currentUser", self.store.find("user", user.id));
        self.transitionToRoute('dashboard');
      });

    }
  }
});


