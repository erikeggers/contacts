import Ember from 'ember';

export default Ember.Route.extend({
  // model: function() {
  //   return this.store.find('contact');
  // },
  model: function () {
    return Ember.$.ajax('https://api.parse.com/1/classes/contact').then(function(response) {
      console.log(response.results);
      return response.results;
    });
  },

  actions: {
    save: function(){
      console.log('You clicked save / friends route');

      return false;
    },

    cancel: function() {
      console.log('You clicked cancel / friends route');

      return true;
    }
  }
});
