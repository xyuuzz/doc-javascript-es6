/* 
    * SHORT DOCUMENTATION FOR JAVASCRIPT ADVANCE
*/


// 1. Class

// create Class (common) / function constructor
function class1()
{
    this.halo = function() {
        return "halo";
    };

    this.ini = () => "maknyuss"
}

const obj1 = new class1();
console.log(obj1.halo());

// menggunakan konsep OOP / object oriented programming
class Blueprint
{
    prop1 = "Halo mas"

    method1 = () => "Mantab jiwa"
}

const obj2 = new Blueprint()
console.log(obj2.method1());


// ----------------------------------------- //

// 2. Closure Function
// => adalah sebuah function yang me-return function yang lain, dan function yang dipanggil wajib harus dikirimkan variabel milik function yang memanggilnya.
function closureCad(a,b)
{
    return a - b**2;
}

function closure(a,b)
{
    const bil1 = a**b;
    return closureCad(bil1, b);
}

console.log(closure(2,8));


// ----------------------------------------- //

// 3. Perbedaan deklarasi variabel menggunakan var, let dan const
// var : di Javascript ES6, deklarasi variabel menggunakan var hukumny tidak di sarankan, karena variabel yang dideklarasikan nantinya akan bersifat global, sehingga bisa diakses dibagian manapun
// let : adalah keyword pendeklarasian variabel terbaru yang ditambahkan pada ES6, let ini bersifat block scope atau function scope, artinya hanya bisa diakses diantara curly bracket saja (function/ class) {} 
// const : sama seperti keyword let, namun const nilai nya tidak dapat dirubah/tetap.


// ----------------------------------------- //

// 4. Arrow Function
// adalah sebuah cara pendeklarasian function namun dengan cara yang lebih singkat. Arrow function biasanya digunakan pada anonymous function atau callback function.
// Ingat!! Arrow function tidak mempunyai konsep this .

const arr_func1 = () => {
    return // kosong
};
const arr_func2 = (a, b) => a*b; // menerima 2 parameter, dan mereturn nilai
const arr_func3 = a => a; // menerima 1 parameter, dan mereturn nilai


// ----------------------------------------- //

// 5. Method Filter, Map and Reduce
// ketiga method tersebut termasuk ke dalam Higher Order Function, yaitu function yang menerima argument berupa function (callback)
const arr_gen = [1,2,3,4,5,6,7,8,9];

// Filter
const dibawah_7 = arr_gen.filter(angka => angka < 7);
console.log(dibawah_7);
// cara kerja method filter adalah sebagai berikut :
// a. setiap element array akan di looping, dan dimasukan ke dalam parameter function nya,
// b. value element yang memenuhi kondisi yang ditentukan di nilai return akan dimasukan ke dalam variabel penampung nya

// Map
const kali_2 = arr_gen.map(angka => angka * 2);
console.log(kali_2);
// Cara kerja method map adalah sebagai berikut :
// a. setiap element array akan di looping, dan dimasukan ke dalam parameter function nya,
// b. value element akan di olah pada function tersebut, 
// c. method map adalah method yang digunakan untuk mengolah element array untuk menjadikanya element yang berbeda nantinya

// Reduce
const ex_reduce = arr_gen.reduce( (cElement, Cvalue) => {
    return cElement + Cvalue;
});
console.log(ex_reduce);
// cara kerja method reduce adalah sebagai berikut : 
// a. setiap element array akan di looping, dan dimasukan ke dalam parameter cElement
// b. pada method reduce, terdapat 2 parameter wajib, yaitu current element(berisi value element yang sedang dilooping) dan current value berfungsi untuk menampung value dari operasi function reduce.
// c. nilai awal Cvalue adalah 0 dan cElement adalah element dengan indeks ke 0
// d. jika anda ingin melakukan operasi menggunakan method reduce, maka semua hasilnya akan otomatis disimpan ke dalam parameter Cvalue


// ----------------------------------------- //

// 6. Template Literals
// dilambangkan dengan simbol backtick (``) . Template literal fungsinya sama seperti tanda petik, yaitu untuk membungkus karakter agar menjadikanya string, namun pada template literal terdapat fitur spesial yang hanya dapat digunakan olehnya. 
// dengan template literal kita dapat menuliskan variabel / fungsi / apapun didalamnya tanpa error, sedangkan di tanda petik biasa, hal itu tidak dapat dilakukan.
// cara menuliskan nya juga mudah, yaitu dibungkus ke dalam curly bracket( {} ) yang didahului oleh tanda dolar => ${...}
// menggunakan tanda petik biasa 
const mantab = "mantab";
const kata = "halo semua ${mantab}"; // tidak akan berfungsi, malah akan mencetak ${mantab}, bukan isi variabel nya
const kata_tl = `Halo semua ${mantab}`; // akan mencetak variabel mantab


