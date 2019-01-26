// function tambah(nilai1,nilai2){
//     return nilai1+nilai2;
// }
// var hasil=tambah(10,5)
// console.log(hasil)

// var kurang=function(nilai1,nilai2){
//     return nilai1-nilai2
// }
// var hasil2=kurang(10,6)
// console.log(hasil2)

// var kurang=(nilai1,nilai2) =>{
//     return nilai1-nilai2
// }
// var hasil2=kurang(10,6)
// console.log(hasil2)

function cekUmur(umur){
    var hasil="";
    if (umur >=17) {
        hasil="Sudah Dewasa";
    } else {
        hasil="belum Dewasa";
    }
    return hasil;
}

var tampilKan=cekUmur(16)
console.log(tampilKan)