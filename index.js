// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca
const firstUser = {
    nama: "yasser",
    gender: "laki-laki",
    age: 27,
    email: "yassertkj@gmail.com",
    favoriteColor: ["Black", "White", "Blue"],
    isHavepet: true,
    education: {
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
            kota: "Makassar",
            lulus: 2021,
        },
    },
    favoriteRestaurant: ["KFC", "burgerking", "mc donald"],


};
const secondUser = {
    nama: "muhammad",
    gender: "male",
    age: 27,
    email: "muhammad@gmail.com",
    favoriteColor: ["Black", "White", "Blue"],
    isHavepet: true,
    education: {
        sd: {
            nama: "SD inpres Barru",
            kota: "barru",
            lulus: 2008,
        },
        smp: {
            nama: "Mts DDI Takkalasi",
            kota: "Barru",
            lulus: 2011,
        },
        smk: {
            nama: "SMK 1",
            jurusan: "TKJ",
            kota: "Barru",
            lulus: 2014,
        },
        kuliah: {
            nama: "Stmik Handayani",
            jurusan: "RPL",
            kota: "Makassar",
            lulus: 2021,
        },
    },
    favoriteRestaurant: ["cotogagak", "burgerking", "mc donald"],
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