import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    save: function(){
      var data = {
        "firstName": this.get('model.firstName'),
        "lastName": this.get("model.lastName"),
        "phoneNumber": this.get("model.phoneNumber"),
        "email": this.get("model.email"),
        "twitter": this.get("model.twitter")
      };
      console.log(data);
      var _this = this;
      Ember.$.ajax({
        url: "https://api.parse.com/1/classes/contact",
        type: "POST",
        // data: JSON.stringify(data)
      })
      .done(function() {
        _this.transitionToRoute('contacts');
      });
    },

    cancel: function() {
      this.transitionToRoute('contacts');
        return false;
      }
    }
});
