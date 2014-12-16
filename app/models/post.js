import DS from 'ember-data';

var Post = DS.Model.extend({
  body: DS.attr("string"),
  createdAt: DS.attr("date"),
  user: DS.belongsTo("user", {async: true}),
  repost: DS.belongsTo("user", {async: true})
});

export default Post;
