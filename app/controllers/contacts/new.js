import Ember from 'ember';

export default Ember.Controller.extend({

  isValid: Ember.computed(
    'model.firstName',
    'model.lastName',
    'model.phoneNumber',
    'model.email',
    'model.twitter',

    function() {
      return !Ember.isEmpty(this.get('model.firstName')) &&
      !Ember.isEmpty(this.get('model.lastName')) &&
      !Ember.isEmpty(this.get('model.phoneNumber')) &&
      !Ember.isEmpty(this.get('model.email')) &&
      !Ember.isEmpty(this.get('model.twitter'));
    }

  ),

  actions: {
    save: function(){
      if (this.get('isValid')) {
        var self = this;
        this.get('model').save().then(function(contact) {
          self.transitionToRoute('contacts.show', contact);
        });
      } else {
        this.set('errorMessage', 'Please fill everything out!');
      }
      return false;
    },

    cancel: function() {
      this.transitionToRoute('contacts');

      return true;
    }
  }
});
