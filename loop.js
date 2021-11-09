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