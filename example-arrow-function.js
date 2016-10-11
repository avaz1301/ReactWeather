var names = ['Angelo', 'Stacey', 'Wilson'];

// names.forEach(function(name){
//     console.log('forEach', name);
// })
//
// names.forEach((name) => {
//   console.log('arrowFunc', name);
// })
//
// names.forEach((name) => console.log(name));
//

// var return_me = (name) => name + '!';

// console.log(return_me('Angelo'));

// var person = {
//   name: 'Angelo',
//   greet: function(){
//     names.forEach((name) => {
//       console.log(this.name + ' says hi to ' + name);
//     });
//   }
// };


// person.greet();

//Normal
function add(a, b){
  return a+b;
}
//statement version
var add1 = (a,b) =>{
  return a+b;
}
//expression version
var add2 = (a,b) => a+b;

console.log(add(4,3));
console.log(add1(9,0));
console.log(add2(3,2));
