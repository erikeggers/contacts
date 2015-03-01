import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    delete: function(){
      var model = this.get('model');
      var _this = this;
      Ember.$.ajax({
        url: "https://api.parse.com/1/classes/contact/" + model.objectId,
        type: "DELETE",
      }).done(function(){
        _this.transitionToRoute('contacts');
      });
    }
  }

});
