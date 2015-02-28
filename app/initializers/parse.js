import Ember from 'ember';

export function initialize(/* container, application */) {
  Ember.$.ajaxSetup({
    headers: {
      "X-Parse-Application-Id": "hPbcSvEj9kNjuxLL9anJ9hubGgePvDTn22dZMCLq",
      "X-Parse-REST-API-Key": "dd4bJIBQc0QFSybv34VXfxILgB5DcWjR4Xr8NwMR"
    }
  });
}

export default {
  name: 'parse',
  initialize: initialize
};
