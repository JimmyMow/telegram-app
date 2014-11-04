import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route("home", { path: "/" });
  this.route("login");
  this.route("newpassword", { path: "/new_password" });

  this.resource("user", { path: "/:user_id"}, function(){
    this.route("followers");
    this.route("following");
    this.route("post", { path: "/:post_id" });
  });
});

export default Router;
