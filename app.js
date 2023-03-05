let num = 1;
let intervalId;


const incrementCount=()=>{
    num++;
    document.getElementById('display').innerText= num;
}

const startInterval= ()=>{
    intervalId = setInterval(incrementCount, 1000)
};

const stopInterval = ()=>{
    clearInterval(intervalId);
};

const clearCount = ()=>{
  stopInterval();
  num = 0;
  document.getElementById("display").innerText = num ;
}



document.getElementById('start').addEventListener('click', startInterval)

document.getElementById('stop').addEventListener('click', stopInterval)
   

document.getElementById('clear').addEventListener('click', clearCount)


