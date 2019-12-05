#!/usr/bin/env node
'use strict';
const fs = require('fs');             const r=(a,b,c,d=!1,e=!1)=>{const h=c?new RegExp(`^-(${c}|-${b})`):new RegExp(`^--${b}`);b=a.findIndex(k=>h.test(k));if(-1==b)return{argv:a};if(d)return{value:!0,argv:[...a.slice(0,b),...a.slice(b+1)]};d=b+1;c=a[d];if(!c||"string"==typeof c&&c.startsWith("--"))return{argv:a};e&&(c=parseInt(c,10));return{value:c,argv:[...a.slice(0,b),...a.slice(d+1)]}},u=a=>{const b=[];for(let c=0;c<a.length;c++){const d=a[c];if(d.startsWith("-"))break;b.push(d)}return b},w=()=>{var a=v;return Object.keys(a).reduce((b,
c)=>{const d=a[c];if("string"==typeof d)return b[`-${d}`]="",b;c=d.command?c:`--${c}`;d.short&&(c=`${c}, -${d.short}`);let e=d.description;d.default&&(e=`${e}\nDefault: ${d.default}.`);b[c]=e;return b},{})};const v={input:{description:"The path to the input file.",command:!0},output:{description:"Where to save the output. By default prints to stdout.",default:"-",short:"o"},init:{description:"Initialise in the current folder.",boolean:!0,short:"i"},help:{description:"Print the help information and exit.",boolean:!0,short:"h"},version:{description:"Show the version's number and exit.",boolean:!0,short:"v"}},x=function(a={},b=process.argv){[,,...b]=b;const c=u(b);b=b.slice(c.length);let d=!c.length;return Object.keys(a).reduce(({a:e,
...h},k)=>{if(0==e.length&&d)return{a:e,...h};const p=a[k];let m;if("string"==typeof p)({value:m,argv:e}=r(e,k,p));else try{const {short:f,boolean:g,number:l,command:n,multiple:q}=p;n&&q&&c.length?(m=c,d=!0):n&&c.length?(m=c[0],d=!0):{value:m,argv:e}=r(e,k,f,g,l)}catch(f){return{a:e,...h}}return void 0===m?{a:e,...h}:{a:e,...h,[k]:m}},{a:b})}(v),y=x.input,z=x.output||"-",A=x.init,B=x.version;function C(){var a={description:"{{ description }}",example:"mnp example.txt -o out.txt",line:"mnp input [-o output] [-ihv]",usage:w()};const {usage:b={},description:c,line:d,example:e}=a;a=Object.keys(b);const h=Object.values(b),[k]=a.reduce(([f=0,g=0],l)=>{const n=b[l].split("\n").reduce((q,t)=>t.length>q?t.length:q,0);n>g&&(g=n);l.length>f&&(f=l.length);return[f,g]},[]),p=(f,g)=>{g=" ".repeat(g-f.length);return`${f}${g}`};a=a.reduce((f,g,l)=>{l=h[l].split("\n");g=p(g,k);const [n,...q]=l;g=`${g}\t${n}`;
const t=p("",k);l=q.map(E=>`${t}\t${E}`);return[...f,g,...l]},[]).map(f=>`\t${f}`);const m=[c,`  ${d||""}`].filter(f=>f?f.trim():f).join("\n\n");a=`${m?`${m}\n`:""}
${a.join("\n")}
`;return e?`${a}
  Example:

    ${e}
`:a};const {readFileSync:D,writeFileSync:F}=fs;/*
 diff package https://github.com/kpdecker/jsdiff
 BSD License
 Copyright (c) 2009-2015, Kevin Decker <kpdecker@gmail.com>
*/
const G={black:30,red:31,green:32,yellow:33,blue:34,magenta:35,cyan:36,white:37,grey:90};function H(a){const b=G.yellow;return b?`\x1b[${b}m${a}\x1b[0m`:a};async function I(a){const {interval:b=250,writable:c=process.stdout}={};a="function"==typeof a?a():a;const d=c.write.bind(c);var {INDICATRIX_PLACEHOLDER:e}=process.env;if(e&&"0"!=e)return d("Initialising the package<INDICATRIX_PLACEHOLDER>"),await a;let h=1,k=`${"Initialising the package"}${".".repeat(h)}`;d(k);e=setInterval(()=>{h=(h+1)%4;k=`${"Initialising the package"}${".".repeat(h)}`;d(`\r${" ".repeat(27)}\r`);d(k)},b);try{return await a}finally{clearInterval(e),d(`\r${" ".repeat(27)}\r`)}};async function J(){const a=new Promise(b=>setTimeout(b,2E3));await I(a)};async function K(a={}){const {shouldRun:b=!0,text:c=""}=a;if(b)return console.log("my-new-package called with %s",H(c)),c};if(x.help){const a=C();console.log(a);process.exit(0)}else B&&(console.log(require("../../package.json").version),process.exit(0));(async()=>{try{if(A)return await J();if(!y)throw Error("Please pass an input file.");const a=D(y,"utf8"),b=await K({shouldRun:!0,text:a});"-"==z?console.log(b):F(z,b);console.error("File %s successfully processed.",H(y))}catch(a){process.env.DEBUG?console.error(a.stack):console.log(a.message)}})();
