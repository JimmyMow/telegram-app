import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    createUser: function() {
      var self = this;
      var data = this.getProperties("name", "username", "email", "password");
      var user = this.store.createRecord('user', {
        id: data.username,
        name: data.name,
        email: data.email,
        picture: "https://lh6.googleusercontent.com/-hBbaFeCzpFs/AAAAAAAAAAI/AAAAAAAAANA/r02VbznNRIs/w48-c-h48/photo.jpg",
        password: Ember.$.md5(data.password)
      });

      user.save().then(function() {
        self.set('session.user', user);
        self.transitionToRoute('dashboard');
      });
    }
  }
});


