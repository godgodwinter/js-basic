const Person = {
    firstName : "Paijo",
    lastName : "Joko",
    fullname: function(){
        return `${this.firstName} ${this.lastName}`; 
    },
    weight:90,
    height:172,
    weightIdeal: function () { 
            const heightMinus100 = this.height -100;
            return (heightMinus100 - ( heightMinus100 * 10/100));
     },
     needDiet:function(){
         const weightIdeal = this.weightIdeal();
         if(weightIdeal - 5 > this.weight)
            return "U need more protein, need more "  + (weightIdeal - this.weight) + "Kg";
         else if(weightIdeal+5 < this.weight)
            return "u need more diet, need more " + (this.weight - weightIdeal) + "Kg";
         return "U are in a good shape";
     },
};

console.log(Person.firstName);
console.log(Person.fullname());
console.log(Person.weightIdeal());
console.log(Person.needDiet());

// const countries = {
//     ID:{
//         province : ["bali","jatim","jabar"],
//         city:['malang','surabaya','blitar'],
//     },
//     MY : {},
//     // TH : {
//     //     province : ["bali","jatim","jabar"],
//     //     city:['malang','surabaya','blitar'],
//     // },
// };
// // optional chaining
// console.log(countries?.TH?.province);
// // nullish coalescing
// console.log(countries?.TH?.province ?? "Not found");

