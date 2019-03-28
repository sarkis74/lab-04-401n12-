 'use strict';

const fs = require('fs');

 function Buf(nam1, nam2, nam3, arr) {
     this.nam1 = nam1;
     this.nam2 = nam2;
     this.nam3 = nam3;
 };

 // Sarkis - Initiate an array with 3 people’s names, iterates them with a forEach loop, and console.log’s each value
 Buf.prototype.buffer = function(arr) {
     arr.push(new Buffer(this.nam1), new Buffer(this.nam2), new Buffer(this.nam3));
     return arr;
 };
 let content = new Buf('Larry', 'Curly', 'Moe');

let text = content.buffer([]);


text.forEach(el => {
    console.log(el.toString());
});


 // let content = fs.readFileSync('./test.txt',  "utf8", function(err, data){
 //     if (err) console.log(err);
 //     console.log("Successfully Written to File.");
 // });
 //
 // content = content.replace(/\.\s/g, '. •\n');
 // content = content.replace(/6 Reasons for Pair Programming/, '<article><h2>6 Reasons for Pair Programming<h2>');
 // content = content.replace(/How does pair programming work\?/, '<h2>How does pair programming work?<h2>');
 // content = content.replace(/Why pair program\?/, '<h2>Why pair program<h2>');
 // content = content.replace(/Wow, all that\? Let’s take a look\!/, '<h2>Wow, all that? Let’s take a look!<h2>');
 // content = content.replace(/1. Greater efficiency/, '<h3>1. Greater efficiency<h3>');
 // content = content.replace(/2. Engaged collaboration/, '<h3>2. Engaged collaboration<h3>');
 // content = content.replace(/3. Learning from fellow students/, '<h3>3. Learning from fellow students<h3>');
 // content = content.replace(/4. Social skills/, '<h3>4. Social skills<h3>');
 // content = content.replace(/5. Job interview readiness/, '<h3>5. Job interview readiness<h3>');
 // content = content.replace(/6. Work environment readiness/, '<h3>6. Work environment readiness<h3>');
 // content = content.replace(/while developing key industry skills\./, 'while developing key industry skills.<article>');
 //
 fs.writeFile(`${__dirname}/loop.js`, text, function(err, data){
     if (err) console.log(err);
     console.log("Successfully Written to File.");
 });


 // let buf = new Buffer('•');


 module.exports = Buf;




