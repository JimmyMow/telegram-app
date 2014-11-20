import DS from 'ember-data';

var Post = DS.Model.extend({
  body: DS.attr("string"),
  createdAt: DS.attr("date"),
  user: DS.belongsTo("user", {async: true}),
  repost: DS.belongsTo("user", {async: true})
});

Post.reopenClass({
  FIXTURES: [
    {
      id: 1,
      body: "Bobby Fischer is the greatest chess player of all time",
      createdAt: new Date(),
      user: "JimmyMow",
      repost: "Fischer"
    },
    {
      id: 2,
      body: "I am the greatest player of all time",
      createdAt: new Date(),
      user: "Fischer",
      repost: null
    },
    {
      id: 3,
      body: "I'm the champ #FuckBorris",
      createdAt: new Date(),
      user: "Fischer",
      repost: null
    },
    {
      id: 4,
      body: "Let's hoop",
      createdAt: new Date(),
      user: "JimmyMow",
      repost: null
    }
  ]
});

export default Post;
