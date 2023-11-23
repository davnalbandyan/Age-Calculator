"use stict"

let userInput = document.getElementById("date");

let btn = document.getElementById("btn");

let res = document.getElementById("res")

userInput.max = new Date().toISOString().split("T")[0];


function calculateAge(){
    let birthDay = new Date(userInput.value);

    let dayOne = birthDay.getDate();
    let monthOne =  birthDay.getMonth();
    let yearOne = birthDay.getFullYear();

    let today = new Date();

    let dayTwo = today.getDate();
    let monthTwo =  today.getMonth() + 1;
    let yearTwo = today.getFullYear();

    let dayThree,monthThree,yearThree;

    yearThree = yearTwo - yearOne;

    if(monthTwo >= monthOne){
        monthThree = monthTwo - monthOne;
         }else{
            yearThree--;
            monthThree = 12 + monthTwo - monthOne;
         }
    if(dayTwo >= dayOne)  {
       dayThree = dayTwo - dayOne

    }   else{
        monthThree--;
        dayThree = getDayInMonth(yearOne,monthOne) + dayTwo - dayOne;
    }

    if(monthThree < 0){
        monthThree = 11;
        yearThree--;
    }
    res.innerHTML = `You are ${yearThree} yeaars, ${monthTwo} monthns,and ${dayThree} old`

}

function getDayInMonth(year,month){
return new Date(year,month,0).getDate()
}

btn.addEventListener("click",calculateAge)
