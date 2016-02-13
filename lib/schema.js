var h = window.innerHeight;
var w = window.innerWidth;
var maxX = w * 1.2;
var minX = w * -0.2;
var maxY = h * 1.2;
var minY = h * -0.2;
var colorBounds = [0, 255];
var defaultStreak = [0, 120];
var defaultDelta = [1, 5];
var defaultShake = {
  "streak": [0, 20],
  "delta": defaultDelta,
  "angle": [-5, 5],
  "x": [-5, 5],
  "y": [-5, 5]
}
var defaultMovement = {
  "streak": [0, 120],
  "delta": defaultDelta,
  "angle": [0, 360],
  "x": [minX, maxX],
  "y": [minY, maxY]
}
var defaultWidth = {
  "streak": defaultStreak,
  "delta": defaultDelta,
  "val": [0.1 * w, 1.4 * w]
}
var defaultHeight = {
  "streak": defaultStreak,
  "delta": defaultDelta,
  "val": [0.1 * h, 1.4 * h]
}
var defaultAngle = {
  "streak": defaultStreak,
  "delta": defaultDelta,
  "val": [-60, 60]
}
var defaultX = {
  "streak": defaultStreak,
  "delta": defaultDelta,
  "val": [minX, maxX]
}
var defaultY = {
  "streak": defaultStreak,
  "delta": defaultDelta,
  "val": [minY, maxY]
}
var defaultOpacity = {
  "streak": defaultStreak,
  "delta": defaultDelta,
  "val": [0, 100]
}
var defaultColor = {
  "red": {
    "streak": defaultStreak,
    "delta": defaultDelta,
    "val": colorBounds
  },
  "green": {
    "streak": defaultStreak,
    "delta": defaultDelta,
    "val": colorBounds
  },
  "blue": {
    "streak": defaultStreak,
    "delta": defaultDelta,
    "val": colorBounds
  },
  "angle": [0, 360]
}
var defaultBorder = JSON.parse(JSON.stringify(defaultColor))
defaultBorder.width = {
  "streak": defaultStreak,
  "delta": defaultDelta,
  "val": colorBounds
}

var schema = {
  "defaultDelta": defaultDelta,
  "#background": {
    "type": ["trianglify", "gradient", "flat"],
    "trianglify": [],
    "gradient": [],
    "flat": []
  },
  "cascade": {
    "type": ["square", "circle"],
    "maxColorAngle": [0, 360],
    "minColorAngle": [0, 360],
    "width": [10, 140],
    "height": [10, 140],
    "angle": [0, 360],
    "cycle": {
      "smooth": [true, false],
      "pageWidth": [0, 100],
    },
    "movement": [["linear", "spline", "circular"], ["random", "unidirectional", "wave"]],
    "colorMovement": [["linear", "random", "circular"], ["grey", "random", "unidirectional"]],
    "scaleMovement": [["linear", "spline", "circular"], ["random", "unidirectional", "wave"]],
    "borderMovement": [["linear", "spline", "circular"], ["random", "unidirectional", "wave"]],
    "shadowMovement": [["linear", "spline", "circular"], ["random", "unidirectional", "wave"]],
    "opacity": [["linear", "spline", "circular"], ["random", "unidirectional", "wave"]],
    "cascader": [
      {
        "name": ".c0 .cr0",
        "row": [0, 20],
        "column": [0, 20],
        "shake": defaultShake,
        "movement": defaultMovement,
        "width": defaultWidth,
        "height": defaultHeight,
        "angle": defaultAngle,
        "left": defaultX,
        "top": defaultY,
        "background-color": defaultColor,
        "background-color-2": defaultColor,
        "border": defaultBorder,
        "box-shadow": defaultBorder,
        "opacity": defaultOpacity
      }
    ]
  },
  "hex": {
    "spacing": [0, 200],
    "border": [0, 200],
    "width": [10, 140],
    "height": [10, 140],
    "movement": [["linear", "spline", "circular"], ["random", "unidirectional", "wave"]],
    "biasMovement": [["linear", "spline", "circular"], ["random", "unidirectional", "wave"]],
    "scaleMovement": [["linear", "spline", "circular"], ["random", "unidirectional", "wave"]],
    "colorMovement": [["linear", "random", "circular"], ["grey", "random", "unidirectional"]],
    "colorBiasMovement": [["linear", "random", "circular"], ["grey", "random", "unidirectional"]],
    "scaleBiasMovement": [["linear", "spline", "circular"], ["random", "unidirectional", "wave"]],
    "opacity": [["linear", "spline", "circular"], ["random", "unidirectional", "wave"]],
    "biasOpacity": [["linear", "spline", "circular"], ["random", "unidirectional", "wave"]],
    "backHex": {
      "bhex": [
        {
          "name": ".b0 .br0",
          "row": [0, 20],
          "column": [0, 20],
          "shake": defaultShake,
          "movement": defaultMovement,
          "width": defaultWidth,
          "height": defaultHeight,
          "angle": defaultAngle,
          "left": defaultX,
          "top": defaultY,
          "background-color": defaultColor,
          "background-color-2": defaultColor,
          "box-shadow": defaultBorder,
          "opacity": defaultOpacity
        }
      ]
    },
    "foreHex": {
      "fhex": [
        { 
          "name": ".f0 .fr0",
          "row": [0, 20],
          "column": [0, 20],
          "shake": defaultShake,
          "movement": defaultMovement,
          "biasMovement": defaultMovement,
          "scaleBiasMovement": defaultMovement,
          "width": defaultWidth,
          "height": defaultHeight,
          "angle": defaultAngle,
          "left": defaultX,
          "top": defaultY,
          "color": defaultColor,
          "background-color": defaultColor,
          "background-color-2": defaultColor,
          "box-shadow": defaultBorder,
          "opacity": defaultOpacity
        }
      ]
    }
  }
}