import Ember from 'ember';

var DashboardController = Ember.ArrayController.extend({
  needs: ['application'],

  currentUser: Ember.computed.alias('controllers.application.currentUser'),

  postLength: 140,

  postKey: function(){
      this.set("postLength", 140 - this.get('name').length);
  }.observes('name')
});

export default DashboardController;
