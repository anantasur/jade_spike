var jade = require('jade');

var fn = jade.compileFile('sample.jade');
var locals = {title:'jade-spike',head:'hello world',para:'foobar'};
var html = fn(locals);

console.log(html);