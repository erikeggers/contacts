import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return Ember.$.ajax('https://api.parse.com/1/classes/contact/'+params.objectId);
  }
});
