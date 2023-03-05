const getData = new Promise((resoleve, reject)=>{
    const num = Math.random()*10;
    console.log(num)
    if(num< 5){
        resoleve(566665)
    }
    else{
        
        reject('no data avaulable')
    }
    // resoleve(566665)
})

console.log(getData)

getData
.then(data=> console.log(data+22))
.catch(err=> console.error('err',err))