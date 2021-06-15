'use strict';

module.exports = {
  name: require('./package').name,

  included: function (app) {
    this._super.included(app);
    app.import(
      'https://static.healthcarelocator.com/v1/hcl-sdk-web-ui/hcl-sdk.js'
    );
    app.import(
      'https://static.healthcarelocator.com/v1/hcl-sdk-api/hcl-sdk-api.js'
    );
  },
};
