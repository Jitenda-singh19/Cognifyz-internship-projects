const colorbutton = document.getElementById("colorbutton");
const greetingBox = document.getElementById("greetingbox");
const calculateButton = document.getElementById("calculateButton");


colorbutton.addEventListener("onclick",()=>{
    colorbutton.style.backgroundColor = getrandomcolor();
});

function getrandomcolor(){
    const letters = "0123456789ABCDEF";
    let color = "#";
    for(let i = 0;i < 6;i++){
        color += letters[Math.floor(Math.random()*16)];
    }
   colorbutton.style.backgroundColor = color;
}

function fun1(){
    let fnum = document.getElementById("num1").value
    let snum = document.getElementById("num2").value

    let total =  parseInt(fnum)+parseInt(snum);


    
    document.getElementById("result").innerHTML = total;
    
}

let currentTime = new Date();
let currentHours = currentTime.getHours();
let currentMinute = currentTime.getMinutes();


let greetingMessage;
if(currentHours < 12) {
    greetingMessage = "Good Morning!";
}else if(currentHours<18){
    greetingMessage = "Good Afternoon!";
}else{
    greetingMessage = "Good Evening!";
}

alert(greetingMessage);
alert(`${greetingMessage}\ncurrent time is: ${currentHours}:${currentMinute}`);