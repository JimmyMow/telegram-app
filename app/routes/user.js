import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.find("user", params.user_id).then(function(response) {
      if(response._data.followedByCurrentUser) {
        response.set('followedByCurrentUser', response._data.followedByCurrentUser);
      }
      return response;
    }, function() {
      alert('broken!');
    });
  }
});
