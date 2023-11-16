//Soal JS Introduction
let nama = 'Dhea Anggita'
let asal = 'Cirebon'
let tanggal = '18 April 2002'
let umur = 21
let posisi = 'Backend Developer'
let penjumlahan = 25 + 10
let perkaliann = 100 * 2
let pembagian = 99 / 2
let modulus = 99 % 2


console.log("Nama : ", nama) // untuk menampilkan nama
console.log("Asal Daerah : ", asal) // untuk menampilkan asal
console.log("Tanggal Lahir : ", tanggal) // untuk menampilkan tanggal
console.log("Umur : ", umur) // untuk menampilkan umur
console.log("Posisi Pekerjaan : ", posisi) // untuk menampilkan posisi pekerjaan
console.log(penjumlahan) // untuk menampilkan penjumalahan
console.log(perkaliann) // untuk menampilkan perkalian
console.log(pembagian) // untuk menampilkan pembagian
console.log(modulus) // untuk menampilkan modulus


//Soal JS Conditional
//soal 1
let divisi = 'backend'
if (divisi === 'backend'){
    console.log(divisi , 'memiliki jobdesk terkait database dan pembuatan API')
} else if (divisi === 'frontend'){
    console.log(divisi, 'memiliki jobdesk terkait tampilan website')
} else {
    console.log(divisi, 'tidak diketahui jobdesknya')
}

//soal 2
let a, b
a = 10
b = 5
if(a<b){
    console.log(a, 'lebih kecil dari', b)
} else if (a>b) {
    console.log(a, 'lebih besar dari', b)
} else if (a=b) {
    console.log(a, 'sama dengan', b)
}

//soal 3
let hari = 1
switch(hari){
    case 1:{
        console.log("Minggu")
        break
    }
    case 2:{
        console.log("Senin")
        break
    }
    case 3:{
        console.log("Selasa")
        break
    }
    case 4:{
        console.log("Rabu")
        break
    }
    case 5:{
        console.log("Kamis")
        break
    }
    case 6:{
        console.log("Jumat")
        break
    }
    case 7:{
        console.log("Sabtu")
        break
    }
    default: {
        console.log("hari tidak ditemukan")
    }
}

//soal 4
let action = "UP"
switch(action){
    case "UP":{
        console.log("Karakter berjalan keatas")
        break
    }
    case "RIGHT":{
        console.log("Karakter berjalan kekanan")
        break
    }
    case "BOTTOM":{
        console.log("Karakter berjalan kebawah")
        break
    }
    case "LEFT":{
        console.log("Karakter berjalan kekiri")
        break
    }
    default: {
        console.log("action tidak ditemukan")
    }
}

//soal looping
//soal 1
for(let i = 1; i<=100; i++){
    console.log('User ke -',i)
}

//soal 2
let nilai = 0
for(let j = 0; j<10; j++){
    nilai+=2
    console.log('nilai perulangan ke', j+1, '=', nilai)
}

//soal 3
for(let k = 0; k<=20; k++){
    let isGenap = k%2 === 0
    console.log(k,'=', (isGenap ? "Genap" : "Ganjil"))
}

