// async function order(idOrder){
//     console.log("No Id "+idOrder)
//     nil=await prosesOrder(idOrder)
//     console.log(nil)
// }

// async function prosesOrder(idOrder){
//     await setTimeout(() => {
//         console.log("Proses ID Order "+idOrder)
//         // return "Proses ID Order "+idOrder;
//     }, 2000);
// }

// async function proses(){
//     await order(1);
//     await order(2);
//     // await order(3);
// }

// proses()

// async function tambah(nilai1,nilai2){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(nilai1+nilai2)
//         }, 2000);
//     })
     
// }

async function tambah(nilai1,nilai2){
    
         setTimeout(() => {
            return (nilai1+nilai2)
        }, 2000);    
}


async function hasilAkhir(nilai3,hasilPenambahan){
    return nilai3+hasilPenambahan
}

async function hitung(){
    var nilaiPenambahan=await tambah(10,5)
    // console.log(nilaiPenambahan)
    var hasilAkhir2=await hasilAkhir(10,nilaiPenambahan)
    console.log(hasilAkhir2)
}

hitung()
// async function prosesnya(){
//     await hitung()
// }
// await prosesnya()