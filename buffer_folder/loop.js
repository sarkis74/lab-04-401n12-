function Buf(nam1, nam2, nam3, arr) {
     this.nam1 = nam1;
     this.nam2 = nam2;
     this.nam3 = nam3;
 };

 // Sarkis - Initiate an array with 3 peoples names, iterates them with a forEach loop, and console.logs each value
 Buf.prototype.buffer = function(arr) {
     arr.push(new Buffer(this.nam1), new Buffer(this.nam2), new Buffer(this.nam3));
     return arr;
 };
 let content = new Buf('Larry', 'Curly', 'Moe');

let text = content.buffer([]);

text.forEach(el => {
    console.log(el);
});

module.exports = Buf;