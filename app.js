//GET THE TWO INPUTS FROM THE FILE 
const ip1 = document.getElementById("ip1");
const ip2 = document.getElementById("ip2");
const calc = document.getElementById("calc");
const rand = document.getElementById("rand");
const clr = document.getElementById("clr");
const results = document.getElementById("results");

//ADD EVENT LISTENER TO CALC BUTTON
calc.addEventListener('click', function () {
    //CHANGE INPUT VALUE FROM STRING TO NUMBER
    const valOne = parseInt(ip1.value);
    const valTwo = parseInt(ip2.value);
    //ADD THE VALUES TOGETHER AND INSERT TO HTML
    results.innerHTML = valOne + valTwo;
});

//CLEAR INPUTS AND DISPLAY AREA
clr.addEventListener('click', function () {
    result.innerHTML = "";
    ip1.value = "";
    ip2.value = "";
});

//CREATE A FUNCTION THAT GENERATES A RANDOM NUMBER BETWEEN 0 AND 1000
function myRandomNumber() {
    return Math.floor(Math.random() * 1000)
        ;
}
//ADD EVENT LISTENER 
rand.addEventListener('click', function () {
    ip1.value = myRandomNumber();
    ip2.value = myRandomNumber();
})
console.log(myRandomNumber());