// bikin bintang kupu kupu

const rows = 10;
      ruang = '';
      for (baris = 1; baris <= rows; baris++) {
        for (kolom = (rows * 2-1) ; kolom >= 1 ; kolom--) {
            if (kolom <= (rows * 2 - 1 - baris) && kolom > (baris )) {
                ruang += '  ';
            } else {
                ruang += "* ";
            }
        }
        ruang += '\n';
  }
      
      for (baris = 1; baris <= rows; baris++) {
          for (kolom = 1; kolom <= (rows * 2 - 1) ; kolom++){
              if (kolom >= (rows + 1 - baris) && kolom <= (rows - 1 + baris)) {
                  ruang += '  ';
                } else {
                    ruang += "* ";
                }
            }
            ruang += '\n';
        } 
        
console.log(ruang);