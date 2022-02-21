(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const burger = require('./modules/burger');
const slider = require('./modules/slider');
const gallery = require('./modules/gallery');

burger();
slider();
gallery();
},{"./modules/burger":2,"./modules/gallery":3,"./modules/slider":4}],2:[function(require,module,exports){
const burgerModule = () => {
	const burger = 'My burger';
	console.log(burger);
};

module.exports = burgerModule;
},{}],3:[function(require,module,exports){
const galleryModule = () => {
	const gallery = 'My gallery';
	console.log(gallery);
};

module.exports = galleryModule;
},{}],4:[function(require,module,exports){
const sliderModule = () => {
	const slider = 'My slider';
	console.log(slider);
};

module.exports = sliderModule;
},{}]},{},[1]);
