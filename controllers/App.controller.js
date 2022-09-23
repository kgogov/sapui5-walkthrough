sap.ui.define([
  'sap/ui/core/mvc/Controller'
], function(Controller) {
  'use strict';

  return Controller.extend('sap.ui.demo.walkthrough.controllers.App', {
    onShowHello: function() {
      alert('Hello, SAPUI5!');
    }
  });
})
