const foo = "Kuning";
let namaBuah= "";

// switch (foo) {
//     case "Merah":
//         namaBuah = "Rambutan"
        
//         break;
        
//     case "Kuning":
//         namaBuah = "Pisang"
        
//         break;
        
//     case "Hijau":
//         namaBuah = "Jambu"
        
//         break;

//     default:
//         break;
// }

// console.log(namaBuah);


function pilihBuah(ket){
switch (ket) {
    case "Merah":
        return "Rambutan" ;
    case "Kuning":
        return "Pisang" ;
        
    case "Hijau":
        return "Jambu" ;

    default:
        break;
}
}
console.log(pilihBuah('Merah'));