const getApi = "https://api.freeapi.app/api/v1/publi/randomproducts"

const object = fetch(getApi)
console.log(object);




object.then(function (data){
    console.log(data);
})

// 

createOrder(cart)