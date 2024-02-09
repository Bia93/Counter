// VARIANTA MEA---------------

/*let decrease = document.querySelector(".decrease");
let increase = document.querySelector(".increase");
let reset = document.querySelector(".reset");
let valoare = document.querySelector("#value");
let number = 0; //set initial count
increase.addEventListener("click", function () {
  number++;
  valoare.textContent = number;
  if (number >= 0) {
    valoare.style.color = "#32CD32";
  }
});
decrease.addEventListener("click", function () {
  number--;
  valoare.textContent = number;
  if (number < 0) {
    valoare.style.color = "	#ff0000";
  }
});
reset.addEventListener("click", function () {
  valoare.textContent = "0";
});*/

// VARIANTA MENTORULUI------
let number = 0; //set initial count
//select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");
btns.forEach(function (btn) {
  //CALLBACK FUNCTION
  btn.addEventListener("click", function (event) {
    //event-This is the anonymous function that gets executed when  event occurs. It takes an event parameter, which represents the event object containing information about the keyup event.
    //console.log(event.currentTarget.classList);
    const styles = event.currentTarget.classList; //each time i want to click on a button, i will save in my variable
    if (styles.contains("decrease")) {
      //if the variable contains specific class, that means i am clicking on the button that i am interesed(ex reset)
      number--;
    } else if (styles.contains("increase")) {
      number++;
    } else if (styles.contains("reset")) {
      number = 0;
    }
    if (number > 0) {
      value.style.color = "green";
    }
    if (number < 0) {
      value.style.color = "red";
    }
    if (number === 0) {
      value.style.color = "black";
    }
    value.textContent = number;
  });
});
