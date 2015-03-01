import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save: function(){
      var model = this.get('model');
      console.log(model);
      var _this = this;
      Ember.$.ajax({
        url: "https://api.parse.com/1/classes/contact/" + model.objectId,
        type: "PUT",
        data: JSON.stringify(model)
      }).done(function(){
        _this.transitionToRoute('contacts');
      });
    },
    cancel: function() {
      this.transitionToRoute('contacts');
        return false;
      }
    }
});
