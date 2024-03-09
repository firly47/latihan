
//  cara mengisi nilai pada array penumpang

// menambahkan penumpang pada angkot

var penumpang = ['wawan', undefined, 'ridho'];
var naik = function(namaPenumpang, penumpang) {
    // penumpang naik bila kosong
    if (penumpang.length == 0 ) {
        penumpang.push(namaPenumpang)
        return penumpang;

            } else {
        // bila isi
        // ada kosong ditengah, penumpang lebih dulu mengisi kursi kosong (undefined)
        for(var i =0; i< penumpang.length; i++) {
            if (penumpang[i] == undefined ) {
                penumpang[i] = namaPenumpang;
                return penumpang;
                
        // bila nama penumpangnya sama, maka penumpang tersebut tidak akan naik 2 kali
            } else  if (penumpang[i] == namaPenumpang ) {
                console.log('penumpang dengan nama '+ namaPenumpang + ' sudah naik');
                return penumpang;
                
        //  bila kursi penuh maka penumpang akan duduk dikursi baru
            } else if(i == penumpang.length -1) {
                penumpang.push(namaPenumpang);
                return penumpang;           
            }
        }
    }
} 

// cara mengurangi penumpang

// 1. bila penumpang kosong muncul pemberitahuan karna tidak bisa ada yg turun
var turun = function(namaPenumpang, penumpang) {
    if (penumpang.length == 0) {
        console.log('gak ada penumpang bro kosong');
        return penumpang;

    } else {
        // 2. menurunkan penumpang, mengubah nama penumpang menjadi undefined
        for(var i = 0; i< penumpang.length; i++) {
            if (penumpang[i] == namaPenumpang ) {
                penumpang[i] = undefined;
                return penumpang;

            } else if (i == penumpang.length -1 ) {
                console.log('tidak ada nama ' + namaPenumpang + ' yakin dia naik ?');
                return penumpang;
            }
        }
    }

}






