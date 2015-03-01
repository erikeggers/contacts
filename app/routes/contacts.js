import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return Ember.$.ajax('https://api.parse.com/1/classes/contact').then(function(response) {
      return response.results;
    });
  },

  // setupController: function(controller, model) {
  //   this._super(controller, model);
  //   return Ember.$.ajax('https://api.parse.com/1/classes/contact').then(function(response){
  //     controller.set('model', response);
  //   });
  // }

});
