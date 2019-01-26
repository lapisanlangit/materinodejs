var orang = {
    nama: "Andi",
    alamat: "Surabaya",
    gajiPokok:1000,
    tampilkan: function () {
        console.log("Nama " + this.nama + " alamat:" + this.alamat)
    },
    hitungGaji:function(nilai1,nilai2){
        var totalGaji=this.gajiPokok+nilai1+nilai2;
        console.log("Total Gaji "+totalGaji)

    }
}

// orang.tampilkan()
// orang.hitungGaji(100,100)