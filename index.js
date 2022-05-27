// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca
const firstUser = {
    nama: "yasser",
    jenkel: "laki-laki",
    umur: 27,
    email: "yassertkj@gmail.com",
    hoby: ["makan", "todur", "ngoding"],
    pendidikan: {
        sd: {
            nama: "SD inpres Rumpiah",
            kota: "barru",
            lulus: 2007,
        },
        smp: {
            nama: "Mts DDI Takkalasi",
            kota: "Barru",
            lulus: 2010,
        },
        smk: {
            nama: "SMK 1",
            jurusan: "TKJ",
            kota: "Barru",
            lulus: 2013,
        },
        kuliah: {
            nama: "Stmik Handayani",
            jurusan: "RPL",
            kota: "Barru",
            lulus: 2021,
        },
    },
    favoriteColor: [
        "Black",
        "White",
        "Blue"
    ],
};
const secondUser = {
    nama: "Mika",
    jenkel: "laki-laki",
    umur: 26,
    email: "mulham591@gmail.com",
    hoby: ["makan", "todur", "ngoding"],
    pendidikan: {
        sd: {
            nama: "SD 1 maros",
            kota: "maros",
            lulus: 2008,
        },
        smp: {
            nama: "SMP 2 papua",
            kota: "papua",
            lulus: 2011,
        },
        sma: {
            nama: "SMa 10 Maros",
            jurusan: "IPS",
            kota: "maros",
            lulus: 2014,
        },
        kuliah: {
            nama: "Stmik akba",
            jurusan: "RPL",
            kota: "Barru",
            lulus: 2021,
        },
    },
    favoriteColor: [
        "Black",
        "White",
        "Blue",
        "green"
    ],
};;

// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [];
users.push(firstUser, secondUser)
    // ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
    console.log(users.length || users.size);
    console.log(users);
}

main();

module.exports = {
    users
};