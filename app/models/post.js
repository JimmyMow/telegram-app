import DS from 'ember-data';

var Post = DS.Model.extend({
  body: DS.attr("string"),
  createdAt: DS.attr("date"),
  user: DS.belongsTo("user", {async: true})
});

Post.reopenClass({
  FIXTURES: [
    {
      id: 1,
      body: "Bobby Fischer is the greatest chess player of all time",
      createdAt: new Date(),
      user: 1
    },
    {
      id: 2,
      body: "I am the greatest player of all time",
      createdAt: new Date(),
      user: 2
    },
    {
      id: 3,
      body: "I'm the champ #FuckBorris",
      createdAt: new Date(),
      user: 2
    },
    {
      id: 4,
      body: "Let's hoop",
      createdAt: new Date(),
      user: 1
    }
  ]
});

export default Post;
