/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

$(document).ready(function () {

  var LAND = "land";
  var BRICK = "brick";
  var BLOCK = "block";
  var WATER = "water";
  var GREEN = "green";
  var EAGLE = "eagle";

  var game = document.querySelector(".game");

  var map = [[LAND, LAND, LAND, LAND, LAND, LAND, LAND, LAND, LAND, LAND, LAND, LAND, LAND], [LAND, BRICK, BRICK, BRICK, BRICK, BRICK, LAND, BRICK, BRICK, BRICK, BRICK, BRICK, LAND], [LAND, LAND, LAND, LAND, LAND, LAND, LAND, LAND, LAND, LAND, LAND, LAND, LAND], [LAND, BRICK, BRICK, BRICK, BRICK, BRICK, LAND, BRICK, BRICK, BRICK, BRICK, BRICK, LAND], [LAND, LAND, LAND, LAND, LAND, LAND, LAND, LAND, LAND, LAND, LAND, LAND, LAND], [LAND, BRICK, BRICK, BRICK, BRICK, BRICK, LAND, BRICK, BRICK, BRICK, LAND, BRICK, BRICK], [LAND, LAND, LAND, LAND, LAND, BLOCK, LAND, BLOCK, LAND, LAND, LAND, BRICK, EAGLE], [LAND, BRICK, BRICK, BRICK, BRICK, BRICK, LAND, BRICK, BRICK, BRICK, LAND, BRICK, BRICK], [LAND, LAND, LAND, LAND, LAND, LAND, LAND, LAND, LAND, LAND, LAND, LAND, LAND], [LAND, BRICK, BRICK, BRICK, BRICK, BRICK, LAND, BRICK, BRICK, BRICK, BRICK, BRICK, LAND], [LAND, LAND, LAND, LAND, LAND, LAND, LAND, LAND, LAND, LAND, LAND, LAND, LAND], [LAND, BRICK, BRICK, BRICK, BRICK, BRICK, LAND, BRICK, BRICK, BRICK, BRICK, BRICK, LAND], [LAND, LAND, LAND, LAND, LAND, LAND, LAND, LAND, LAND, LAND, LAND, LAND, LAND]];

  function showMap() {
    var position = 0;
    for (var i = 0; i < 13; i++) {
      for (var j = 0; j < 13; j++) {
        position = i + "," + j;
        var div = document.createElement("div");
        div.id = position;
        game.appendChild(div);
      }
    }
  }
  showMap();

  var Block = function Block(x, y) {
    _classCallCheck(this, Block);

    _initialiseProps.call(this);

    this.x = x;
    this.y = y;
    this.width = 50;
    this.height = 50;
    this.id = 0;
  };

  var _initialiseProps = function _initialiseProps() {
    this.createBlock = function () {};

    this.delBlock = function () {
      var div = document.getElementById(x + "," + y);
      div.removeChild(div.childNodes[0]);
      landMap[x][y] = LAND;
    };
  };

  var Brick = function (_Block) {
    _inherits(Brick, _Block);

    function Brick(x, y) {
      _classCallCheck(this, Brick);

      var _this = _possibleConstructorReturn(this, (Brick.__proto__ || Object.getPrototypeOf(Brick)).call(this, x, y));

      _this.createBlock = function () {
        var brick = document.createElement('div');
        brick.className = "brick";
        brick.style.position = "absolute";
        brick.style.width = _this.width + "px";
        brick.style.height = _this.height + "px";
        brick.style.left = _this.x * _this.width + "px";
        brick.style.top = _this.y * _this.height + "px";

        document.getElementById(_this.x + "," + _this.y).appendChild(brick);
      };

      _this.hp = 1;
      return _this;
    }

    return Brick;
  }(Block);

  var Land = function (_Block2) {
    _inherits(Land, _Block2);

    function Land(x, y) {
      _classCallCheck(this, Land);

      var _this2 = _possibleConstructorReturn(this, (Land.__proto__ || Object.getPrototypeOf(Land)).call(this, x, y));

      _this2.createBlock = function () {
        var land = document.createElement('div');
        land.className = "land";
        land.style.position = "absolute";
        land.style.width = _this2.width + "px";
        land.style.height = _this2.height + "px";
        land.style.left = _this2.x * _this2.width + "px";
        land.style.top = _this2.y * _this2.height + "px";
        document.getElementById(_this2.x + "," + _this2.y).appendChild(land);
      };

      return _this2;
    }

    return Land;
  }(Block);

  var Eagle = function (_Block3) {
    _inherits(Eagle, _Block3);

    function Eagle(x, y) {
      _classCallCheck(this, Eagle);

      var _this3 = _possibleConstructorReturn(this, (Eagle.__proto__ || Object.getPrototypeOf(Eagle)).call(this, x, y));

      _this3.createBlock = function () {
        var eagle = document.createElement('div');
        eagle.className = "eagle";
        eagle.style.position = "absolute";
        eagle.style.width = _this3.width + "px";
        eagle.style.height = _this3.height + "px";
        eagle.style.left = _this3.x * _this3.width + "px";
        eagle.style.top = _this3.y * _this3.height + "px";
        document.getElementById(_this3.x + "," + _this3.y).appendChild(eagle);
      };

      _this3.hp = 1;
      return _this3;
    }

    return Eagle;
  }(Block);

  var HardBlock = function (_Block4) {
    _inherits(HardBlock, _Block4);

    function HardBlock(x, y) {
      _classCallCheck(this, HardBlock);

      var _this4 = _possibleConstructorReturn(this, (HardBlock.__proto__ || Object.getPrototypeOf(HardBlock)).call(this, x, y));

      _this4.createBlock = function () {
        var harblock = document.createElement('div');
        harblock.className = "block";
        harblock.style.position = "absolute";
        harblock.style.width = _this4.width + "px";
        harblock.style.height = _this4.height + "px";
        harblock.style.left = _this4.x * _this4.width + "px";
        harblock.style.top = _this4.y * _this4.height + "px";
        document.getElementById(_this4.x + "," + _this4.y).appendChild(harblock);
      };

      _this4.hp = 100;
      return _this4;
    }

    return HardBlock;
  }(Block);

  var Player = function (_Block5) {
    _inherits(Player, _Block5);

    function Player() {
      _classCallCheck(this, Player);

      var _this5 = _possibleConstructorReturn(this, (Player.__proto__ || Object.getPrototypeOf(Player)).call(this));

      _this5.createPlayer = function () {
        var player = document.createElement('div');
        player.className = "myTank";
        player.style.position = "absolute";
        player.style.width = _this5.width + "px";
        player.style.height = _this5.height + "px";
        player.style.left = 200 + "px";
        player.style.top = 600 + "px";
        player.style.zIndex = 1;
        document.getElementById("player").appendChild(player);
      };

      _this5.checkCollision = function (x, y) {
        var blockType = document.getElementById(x + "," + y).children[0].className;
        if (blockType == "brick" || blockType == "block" || blockType == "water") {
          return false;
        } else {
          return true;
        }
      };

      _this5.fireCheckCollision = function (x, y) {
        var blockType = document.getElementById(x + "," + y).children[0].className;
        if (blockType == "brick" || blockType == "block") {
          return true;
        } else {
          return false;
        }
      };

      _this5.moveUp = function () {
        _this5.direction = "up";
        var show = document.getElementById(_this5.x + "," + (_this5.y - 1));
        if (_this5.checkCollision(_this5.x, _this5.y - 1) && _this5.y > 0) {
          var up = document.getElementById("player").children[0];
          up.style.top = _this5.positionY - 50 + "px";
          _this5.positionY -= 50;
          _this5.y -= 1;
        }
      };

      _this5.moveDown = function () {
        _this5.direction = "down";
        var show = document.getElementById(_this5.x + "," + (_this5.y + 1));
        if (_this5.checkCollision(_this5.x, _this5.y + 1) && _this5.y < 12) {
          var down = document.getElementById("player").children[0];
          down.style.top = _this5.positionY + 50 + "px";
          _this5.positionY += 50;
          _this5.y += 1;
        }
      };

      _this5.moveLeft = function () {
        _this5.direction = "left";
        var show = document.getElementById(_this5.x - 1 + "," + _this5.y);
        if (_this5.checkCollision(_this5.x - 1, _this5.y) && _this5.x > 0) {
          var left = document.getElementById("player").children[0];
          left.style.left = _this5.positionX - 50 + "px";
          _this5.positionX -= 50;
          _this5.x -= 1;
        }
      };

      _this5.moveRight = function () {
        _this5.direction = "right";
        var show = document.getElementById(_this5.x + 1 + "," + _this5.y);
        if (_this5.checkCollision(_this5.x + 1, _this5.y) && _this5.x < 12) {
          var right = document.getElementById("player").children[0];
          right.style.left = _this5.positionX + 50 + "px";
          _this5.positionX += 50;
          _this5.x += 1;
        }
      };

      _this5.moveTank = function (event) {
        switch (event.which) {
          case 37:
            _this5.moveLeft();
            break;
          case 38:
            _this5.moveUp();
            break;
          case 39:
            _this5.moveRight();
            break;
          case 40:
            _this5.moveDown();
            break;
          case 65:
            _this5.fireTank();
            break;
        }
      };

      _this5.fireTank = function () {
        if (_this5.direction == "up") {
          var dir = String(_this5.x + "," + (_this5.y - 1));
          var fire = document.getElementById(dir);
          if (_this5.fireCheckCollision(_this5.x, _this5.y - 1)) {
            fire.children[0].className = "land";
          }
        } else if (_this5.direction == "down") {
          var _dir = String(_this5.x + "," + (_this5.y + 1));
          var fire = document.getElementById(_dir);
          if (_this5.fireCheckCollision(_this5.x, _this5.y + 1)) {
            fire.children[0].className = "land";
          }
        } else if (_this5.direction == "left") {
          var _dir2 = String(_this5.x - 1 + "," + _this5.y);
          var fire = document.getElementById(_dir2);
          if (_this5.fireCheckCollision(_this5.x - 1, _this5.y)) {
            fire.children[0].className = "land";
          }
        } else if (_this5.direction == "right") {
          var _dir3 = String(_this5.x + 1 + "," + _this5.y);
          var fire = document.getElementById(_dir3);
          if (_this5.fireCheckCollision(_this5.x + 1, _this5.y)) {
            fire.children[0].className = "land";
          }
        }
      };

      _this5.x = 4;
      _this5.y = 12;
      _this5.positionX = 200;
      _this5.positionY = 600;
      _this5.direction = "up";
      _this5.dmg = 1;
      return _this5;
    }
    /////////////////////////

    //////////

    ////////

    ////////

    ///////

    ///////


    return Player;
  }(Block);

  function loadMap() {
    var block;
    for (var i = 0; i < 13; i++) {
      for (var j = 0; j < 13; j++) {
        var blocktype = map[i][j];
        switch (blocktype) {
          case LAND:
            block = new Land(i, j);
            block.createBlock();
            break;
          case BRICK:
            block = new Brick(i, j);
            block.createBlock();
            break;
          case EAGLE:
            block = new Eagle(i, j);
            block.createBlock();
            break;
          case BLOCK:
            block = new HardBlock(i, j);
            block.createBlock();
            break;
          default:
            break;
        }
      }
    }
  }

  loadMap();

  var myTank = new Player();
  myTank.createPlayer();

  $(document).on("keydown", function (event) {
    myTank.moveTank(event);
  });
});

/***/ })
/******/ ]);