"use strict";
define(['require', 'scene'],
  function(require, Scene) {

    class TOMBuildingStatus extends Scene {
      constructor() {
          console.log("Going to Super Scene TOMBuildingStatus");
          var config = {
            "id": "TOMBuildingStatus",
            "groupid": "architecture",
            "languages": ['en-US', 'nl-NL'],
          };
          super(config);
        }
        // You must copy this, else we do not know where we are
      get path() {
        return require.toUrl("./").split('?')[0];
      }
    };

    return new TOMBuildingStatus();

  });
