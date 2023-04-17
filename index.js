var user = prompt("Nama.");

document.getElementById("welcome-name").innerText = user;

function validateForm() {
    var myDate = new Date();
    var newDate = myDate.toString().slice(0, 33);

    var nama = document.forms['form-message']['form-nama'].value;
    var tanggal = document.forms['form-message']['form-tanggal'].value;
    var gender = document.forms['form-message']['form-gender'].value;
    var pesan = document.forms['form-message']['form-pesan'].value;

    var tanggalArr = tanggal.split("-");
    var newTanggal = tanggalArr[2] + "-" + tanggalArr[1] + "-" + tanggalArr[0];

    console.log(newDate);
    console.log(nama);
    console.log(newTanggal);
    console.log(gender);
    console.log(pesan);

    
    // document.getElementById("sender-time").innerText = newDate;
    

    document.getElementById("output-nama").innerHTML = nama;
    document.getElementById("output-tanggal").innerText = newTanggal;
    document.getElementById("output-gender").innerText = gender;
    document.getElementById("output-pesan").innerText = pesan;

    return false;
}


