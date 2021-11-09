// ARRAY
const namaSiswa=["Paijo","Joko","Tono"];

// namaSiswa.forEach(function (item,index,Array){
//          console.log(item,index);
// });

namaSiswa.push("devi");

//reduce seperti foreach dan di return
console.log(
namaSiswa.reduce(function(acc,siswa,ke){
        acc[siswa] = `Siswa ke ${ke +1}`;
        return acc;
},{}) //ubah menjadi object
);

// console.log(namaSiswa);
// const indexJoko=namaSiswa.indexOf("Joko");
// // index array ke berapa
// namaSiswa.splice(indexJoko,1);
// console.log(namaSiswa);

// // menghaspus di akhir
// namaSiswa.pop();
// //menghapus di awal
// namaSiswa.shift();

// tipe data dasar
// let iceCream=5;
// let iceCream='Paijo';
// let name='Paijo';
// let iceCream=5%2;
// let iceCream=2;

// let iceCream=2;

// let hasil=iceCream!=2?'Bukan Dua Icekrem':'Dua Eskrem';
// console.log(hasil);


// console.log(`${name} punya ${iceCream} Eskrim`)


// if(iceCream >1) console.log(iceCream+'lebih dari 1')
// else console.log(iceCream+ 'kurang dari = 1')



// console.log(iceCream);
// console.log(typeof iceCream);
