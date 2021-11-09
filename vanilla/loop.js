// ARRAY
const namaSiswa=["Paijo","Joko","Tono"];

// namaSiswa.forEach(function (item,index,Array){
//          console.log(item,index);
// });

namaSiswa.push("devi");

// reduce seperti foreach dan di return
// console.log(
// namaSiswa.reduce(function(acc,siswa,ke){
//         acc[siswa] = `Siswa ke ${ke +1}`;
//         return acc;
// },{}) //ubah menjadi object
// );


// perulangan
// for
// for(let index=0; index<namaSiswa.length;index++){
//     const element = namaSiswa[index];
//     console.log(element);
// }

// do while
// let index=0;
// while(index < namaSiswa.length){
//     const element = namaSiswa[index];
//     console.log(element);
//     index++;
// }


// console.log(namaSiswa);

console.log(
    namaSiswa
    // .find(element => element=="Joko")

    .filter(function(siswa,ke){
        return siswa!="Joko"
    })
    .map(
        function(siswa,ke){
            return `${siswa} ini siswa ke ${ke+1}`
        }
    )
    // .join(", ")
);