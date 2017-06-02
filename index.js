/* eslint-env node */
'use strict';

module.exports = {
  name: 'ember-odometer',

  included: function(app, parentAddon) {
    let target = (parentAddon || app);
    target.options = target.options || {};

    let bowerDirectory = target.bowerDirectory || target.parent.bowerDirectory;

    target.import({
      development: bowerDirectory + '/odometer/odometer.js',
      production: bowerDirectory + '/odometer/odometer.min.js'
    });

    let theme = 'default';

    if (target.options.odometer && target.options.odometer.theme) {
     theme = target.options.odometer.theme;
    }

    target.import(bowerDirectory + '/odometer/themes/odometer-theme-' + theme + '.css');

    return this._super.included.apply(this, arguments);
  }
};
