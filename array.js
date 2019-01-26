//array
var arr = ["mangga", "jambu", "jeruk"];
// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[2])

for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    console.log(element)
}

arr.forEach(element => {
    console.log(element)
});

//object
var obj = { 
    nama: "andi", 
    alamat: "bogor", 
    pekerjaan: "programer" 
}

// console.log(obj.nama)
// console.log(obj.alamat)
// console.log(obj.pekerjaan)

//array object
var daftarNama=[
    {
        no:"1",
        nama:"andi"
    },
    {
        no:"2",
        nama:"bayu"
    },
    {
        no:"3",
        nama:"maya"
    }
]

// console.log(daftarNama[0].nama)
// console.log(daftarNama[1].nama)
// console.log(daftarNama[2].nama)
