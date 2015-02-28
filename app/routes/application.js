import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    save: function() {
      console.log('You clicked save / application route');

      return true;
    },

    cancel: function(){
      console.log('You clicked cancel / application route');

      return true;
    }
  }
});
