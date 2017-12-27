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

var usr ={
    a:'222',
    product:[{
        id:1,
        count:1
    },
    {
        id:2,
        count:1
    }]
}

var product = usr.product.filter(function(e){
    return e.id==3
});
if(product.length){
    product[0].count +=200
}else{
    console.log("33333333")
    usr.product.push({
        id:3,
        count:888
    })
}
console.log(product)
console.log(usr)