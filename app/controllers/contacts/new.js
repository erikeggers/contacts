import Ember from 'ember';

export default Ember.Controller.extend({

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
      var _this = this;
      Ember.$.ajax({
        url: "https://api.parse.com/1/classes/contact",
        type: "POST",
        data: JSON.stringify(data)
      }).done(function() {
        _this.transitionToRoute('contacts');
      });
    },

    cancel: function() {
      this.transitionToRoute('contacts');
        return false;
      }
    }
});
