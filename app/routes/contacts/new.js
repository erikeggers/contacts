import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return this.store.createRecord('contact');
  },

  actions: {
    save: function(){
      console.log('You clicked save / new route');

      return true;
    },

    cancel: function() {
      console.log('You clicked cancel / new route');

      return true;
    }
  }

});
