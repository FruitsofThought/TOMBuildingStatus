"use strict";
define(['require', 'scene'],
  function(require, Scene) {

    class TOMArchitecturalStyles extends Scene {
      constructor() {
          console.log("Going to Super Scene TOMArchitecturalStyles");
          var config = {
            "id": "TOMArchitecturalStyles",
            "groupid": "architecture",
            "languages": ['en-US', 'nl-NL'],
          };
          super(config);
        }
        // You must copy this, else we do not know where we are
      get path() {
        return require.toUrl("./").split('?')[0];
      }
      get notthelegend() {
        var legend = [];
        legend['items'] = [];
        legend['items'].push({
          title: 'home.scenes.TOMArchitecturalStyles.stone_town.title',
          description: 'home.scenes.TOMArchitecturalStyles.stone_town.description',
          css: "background-color: rgb(0.843, 0.098, 0.110);",
          color: "rgb(215,25,28,255)",
          minzoom: 14,
          maxzoom: 22,
        });
        return legend;
      }
    };

    /*
    stone_town:
      color: [0.843, 0.098, 0.110]
    first_swahili:
      color: [0.906, 0.357, 0.227]
    classic_swahili:
      color: [0.973, 0.616, 0.349]
    omani:
      color: [0.992, 0.788, 0.502]

    indian:
      color: [0.996, 0.929, 0.667]
    art_deco:
      color: [0.925, 0.969, 0.725]
    british_colonial:
      color: [0.780, 0.910, 0.678]
    eclectic:
      color: [0.612, 0.827, 0.651]
    modernism:
      color: [0.388, 0.671, 0.690]
    hyper_modern:
      color: [0.169, 0.514, 0.729]
    fromhereonitsNLhyper_modern:
      color: [0.169, 0.514, 0.729]
    art_nouveau:
      color: [0.169, 0.514, 0.729]
    modern:
      color: [0.169, 0.514, 0.729]
    rijnllandse_gothic:
      color: [0.169, 0.514, 0.729]
    hyper_modern:
      color: [0.169, 0.514, 0.729]
    */

    return new TOMArchitecturalStyles();

  });
