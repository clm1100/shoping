// var bcrypt = require('bcryptjs');

// var a = '1234567';
// // var tt = bcrypt.genSaltSync(a);
// // console.log(tt);

// // var salt = bcrypt.genSaltSync(10);
// // var hash = bcrypt.hashSync(a, salt);

// var salt = bcrypt.genSaltSync(10);
// var hash = bcrypt.hashSync(a, salt);



// console.log(bcrypt.compareSync(a, hash)); // true 
// console.log(bcrypt.compareSync("not_bacon", hash)); // false 

// var usr ={
//     a:'222',
//     product:[{
//         id:1,
//         count:1
//     },
//     {
//         id:2,
//         count:1
//     }]
// }

// var product = usr.product.filter(function(e){
//     return e.id==3
// });
// if(product.length){
//     product[0].count +=200
// }else{
//     console.log("33333333")
//     usr.product.push({
//         id:3,
//         count:888
//     })
// }
// console.log(product)
// console.log(usr)
// 
// 
var userinfo = { _id: '5a43e25ea9c40c1d3cb4212f',
  encrypeted_passeord: '$2a$10$2r/N1OuPaKqWEPY9UF9T9u9YPo3TR0iGv9HI4x.QhnPfodvhO86q.',
  username: 'clm11',
  createdate: '2017-12-27T18:11:42.083Z',
  lastMod: '2017-12-27T18:11:42.083Z',
  cart: [],
  order: [] } 

delete userinfo.encrypeted_passeord;
console.log(userinfo)