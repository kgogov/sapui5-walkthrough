sap.ui.define([], function () {
  'use strict';

  return {
    statusText: function (sStatus) {
      var resourceBundle = this.getView().getModel('i18n').getResourceBundle();

      if (sStatus == 'A') return resourceBundle.getText('invoiceStatusA');
      if (sStatus == 'B') return resourceBundle.getText('invoiceStatusB');
      if (sStatus == 'C') return resourceBundle.getText('invoiceStatusC');
      return sStatus;
    }
  }
})
