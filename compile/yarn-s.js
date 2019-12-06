#!/usr/bin/env node
'use strict';
const child_process = require('child_process');
const stream = require('stream');
const os = require('os');             /*
 diff package https://github.com/kpdecker/jsdiff
 BSD License
 Copyright (c) 2009-2015, Kevin Decker <kpdecker@gmail.com>
*/
const m={black:30,red:31,green:32,yellow:33,blue:34,magenta:35,cyan:36,white:37,grey:90};function n(a,b){return(b=m[b])?`\x1b[${b}m${a}\x1b[0m`:a};const {spawn:p}=child_process;const {Writable:q}=stream;const r=(a,b=0,e=!1)=>{if(0===b&&!e)return a;a=a.split("\n",e?b+1:void 0);return e?a[a.length-1]:a.slice(b).join("\n")},t=(a,b=!1)=>r(a,2+(b?1:0)),u=a=>{({callee:{caller:a}}=a);return a};const {homedir:v}=os;const w=/\s+at.*(?:\(|\s)(.*)\)?/,x=/^(?:(?:(?:node|(?:internal\/[\w/]*|.*node_modules\/(?:IGNORED_MODULES)\/.*)?\w+)\.js:\d+:\d+)|native)/,y=v(),z=a=>{const {pretty:b=!1,ignoredModules:e=["pirates"]}={},d=new RegExp(x.source.replace("IGNORED_MODULES",e.join("|")));return a.replace(/\\/g,"/").split("\n").filter(c=>{c=c.match(w);if(null===c||!c[1])return!0;c=c[1];return c.includes(".app/Contents/Resources/electron.asar")||c.includes(".app/Contents/Resources/default_app.asar")?!1:!d.test(c)}).filter(c=>
c.trim()).map(c=>b?c.replace(w,(g,h)=>g.replace(h,h.replace(y,"~"))):c).join("\n")};function A(a,b,e=!1){return function(d){var c=u(arguments),{stack:g}=Error();const h=r(g,2,!0),k=(g=d instanceof Error)?d.message:d;c=[`Error: ${k}`,...null!==c&&a===c||e?[b]:[h,b]].join("\n");c=z(c);return Object.assign(g?d:Error(),{message:k,stack:c})}};function B(a){var {stack:b}=Error();const e=u(arguments);b=t(b,a);return A(e,b,a)};const C=(a,b)=>{b.once("error",e=>{a.emit("error",e)});return b};class D extends q{constructor(a){const {binary:b=!1,rs:e=null,...d}=a||{},{c=B(!0),proxyError:g}=a||{},h=(k,l)=>c(l);super(d);this.a=[];this.b=new Promise((k,l)=>{this.on("finish",()=>{let f;b?f=Buffer.concat(this.a):f=this.a.join("");k(f);this.a=[]});this.once("error",f=>{if(-1==f.stack.indexOf("\n"))h`${f}`;else{const F=z(f.stack);f.stack=F;g&&h`${f}`}l(f)});e&&C(this,e).pipe(this)})}_write(a,b,e){this.a.push(a);e()}get promise(){return this.b}}
const E=async a=>{({promise:a}=new D({rs:a,c:B(!0)}));return await a};const G=async a=>{const [b,e,d]=await Promise.all([new Promise((c,g)=>{a.on("error",g).on("exit",h=>{c(h)})}),a.stdout?E(a.stdout):void 0,a.stderr?E(a.stderr):void 0]);return{code:b,stdout:e,stderr:d}};module.exports={_yarnS:async function(a){if(!a)throw Error("Config is expected");({scripts:a=[]}=a);return await a.reduce(async(b,e)=>{b=await b;var d=p("yarn",[e],{stdio:"inherit"});var c=G(d);d.promise=c;d.spawnCommand=d.spawnargs.join(" ");({promise:c}=d);d={f:d,promise:c};({promise:d}=d);c=await d;({code:d}=c);if(d)throw b=Error(`Command "${n(e,"yellow")}" existed with code ${n(d,"red")}`),b.code=d,b;return[...b,c]},[])}};

//# sourceMappingURL=yarn-s.js.map