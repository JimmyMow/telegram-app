import DS from 'ember-data';

var User = DS.Model.extend({
  name: DS.attr("string"),
  email: DS.attr("string"),
  picture: DS.attr("string"),
  password: DS.attr("string")
});

User.reopenClass({
  FIXTURES: [
    {
      id: "JimmyMow",
      name: "Jack Mallers",
      email: "jimmymowschess@gmail.com",
      picture: "https://lh6.googleusercontent.com/-hBbaFeCzpFs/AAAAAAAAAAI/AAAAAAAAANA/r02VbznNRIs/w48-c-h48/photo.jpg",
      password: "12345678"
    },
    {
      id: "Fischer",
      name: "Bobby Fischer",
      email: "bobbyfischer@gmail.com",
      picture: "https://pbs.twimg.com/profile_images/1264692865/bobby_fischer_01_normal.jpg",
      password: "12345678"
    }
  ]
});

export default User;
