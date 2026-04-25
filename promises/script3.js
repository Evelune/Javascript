const cart = ["table", "chair", "rope", "shoes"];

const promise = createOrder(cart);

promise
  .then(function (orderId) {
    console.log(orderId);
  })
  .catch(function (err) {
    console.log(err.message);
  });

function createOrder(cart) {
  const promise = new Promise(function (resolve, reject) {
    if (!validateCart(cart)) {
      const err = new Error("Cart not found");
      reject(err)
      
    } 
    else {
      const orderId = "231107";
      if (orderId) {
        setTimeout(function () {
          resolve(orderId);
        }, 2000);
      }
    }
  });
  return promise;
}

function validateCart(cart) {
  return false;
}
