const Person = {
    firstName : "Paijo",
    lastName : "Joko",
    fullname: function(){
        return `${this.firstName} ${this.lastName}`; 
    },
    weight:65,
    height:162,
    isWeightIdeal: function () { 
            const heightMinus100 = this.height -100;
            return (heightMinus100 - ( heightMinus100 * 10/100) < this.weight);
     },
};

console.log(Person.firstName);
console.log(Person.fullname());
console.log(Person.isWeightIdeal());

const countries = {
    ID:{
        province : ["bali","jatim","jabar"],
        city:['malang','surabaya','blitar'],
    },
    MY : {},
    // TH : {
    //     province : ["bali","jatim","jabar"],
    //     city:['malang','surabaya','blitar'],
    // },
};
// optional chaining
console.log(countries?.TH?.province);
// nullish coalescing
console.log(countries?.TH?.province ?? "Not found");

