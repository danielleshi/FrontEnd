var barbieScore = 0; 
var raquelleScore = 0; 

var questionCount = 0; 

var result = document.getElementById("result");

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");

var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");
var q4a3 = document.getElementById("q4a3")
var q4a4 = document.getElementById("q4a4")

var q5a1 = document.getElementById("q5a1");
var q5a2 = document.getElementById("q5a2");
var q5a3 = document.getElementById("q5a3");
var q5a4 = document.getElementById("q5a4");

var q6a1 = document.getElementById("q6a1");
var q6a2 = document.getElementById("q6a2");
var q6a3 = document.getElementById("q6a3");
var q6a4 = document.getElementById("q6a4");

var q7a1 = document.getElementById("q7a1");
var q7a2 = document.getElementById("q7a2");

var q8a1 = document.getElementById("q8a1");
var q8a2 = document.getElementById("q8a2");
var q8a3 = document.getElementById("q8a3");
var q8a4 = document.getElementById("q8a4");

var q9a1 = document.getElementById("q9a1");
var q9a2 = document.getElementById("q9a2");
var q9a3 = document.getElementById("q9a3");
var q9a4 = document.getElementById("q9a4");

var restartButton = document.getElementById("restart");


//adding event listeners

q1a1.addEventListener("click", barbie);
q1a2.addEventListener("click", raquelle);
q1a3.addEventListener("click", raquelle);
q1a4.addEventListener("click", barbie);

q2a1.addEventListener("click", raquelle);
q2a2.addEventListener("click", barbie);
q2a3.addEventListener("click", raquelle);
q2a4.addEventListener("click", barbie);

q3a1.addEventListener("click", barbie);
q3a2.addEventListener("click", raquelle);

q4a1.addEventListener("click", raquelle);
q4a2.addEventListener("click", raquelle);
q4a3.addEventListener("click", barbie);
q4a4.addEventListener("click", barbie);

q5a1.addEventListener("click", raquelle);
q5a2.addEventListener("click", barbie);
q5a3.addEventListener("click", barbie);
q5a4.addEventListener("click", raquelle);

q6a1.addEventListener("click", barbie);
q6a2.addEventListener("click", raquelle);
q6a3.addEventListener("click", raquelle);
q6a4.addEventListener("click", barbie);

q7a1.addEventListener("click", barbie);
q7a2.addEventListener("click", raquelle);

q8a1.addEventListener("click", barbie);
q8a2.addEventListener("click", barbie);
q8a3.addEventListener("click", raquelle);
q8a4.addEventListener("click", raquelle);

q9a1.addEventListener("click", barbie);
q9a2.addEventListener("click", raquelle);
q9a3.addEventListener("click", barbie);
q9a4.addEventListener("click", raquelle);

restartButton.addEventListener("click", restart);

//creating the functions

function barbie(){
  barbieScore += 1; 
  questionCount += 1;

  if (questionCount >= 9){
    console.log("The quiz is done!");
    updateResult();
}
}

function raquelle(){
  raquelleScore +=1; 
  questionCount+=1; 

  if(questionCount >= 9){
    console.log("The quiz is done!");
    updateResult();
}
}

function updateResult(){
  if(barbieScore >= raquelleScore){
    result.innerHTML = "You are Barbie!"
    document.getElementById("barbieImage").style.display = "block";
    console.log("You are Barbie!");
  }
  else {
    result.innerHTML = "You are Raquelle!"
    document.getElementById("raquelleImage").style.display = "block";
    console.log("You are Raquelle!");
  }
}

function restart(){
  result.innerHTML = "You are..."
  barbieScore = 0;
  raquelleScore = 0;
  questionCount = 0;
  var barbieImg = document.getElementById("barbieImage");
  var raquelleImg = document.getElementById("raquelleImage");

  if (barbieImg.style.display !== "none") {
    barbieImg.style.display = "none";
  }

  if (raquelleImg.style.display !== "none") {
    raquelleImg.style.display = "none";
  }
}