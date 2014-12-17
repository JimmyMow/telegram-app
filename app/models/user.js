import DS from 'ember-data';

var User = DS.Model.extend({
  name: DS.attr("string"),
  email: DS.attr("string"),
  picture: DS.attr("string"),
  password: DS.attr("string"),
  followedByCurrentUser: DS.attr("boolean", {defaultValue: false})
});

export default User;
