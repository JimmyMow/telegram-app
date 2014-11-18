// import Ember from 'ember';

// export default Ember.ObjectController.extend({
//   needs: ['application'],

//   currentUser: Ember.computed.alias('controllers.application.currentUser'),

//   belongsToCurrentUser: function() {
//     return this.get('user') === this.get('currentUser');
//   }.property('currentUser', 'model.user'),

//   actions: {
//     repost: function() {
//       var post = this.store.createRecord('post', {
//         body: this.get("body"),
//         createdAt: this.get("createdAt"),
//         repost: this.get("currentUser"),
//         user: this.get("user")
//       });

//       post.save();
//     }
//   },

//   delete: function() {
//     var post = this.get('model');
//     post.deleteRecord();
//     post.save();
//   }
// });
