import DS from 'ember-data';

var User = DS.Model.extend({
  username: DS.attr("string"),
  email: DS.attr("string"),
  handle: DS.attr("string"),
  password: DS.attr("string"),
  posts: DS.hasMany("posts", {async: true})
});

User.reopenClass({
  FIXTURES: [
    {
      id: 1,
      username: "JimmyMow",
      email: "jimmymowschess@gmail.com",
      handle: "jackmallers",
      password: "12345678",
      posts: [1, 4]
    },
    {
      id: 2,
      username: "Fischer",
      email: "bobbyfischer@gmail.com",
      handle: "bobbyfischer",
      password: "12345678",
      posts: [2, 3]
    }
  ]
});

export default User;
