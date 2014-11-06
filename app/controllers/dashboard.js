import Ember from 'ember';

var DashboardController = Ember.ArrayController.extend({
    postLength: 140,

    postKey: function(){
        this.set("postLength", 140 - this.get('name').length);
    }.observes('name'),
});

export default DashboardController;
