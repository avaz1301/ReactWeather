// function getTempCallback(location, callback){
//   callback(undefined, 78);
//   callback('city not found');
// }
//
// getTempCallback('New York',function(err, temp){
//   if(err){
//     console.log('error', err);
//   }else{
//     console.log('success',temp)
//   }
// });
//
// function getTempPromise(location){
//   return new Promise(function(resolve, reject) {
//       setTimeout(function(){
//         resolve(79);
//         reject('City not found');
//       }, 1000);
//   });
// }
//
// getTempPromise('New York').then(function (temp) {
//   console.log('Promilse success', temp);
// }, function(err){
//   console.log('promise error', err);
// })


function addPromise(a, b) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            if (typeof a === 'number' && typeof b === 'number') {
                resolve(a + b);
            } else {
                reject('a & b Must be numbers!');
            }
        }, 1000)
    });
}

addPromise(17, 3).then(function(sum) {
    console.log('Promise Success!', sum);
}, function(err) {
    console.log('promise Error', err);
})