// ----------------------------------------- //

// 7. Destructuing Assignment 
// adalah sebuah fitur terbaru di ES6 yang memungkinkan kita memasukan value ke dalam lebih dari 1 variabel sekaligus. Karena fitur ini susah dijelaskan jika secara lisan, mending kita langsung praktek saja

// a. Destructuring Array
// dengan fitur destructuring, kita dapat memecah element array dan memasukan valuenya ke dalam variabel secara langsung. Ini fitur destructuring array. Setiap element array akan masuk ke dalam variabel sesuai urutanya.
const arr_mantab = [1,2]; // deklarasi array
const [a,b] = arr_mantab; 
// hancurkan array, masukan ke dalam variabel a dan b, a berisi indeks ke 0 dan seterusnya. 
// fitur ini sangat berguna sekali untuk efisiensi code

// b. Destructuring Object
// sama seperti array, namun jika kita ingin men-destructuring sebuah object, maka nama variabel harus sama dengan nama property pada object nya.
const obj_mantab = {
    "halo" : "semua",
    "aku" : "semangat"
};
const {halo, aku} = obj_mantab;
// prop halo, akan assign ke var halo dan seterusnya

// ada trik agar kita agar bisa memberikan nama variabel yang berbeda dengan nama property object
// cara nya adalah beri nama variabel yang diinginkan di belakang nama variabel, dengan didahului tanda titik 2 (:)
const {halo: pakpak, aku: bubu} = obj_mantab;
// maka sekarang nama variabel nya bukan lagi halo dan aku, namun pakpak dan bubu.

// c. Destructuring Function
// kita juga bisa menggunakan konsep diatas untuk memecah parameter yang dikirimkan, bisa array ataupun object. dan fitur ini sangat berguna sekali.

// destructuring function => array
function mantabbb([jojo,bizare]) 
{
    // fungsi ini menerima argument berupa array, dan nantinya saat diterima, nilai dari array akan langsung dipecah(di - destructuring)

    return jojo * bizare;
}

// destructuring function => object
function obj_ahaq({abah, umi})
{
    return abah**umi;
}
class Uhuk
{
    abah = 12;
    umi = 3;
}
console.log(obj_ahaq(new Uhuk)); // hasilnya adalah 1728, atau sesuai dengan hasil operasi return function nya, yaitu prop abah dipangkatkan pro umi = 12 pangkat 3.


// ----------------------------------------- //

// 8. for of...    VS    for in...
// Selain for dan foreach, ada 2 macam lagi perulangan for di dalam javascript, disini kita akan membahas .keduanya.

// a. for in...
// for in... berguna untuk me-looping sebuah object, 
// INGAT!!! yang di-looping disini hanyalah property dari object itu saja, sedangkan method nya tidak akan di ikutkan ke dalam perulangan

class FORIN
{
    F1 = 12;
    F2 = 3;
}
for(let i in new FORIN) {
    console.log(i);
}

// b. for of...
// for of... berguna untuk melooping object yang mempunyai sifat itterable / mempunyai indeks.
const string = "Maulana Yusuf";
for(let i of string) 
{
    console.log(i);
}
// kita akan me-looping string nya menjadi satu satu, jadi M lalu a lalu u dan seterusnya sampai habis. 
// ini sama seperti kita mengulangnya dengan for namun kita membutuhkan indeks untuk mengakses value dari element string nya.
// cara ini jauh lebih lanjay jika kita ingin me-looping object itterable, dari pada menggunakan foreach atau for loop 
// di for of kan tidak ada indeks nya kak, lalu bagaimana?
// tenang, kita dapat menambahkan indeks secara manual, menggunakan method entries() , yang parameternya adalah object yang ingin di looping.
for (let [indeks, v] of Object.entries(string))
{
    // indeks melambangkan indeks nya, sedangkan v melambangkan value nya
    if(v !== ' ') {
        console.log(`Huruf ${v} mempunyai indeks ke ${indeks}`);
    } else {
        console.log("spasi");
    }
}


// ----------------------------------------- //

// 9. Spread Operator
// => merupakan operator pada javascript yang dilambangkan dengan titik sebanyak 3 kali (...). 
// Contoh fungsi spread operator adalah untuk menggabungkan array namun tidak berbentuk array multidimensi. Sedangkan jika kita menggabungkan 2 element array ke satu array, nama secara otomatis akan berbentuk array multidimensi.
const uhuk = ["maulana", "yusuf", "muhibin"];
const ahaqmantab = ["anak", "pertama"];
const gabungan_salah = [uhuk, ahaqmantab]; // berbentuk array multidimensi
const gabungan_benar = [...uhuk, ...ahaqmantab]; // tidak berbentuk array multidimensi(langsung)
// dengan menggunakan cara diatas, kita dapat lebih fleksibel untuk memanipulasi array.

