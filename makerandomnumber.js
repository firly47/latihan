// 1. untuk membangkitkan angka random dari 0.1 - 0.99

var angka1 =(Math.random());
console.log(angka1);
// 2. untuk membangkitkan angka random dari 0 - 10 
// Math.floor berfungsi untuk membulatkan nilai pecahan kebawah

var angka2 =(Math.floor(Math.random()*10));
console.log(angka2);
// 3. untuk membangkitkan angka ranfom dari 1 - 10
// Math.ceil berfungsi untuk membulatkan nilai pecahan keatas

var angka3 =(Math.ceil(Math.random()*10));
console.log(angka3);


var angka4 = Math.ceil(Math.random() *15) +5;
console.log(angka4);


var angka5 = Math.ceil(Math.random() *100);
console.log(angka5);

var angka6 = Math.ceil(Math.random() *1000);
console.log(angka6);