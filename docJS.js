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

