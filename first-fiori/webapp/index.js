sap.ui.define([
    "sap/ui/core/mvc/XMLView"
], function (XMLView) {
  "use strict";

  XMLView.create({
            //name of the model.viewsDirectoryName.ViewName
    viewName:"sap.ui.demo.walkthrough.view.App"
  }).then(function (oView){
    //place it at the body with id="content"
    oView.placeAt("content");
  });
});
