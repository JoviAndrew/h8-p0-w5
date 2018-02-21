function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    //your code here

    if(arrPenumpang.length === 0) return arrPenumpang;

    let result = [];
    let resObj = {};
    for(let counter = 0; counter<arrPenumpang.length; counter++){
        resObj = {};

        resObj.penumpang = arrPenumpang[counter][0];
        resObj.naikDari = arrPenumpang[counter][1];
        resObj.tujuan = arrPenumpang[counter][2];

        let indOrigin = 0;
        let indTujuan = 0;

        for(let counter2 = 0; counter2 < rute.length; counter2++){
            if(rute[counter2] === resObj.naikDari){
                indOrigin = counter2;
            }
            if(rute[counter2] === resObj.tujuan){
                indTujuan = counter2;
            }
        }

        resObj.bayar = 2000 * (indTujuan - indOrigin); 
        result.push(resObj);
    }

    return result;
  }

  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]