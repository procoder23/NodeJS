let myPromise = new Promise(function(resolve, reject){
    const a = 5
    const b = 5

    setTimeout(()=>{
        if(a===b){
            resolve("The values are equal")
        }else{
            reject("The values are not equal")
        }
    }, 2000)
})

//Pending state
// console.log(myPromise)

myPromise.then((res)=>{
    console.log(res)
})
.catch((err)=>{
    console.log(err)
})