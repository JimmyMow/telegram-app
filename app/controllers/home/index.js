import Ember from 'ember';

export default Ember.Controller.extend({
  content: {},
  actions: {
    createUser: function() {
       var data = this.getProperties("name", "username", "email", "password");

       console.log(data);

      var user = this.store.createRecord('user', {
        id: data.username,
        name: data.name,
        email: data.email,
        picture: "https://lh6.googleusercontent.com/-hBbaFeCzpFs/AAAAAAAAAAI/AAAAAAAAANA/r02VbznNRIs/w48-c-h48/photo.jpg",
        password: data.password
      });

      user.save();
      console.log(user);
    }
  }
});


