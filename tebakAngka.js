alert ('yuk main tebak angka dari 1 - 10');
// mengambil nilai komputer
var loop = true;
while (loop == true) {
var comp = Math.ceil(Math.random() *10);

var kesempatan = 3;
while (kesempatan >= 0) {
    if (kesempatan == 0 ) {
        alert('kamu udah nyoba 3 kali salah terus, jadi kamu kalah!');
    } else {
       
        var p = prompt( `silahkan tebak angka yang dipilih oleh komputer !\n kesempatan kamu ada ${kesempatan}kali`);
// mengambil nilai computer
// membangkitkan angka 1 - 10
// membuat aturan
        if ( p == comp) {
            alert('hebat tebakan kamu benar !');
            kesempatan = 0;
        } else if (p < comp) {
            alert('nilai yang kamu masukan terlalu kecil ayo coba lagi !');
        } else if (p > comp) { 
            alert('nilai yang kamu masukan terlalu besar, ayo coba lagi !');
        } else {
            alert('jangan masukan hal lain selain angka, isi angka dari 1 sampai 10, ayo coba lagi !');
        }
    }   
kesempatan--;
}
loop = confirm('mau main lagi?');
}

alert('makasih udah nyoba');