/* console.log(1)
console.log(2)
const timeoutid = setTimeout(()=>{
    console.log('aste')
}, 4000)
// console.log(3)
// doSomehting()
console.log(4)
console.log(5)
console.log(6)
console.log(7)

function doSomehting(){
    console.log(3)
} */
let num=0;
const intervalId = setInterval(()=>{
    console.log(++num)
    if(num === 10){
        clearInterval(intervalId)
    }
},1000)
// i++ vs ++i