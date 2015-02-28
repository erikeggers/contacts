import Ember from 'ember';

export default Ember.Route.extend({
  // model: function(){
  //   return this.store.createRecord('contact');
  // },

  actions: {
    save: function(){
      var data = {
        "firstName": this.get('firstName'),
        "lastName": this.get("lastName"),
        "phoneNumber": this.get("phoneNumber"),
        "email": this.get("email"),
        "twitter": this.get("twitter")
      };
      console.log(data);
    },

    cancel: function() {
      console.log('You clicked cancel / new route');

      return true;
    }
  }

});
