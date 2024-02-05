var s = "";
    rows = 10;
for (var i = 1; i <= rows; i++){
    for ( var j = 2; j<=i; j++ ) {
        s += ' ';
    }
    for (var k = rows + 1; k >= j; k--) {
        s += '*';
    }
    for (var l = rows - 1; l >=i; l--) {
        s += '*';
    }
    for (var m = 2; m <=i; m++) {
        s += ' '
    }
        s += '\n';
}

for (var i = 1; i <= rows -1; i++) {
    for (var j = rows -2 ; j >= i; j--) {
        s += ' ';
    }
    for (var k = 1; k <= i +1; k++) {
        s += '*';
    }
    for (var l = 1; l <= i; l++ ) {
        s += '*';
    }
    for (var m = rows - 2; m >= i; m--) {
        s += ' ';
    }
    s += '\n';
}

console.log(s)