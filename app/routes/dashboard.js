import Ember from 'ember';

export default Ember.Route.extend({
  // needs: ['controllers/application'],

  // currentUser: Ember.computed.alias('controllers.application.currentUser'),

  // beforeModel: function() {

  // },

  model: function() {
    return this.store.find("post");
  }
});