// Spread operator juga dapat digunakan untuk mengubah berbagai tipe data yang mirip dengan array(nodelist, arguments, dll) menjadi sebuah array, sehingga kita dapat menggunakan method yang hanya bisa digunakan oleh array.


// ----------------------------------------- //

// 10. Rest Parameter
// => Rest parameter adalah sebuah Spread operator yang digunakan untuk menangkap argument pada sebuah function yang tidak menentu jumlahnya(acak).
const agak = (...a) => {
    // variabel agak dapat menerima argument yang jumlah nya acak karena memiliki rest parameter. dan variabel yang dijadikan rest parameter ini akan berbentuk array, meskipun argument yang ditangkap berjumlah satu.
    a.forEach(b => console.log(b));
};
agak(1,2,3,4,5);


// ----------------------------------------- //

// Promise
// => Promise, sesuai artinya(janji), Promise adalah sebuah object asynchronus di Javacript yang dapat memiliki 2 hasil sesuai aturan dengan janji, yaitu ditepati atau di ingkari. 
// Object Promise memiliki 2 parameter wajib, yaitu resolve(ditetapi) dan reject(diingkari), yang keduanya berbentuk higher order function
// Object Promise tidak dapat langsung di print, karena bentuk sifatnya yang asynchronus. Jika kita tetap nekat dengan menge-print langsung object Promise, maka hasilnya adalah object Promise itu sendiri.
// Lantas, bagaimana cara menge-print / mengeluarkan object Promise tersebut?
// caranya adalah dengan menggunakan method then dan catch
// a. Method then
//  => method then dijalankan ketika object Promise tersebut mengembalikan method resolve, dan akan mengeluarkan isi dari method resolve.
// b. Method catch
//  => method catch biasanya digunakan untuk meng-handle jika object Promise kita mengembalikan method catch(error) yang identik dengan terjadinya error.
// Cara penggunaan terbaik untuk method then dan catch adalah dengan cara di chaining seperti penggunaan method filter, map dan reduce.

// Contoh Promise :
const con = false; //kondisi
const ankay = new Promise((resolve, reject) => { //variabel yang berisi object Promise
    if(con) {
        resolve("berhasil");
    } else {
        reject("gagal:(");
    }
});
ankay // chaining method then dan catch untuk mengeluarkan hasil object Promise di atas
    .then(jawaban => console.log(jawaban))
    .catch(err => console.log(err));


// ----------------------------------------- //

// Fetch
//  => Adalah sebuah higher Order Function yang mengembalikan object Promise.
// Fetch digunakan untuk mengambil data api(menggantikan ajax), yang di sisi syntax lebih simple dan ringkas
// Fetch memiliki 2 parameter, yaitu url api dan 1 nya lagi adalah method yang akan dijalankan untuk api tersebut(get, post, delete dll)
// Karena fetch mengembalikan object Promise, maka kita wajib menggunakan method then dan catch setelah menggunakan fetch untuk mengeluarkan hasilnya.
fetch("http://www.omdbapi.com/?apikey=dca61bcc&s=avengers")
    .then(response => response.json())
        .then(response => console.log(response.Search))
    .catch(err => console.log(err));


// ----------------------------------------- //

// Callback Function
//  => merupakan sebuah anonymous function yang dideklarasikan sebagai argument yang akan diterima oleh sebuah function. Function yang menerima sebuah callback function disebut Higher Order Function. 
// Callback merupakan salah satu dari konsep Asynchronus Javascript
// Berikut adalah salah satu contoh Higher order function yang berkaitan erat dengan konsep asynchronus javascript
// => setTimeOut Function
const time = setTimeout(() => {
    console.log("anjay lanjay");
}, 3000); // fungsi akan menunggu sebanyak 3000ms untuk menampilkan isi dari anonymous function
// variabel time berisi sebuah higher order function yang memiliki argument berupa anonymous function dan jumlah jeda sampai fungsi dieksekusi.


// Contoh Program Sederhana Dari Higher Order Function setTimeOut 

const tombol = document.getElementById("bu");
const tampilkan = document.getElementById("isi");
const tunggu = document.getElementById("tunggu");
const update = document.getElementById("update");

let n = 1;
tombol.addEventListener("click", () => {
    update.innerHTML = "";
    for(let i = 1; i <= n; i++)
    {
        tunggu.innerHTML = `Tunggu selama 0 detik, maka huruf akan terupdate`;
        setTimeout(() => {
            tunggu.innerHTML = `Tunggu selama ${i} detik, maka huruf akan terupdate`;
        }, i*1000);
    }
    
    setTimeout(() => {
        tampilkan.innerHTML = n;
        update.innerHTML = n === 11 ? "Number Tereset!" : "Di Update!";
    }, n*1000);

    n = n === 11 ? 1 : n + 1; 

});