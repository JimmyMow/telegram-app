import DS from 'ember-data';

var Post = DS.Model.extend({
  body: DS.attr("string"),
  createdAt: DS.attr("date"),
  creator: DS.belongsTo("user", {async: true}),
  originalCreator: DS.belongsTo("user", {async: true}),
});

export default Post;
