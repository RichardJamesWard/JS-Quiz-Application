//Function to count correct answers and print results to document 
function myFunction() {

    //Create variable to count correct answers 
    var correctAnswers = 0;

    //Create variables for each question's input value
    var q1 = document.getElementById("q1").value;
    var q2 = document.getElementById("q2c").checked;
    var q3 = document.getElementById("q3").value;
    var q4 = document.getElementById("q4a").checked;
    var q5 = document.getElementById("q5").value;
    var q6 = document.getElementById("q6").value;
    var q7 = document.getElementById("q7c").checked;
    var q8 = document.getElementById("q8").value;
    var q9 = document.getElementById("q9").value;
    var q10 = document.getElementById("q10d").checked;
    var q11 = document.getElementById("q11b").checked;
    var q12 = document.getElementById("q12").value;
    var q13 = document.getElementById("q13b").checked;
    var q14 = document.getElementById("q14").value;
    var q15 = document.getElementById("q15a").checked;
    var q16 = document.getElementById("q16d").checked;
    var q17 = document.getElementById("q17").value;
    var q18 = document.getElementById("q18c").checked;
    var q19 = document.getElementById("q19").value;
    var q20 = document.getElementById("q20").value;

    //Assign correct answers to field inputs
      if (q1.toUpperCase() === "CHINA") {
        correctAnswers += 1;
    } if (q2) {
        correctAnswers += 1;
    } if ((q3.toUpperCase() === "VICTORIA") || (q3.toUpperCase() === "LAKE VICTORIA")) {
        correctAnswers += 1;
    } if (q4) {
        correctAnswers += 1;
    } if (q5.toUpperCase() === "FLORIDA") {
        correctAnswers += 1;
    } if (q6.toUpperCase() === "TANGENT") {
        correctAnswers += 1;
    } if (q7) {
        correctAnswers += 1;
    } if ((q8.toUpperCase() === "FIVE") || (q8 === "5"))  {
        correctAnswers += 1;
    }  if ((q9.toUpperCase() === "NINETY") || (q9 === "90")) {
        correctAnswers += 1;
    }  if (q10) {
        correctAnswers += 1;
    } if (q11) {
        correctAnswers += 1;
    } if (q12.toUpperCase() === "SALT") {
        correctAnswers += 1;
    } if (q13) {
        correctAnswers += 1;
    }  if (q14.toUpperCase() === "ALUMINIUM") {
        correctAnswers += 1;
    }  if (q15) {
        correctAnswers += 1;
    }  if (q16) {
        correctAnswers += 1;
    }  if (q17.toUpperCase() === "AUSTRIA") {
        correctAnswers += 1;
    }  if (q18) {
        correctAnswers += 1;
    }  if (q19.toUpperCase() === "FRANCE") {
        correctAnswers += 1;
    }  if ((q20.toUpperCase() === "TEN") || (q20 === "10")) {
        correctAnswers += 1;
    }

         //Print results (and statement) to document, dependant on outcome
         if (correctAnswers === 20) {
        document.getElementById("result").innerHTML = "Congratulations! You got all 20 answers correct";}
    else if (correctAnswers >= 15) {
        document.getElementById("result").innerHTML = "Congratulations! You got " + correctAnswers + " answers correct";}
    else if (correctAnswers >= 10) {
        document.getElementById("result").innerHTML = "You got " + correctAnswers + " answers correct";}
    else if (correctAnswers >= 1) {
        document.getElementById("result").innerHTML = "Too Bad! You only got " + correctAnswers + " answers correct";}
    else if (correctAnswers === 1) {
        document.getElementById("result").innerHTML = "Too Bad! You only got 1 answer correct";}
    else if (correctAnswers === 0) {
        document.getElementById("result").innerHTML = "You didn't answer a single answer correctly!";}

        //Print correct answers to form
        document.getElementById("answers").innerHTML = "Correct answers: (1)China (2)Chile (3)Victoria (4)Canberra (5)Florida (6)Tangent (7)Triskaidecagon (8)5 (9)90 (10)150 (11)Bromine (12)Salt (13)deliquescence (14)Aluminium (15)Hydrogen (16)1914 (17)Austria (18)Dallas (19)France (20)10";

        //Reset contents of form
        document.getElementById("quiz-form").reset();
}


