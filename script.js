alert('Welcome To your website');

let user = prompt('Enter your name');

document.write(`<h1>Welcome ${user}</h1>`);

var temprature = function(temp){

    let result =(temp >=30)? 'hot':'cold'; 
    document.write(`<h2>Good morning Temprature is ${result}</h2>`);   
}

temprature(prompt('enter temprature'));

//  -----------------------------------/
document.write(`<hr>`)

let userName = prompt('Enter user name')

const nameAlert = function(){
    userName = prompt('please enter a valid name');
}

// @ts-ignore
while(parseInt(userName)){
    nameAlert();
}



document.write(`<h2>Name : ${userName}</h2>`);


let birthday = prompt('Enter your birthday');



const byAlarm = function(){
    birthday =  prompt('enter valid birth date');  
}

while(!Number(birthday) || Number(birthday) >2010){    
     byAlarm();    
}
document.write(`<h3>birthyear :${birthday}</h3>`)

let userAge = 2023 - Number(birthday);
document.write(`<h3>Age : ${userAge}</h3>`)

// --------------------------------------/ 

document.write(`<hr>`)
for(let i=1; i<=6; i++){
    document.write(`<h${i}> Welcome to the Page</h${i}>`)
}













