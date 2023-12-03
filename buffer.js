var buf = Buffer.from('abcz');
console.log(buf);
console.log(buf.length);

var buf1 = Buffer.from('xyz');
var buf2 = Buffer.from('zaz');

var x = Buffer.compare(buf1,buf2);
console.log(x); // equal 0 