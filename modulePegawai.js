var pegawai = {
    gajiPokok:0,
    tunjIstri:0,
    TunjANak:0,
    pajak:0,
    hitungGaji:function(){
        var penghasilan=this.gajiPokok+this.tunjIstri+this.TunjANak;
        var pengurang=this.pajak;
        var gajiBersih=penghasilan-pengurang
        console.log("Total Gaji Bersih "+gajiBersih)
    },
    
}

module.exports= pegawai;