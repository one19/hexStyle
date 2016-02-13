var backgroundDefault = {
  "defaultDelta": 1,

  "background": {
    "type": "flat",
    "trianglify": [],
    "gradient": [],
    "flat": [],
    "backgrounder": {}
  },
  "cascade": {
    "type": "square",
    "maxColorAngle": 360,
    "minColorAngle": 0,
    "width": 10,
    "height": 70,
    "angle": 15,
    "cycle": {
      "smooth": true,
      "pageWidth": 100,
    },
    "movement": ["linear", "unidirectional"],
    "colorMovement": [],
    "scaleMovement": [],
    "borderMovement": [],
    "shadowMovement": [],
    "opacity": [],
    "cascader": []
  },
  "hex": {
    "spacing": 10,
    "border": 0,
    "width": 10,
    "height": 10,
    "movement": ["linear", "random"],
    "biasMovement": [],
    "scaleMovement": [],
    "colorMovement": [],
    "colorBiasMovement": [],
    "scaleBiasMovement": ["linear", "random"],
    "opacity": [],
    "biasOpacity": [],
    "hexes": {
      "backHex": {
        "bhex": []
      },
      "foreHex": {
        "fhex": []
      }
    }
  }
}

var minToMax = function(min, max) {
  return Math.floor((Math.random() * (max - min + 1)) + min);
}

var returnToRange = function(max, val) {
  while (val > max) {
    val = val - max;
  }
  return val;
}

var smoothTransit = function(min, max, smooth, val) {
  if (smooth) {
    val = returnToRange(2 * max, val);
    if ((val - (2 * max)) > max) {
      val = max - (val - max);
    }
  } else {
    val = returnToRange(max, val);
  }
  return val;
}




var populateBackground = function(insideB) {
  var ret = '';
  if (insideB.type === "flat" ) {

  } else if (insideB.type = "gradient") {

  } else if (insideB.type === "trianglify") {

  }

  return ret;
}

var populateCascade = function(casc) {
  var that = JSON.parse(JSON.stringify(casc));
  var colorAngleDelta = (that.maxColorAngle - that.minColorAngle) / ((100 / that.width) * (100 / that.cycle.pageWidth));
  var cascStreak = that.cascader

  for ( var row = 0; row < 14; row += Math.round(that.height/10) ) {
    for ( var column = 0; column < 14; column += Math.round(that.width/10) ) {
      var currentAngle = 20; //cascStreak[]
      var bColor1 = [0, 0, 0];
      var bColor2 = [0, 0, 0];
      var bordColor = [0, 0, 0]
      that.cascader.push(
        {
          "name": '.c' + column + ' .cr' + row,
          "row": row,
          "column": column,
          "shake": {
            "streak": 0,
            "delta": 0,
            "angle": 0,
            "x": 0,
            "y": 0
          },
          "movement": {
            "streak": (that.movement.length > 0)? 120 : 0,
            "delta": that.defaultDelta,
            "angle": (that.movement.length > 0)? 45 : 0,
            "x": 0,
            "y": 0
          },
          "width": {
            "streak": (that.scaleMovement.length > 0)? 120 : 0,
            "delta": that.defaultDelta,
            "val": w * (100/that.width) 
          },
          "height": {
            "streak": (that.scaleMovement.length > 0)? 120 : 0,
            "delta": that.defaultDelta,
            "val": h * (100/that.height)
          },
          "angle": {
            "streak": (that.movement.length > 0)? 120 : 0,
            "delta": that.defaultDelta,
            "val": 60
          },
          "left": {
            "streak": (that.movement.length > 0)? 120 : 0,
            "delta": that.defaultDelta,
            "val": (w * (100/that.width)) * (column - 2)
          },
          "top": {
            "streak": (that.movement.length > 0)? 120: 0,
            "delta": that.defaultDelta,
            "val": (h * (100/that.height)) * (row - 2)
          },
          "background-color": {
            "red": {
              "streak": (that.colorMovement.length > 0)? 120: 0,
              "delta": that.defaultDelta,
              "val": bColor1[0]
            },
            "green": {
              "streak": (that.colorMovement.length > 0)? 120: 0,
              "delta": that.defaultDelta,
              "val": bColor1[1]
            },
            "blue": {
              "streak": (that.colorMovement.length > 0)? 120: 0,
              "delta": that.defaultDelta,
              "val": bColor1[2]
            }
          },
          "background-color-2": {
            "red": {
              "streak": (that.colorMovement.length > 0)? 120: 0,
              "delta": that.defaultDelta,
              "val": bColor2[0]
            },
            "green": {
              "streak": (that.colorMovement.length > 0)? 120: 0,
              "delta": that.defaultDelta,
              "val": bColor2[1]
            },
            "blue": {
              "streak": (that.colorMovement.length > 0)? 120: 0,
              "delta": that.defaultDelta,
              "val": bColor2[2]
            }
          },
          "border": {
            "red": {
              "streak": (that.borderMovement.length > 0)? 120: 0,
              "delta": that.defaultDelta,
              "val": bordColor[0]
            },
            "green": {
              "streak": (that.borderMovement.length > 0)? 120: 0,
              "delta": that.defaultDelta,
              "val": bordColor[1]
            },
            "blue": {
              "streak": (that.borderMovement.length > 0)? 120: 0,
              "delta": that.defaultDelta,
              "val": bordColor[2]
            },
            "width": {
              "streak": (that.borderMovement.length > 0)? 120: 0,
              "delta": that.defaultDelta,
              "val": 0
            }
          },
          "box-shadow": {
            "red": {
              "streak": (that.shadowMovement.length > 0)? 120: 0,
              "delta": that.defaultDelta,
              "val": bordColor[0]
            },
            "green": {
              "streak": (that.shadowMovement.length > 0)? 120: 0,
              "delta": that.defaultDelta,
              "val": bordColor[1]
            },
            "blue": {
              "streak": (that.shadowMovement.length > 0)? 120: 0,
              "delta": that.defaultDelta,
              "val": bordColor[2]
            },
            "width": {
              "streak": (that.shadowMovement.length > 0)? 120: 0,
              "delta": that.defaultDelta,
              "val": 0
            }
          },
          "opacity": {
            "streak": (that.opacity.length > 0)? 120: 0,
            "delta": defaultDelta,
            "val": 100
          }
        }
      );
    }
  }

  return that.cascader;
}

var populateHex = function(he) {
  var that = JSON.parse(JSON.stringify(background));

  return that;
}




var drawBackground = function(insideBack) {

}

var drawCascade = function(cascade) {

}

var drawHex = function(someHex) {

}




var drawPage = function(background) {
  var that =  JSON.parse(JSON.stringify(background));
  that.background.backgrounder = populateBackground(background.background);
  that.cascade.cascader = populateCascade(background.cascade);
  that.hex.hexes = populateHex(background.hex);

  drawBackground(that.background);
  drawCascade(that.cascade.cascader);
  //drawHex(that.backHex.bhex);
  //drawHex(that.foreHex.fhex);

  return that;
}

var backG = drawPage(backgroundDefault);


var testTinyColor = function() {
  for (i = 0; i <= 720; i++) {
    var a = tinycolor('f00').spin(i).toRgbString();
    var butter = $('<div class="'+ i +'"></div>');
    butter.css({
      height: '100px',
      width: '1px',
      backgroundColor: a,
      display: 'inline-block'
    });
    $('#background').append(butter)
  }
}