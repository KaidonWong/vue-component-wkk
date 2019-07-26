import testVue from '../component/test-vue/test-vue.vue';
import Vue from 'vue';
import '../common/common.css';
import '../asset/iconfont/iconfont.css';
import store from '../store/store';
import  "../common/vue-mobile-event.js";
import {firstName} from "../common/la.js";

import dateFormatter from "../common/date-format.js";

var azz = firstName;

new Vue({
    el: '#root',
    store,
    components: {
        'test-vue': testVue,
    }
});
/////////////////////////

console.log("hello");
console.log(false == 0);

let a = "abcdefg";
console.log(a.charAt(0));
console.log(a.substring(0,3));
console.log(a.slice(0,3));

let b = "is a is a is";
let reg = /is/g;
let ret = b.match(/is/);

let w = reg.exec("is a is a");


var testString = "There are 39 cats but 40 dogs.";

// Only change code below this line.

var expression = /\d+/g;// Change this line

// Only change code above this line

// This code counts the matches of expression in testString
var digitCount = testString.match(expression);

function base(a,b) {
    this.a = a;
    this.b = b;
}
function extend() {
    this.c = 3;
}
base.prototype.e = 4;
extend.prototype = new base();
let adfs = new extend();

for(let x in adfs) {
    x = 0;
}

function ClassA(sColor) {
    this.color = sColor;
}

ClassA.prototype.sayColor = function () {
    alert(this.color);
};

function ClassB(sColor, sName) {
    
ClassA.call(this, sColor);

    this.name = sName;
}

ClassB.prototype = new ClassA();


ClassB.prototype.sayName = function () {
    alert(this.name);
};

var objA = new ClassA("blue");
var objB = new ClassB("red", "John");

for(let x in objB) {
    x = 0;
}
var objC = new ClassB("zz","zzzz");
objB.__proto__.color = "ddd";

function lala() {
    let a = 0;
}

let aa = typeof lala;
objA.sayColor();	//输出 "blue"
// objB.sayColor();	//输出 "red"
// objB.sayName();	//输出 "john"