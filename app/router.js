import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource("home", { path: "/" }, function() {
    this.route('signup', {path: '/'});
    this.route("login");
    this.route("newpassword", { path: "/new_password" });

  });

  this.resource("user", { path: "/:user_id"}, function(){
    this.route("followers");
    this.route("following");


    this.route("post", { path: "/:post_id" });
  });

  this.route("dashboard");
});

export default Router;
