import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('contacts', function() {
    this.route('new');

    this.route('show', {
      path: '/show/:objectId'
    });
  });
});

export default Router;
