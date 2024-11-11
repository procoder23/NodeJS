function placeOrder(order){
    return new Promise((resolve, reject)=>{
        if(order==="coffee"){
            resolve(order)
        }else{
            reject("We are not serving other orders than Coffee :(")
        }
    })
}

function proccessOrder(order){
    return new Promise((resolve)=>{
        console.log("Your coffee is being ready...")
        setTimeout(()=>{
            resolve(`YaY!!!!!...your ${order} is waiting for you to taste :)`)
        }, 3000)
    })
}

// placeOrder('tea')
// .then((orderPlaced)=>{
//     console.log(`Your order for ${orderPlaced} has been received.`)  // Prints 'coffee order placed.'
//     return proccessOrder(orderPlaced)
// })
// .then((proccessedOrder)=>{
//     console.log(proccessedOrder)
// })
// .catch((err)=>{
//     console.log(err)
// })

//Async Await keyword
async function serveOrder(){
    try{
        let orderPlaced = await placeOrder('tea')
        console.log(`Your order for ${orderPlaced} has been received..`)
        let proccessedOrder = await proccessOrder(orderPlaced)
        console.log(proccessedOrder)
    }catch(err){
        console.log(err)
    }
}
serveOrder()