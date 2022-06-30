var pageContentEl = document.querySelector("#page-content");
pageContentEl.setAttribute("style", "margin:auto; width:50%; text-align:center;");

var headerEl=document.querySelector("#header");
var timerEl = document.querySelector("#timer");
var headerHighScoreBtn = document.querySelector("#main-highscore-btn");

var timeLeft = 75;

var allScores = localStorage.getItem("allScores")?JSON.parse(localStorage.getItem("allScores")):[]

var timeCountdown;

var countdown = function() {
    timeCountdown = setInterval(function() {
        if (timeLeft > 0) {
            timeLeft--;
            timerEl.textContent= timeLeft;
        }else {
            clearInterval(timeCountdown);
            alert("You did not finish the quiz in time, your score is 0! Please try agian!")
            location.reload();          
        }
    }, 1000)
};


var startingPage = function() {

    var quizInsEl = document.createElement("div");
    quizInsEl.setAttribute("id", "instructions");
    pageContentEl.appendChild(quizInsEl);

    var titleEl = document.createElement("h1");
    titleEl.setAttribute("id", "title");
    titleEl.textContent = ("Coding Quiz Challenge");
    quizInsEl.appendChild(titleEl);

    var quizDescriptionEl = document.createElement("p");quizDescriptionEl.setAttribute("id", "quiz-description");
    quizDescriptionEl.textContent= ("Try to answer the following code related question within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!");
    quizInsEl.appendChild(quizDescriptionEl);
    
    var buttonStartEl = document.createElement("button");
    buttonStartEl.setAttribute("id", "btn-start");
    buttonStartEl.className = ("btn btn-start");
    buttonStartEl.textContent= "Start Quiz";
    quizInsEl.appendChild(buttonStartEl);

    var startQuizButton = function() {
        countdown();
        quizInsEl.remove();
        quizOne();
    }
        buttonStartEl.addEventListener("click", startQuizButton);


    headerHighScoreBtn.addEventListener("click",function(){
        quizInsEl.remove();
        highScore();
    });
}

var quizOne = function() {

    var quizContEl = document.createElement("div");
    quizContEl.setAttribute("id", "questions");
    pageContentEl.appendChild(quizContEl);

    var questionOneEl = document.createElement("h1");
    questionOneEl.setAttribute("id", "question-one");
    questionOneEl.textContent = ("Commonly used data types DO NOT include:");
    quizContEl.appendChild(questionOneEl);
 
    var optionContEl = document.createElement("div");
    optionContEl.setAttribute("id", "options")
    quizContEl.appendChild(optionContEl);

    var optionOneEl= document.createElement("button");
    optionOneEl.setAttribute("id", "btn-option1")
    optionOneEl.className = ("btn correct-btn");
    optionOneEl.textContent = ("1. alerts");
    optionContEl.appendChild(optionOneEl);

    var optionTwoEl= document.createElement("button");
    optionTwoEl.setAttribute("id", "btn-option2")
    optionTwoEl.className = ("btn wrong-btn");
    optionTwoEl.textContent = ("2. strings");
    optionContEl.appendChild(optionTwoEl);

    var optionThreeEl= document.createElement("button");
    optionThreeEl.setAttribute("id", "btn-option3")
    optionThreeEl.className = ("btn wrong-btn");
    optionThreeEl.textContent = ("3. booleans");
    optionContEl.appendChild(optionThreeEl);

    var optionFourEl= document.createElement("button");
    optionFourEl.setAttribute("id", "btn-option4")
    optionFourEl.className = ("btn wrong-btn");
    optionFourEl.textContent = ("4. numbers");
    optionContEl.appendChild(optionFourEl);

   
    optionContEl.addEventListener("click", function(event) {
        var targetEl = event.target;
        if (targetEl.matches(".correct-btn")) {
            console.log("correct answer!");
            quizContEl.remove();
            alert("Correct Answer!");
            quizTwo();
        } else if (targetEl.matches(".wrong-btn")) {
            console.log("wrong answer!");
            quizContEl.remove();
            alert("Wrong Answer!");
            timeLeft= timeLeft-10;
            quizTwo();
    }
    });
}

var quizTwo = function() {

    var quizContEl = document.createElement("div");
    quizContEl.setAttribute("id", "questions");
    pageContentEl.appendChild(quizContEl);

    var questionTwoEl = document.createElement("h1");
    questionTwoEl.setAttribute("id", "question-two");
    questionTwoEl.textContent = ("The condition in an if/else statement is enclosed with __________.");
    quizContEl.appendChild(questionTwoEl);

    var optionContEl = document.createElement("div");
    optionContEl.setAttribute("id", "options")
    quizContEl.appendChild(optionContEl);

    var optionOneEl= document.createElement("button");
    optionOneEl.setAttribute("id", "btn-option1")
    optionOneEl.className = ("btn wrong-btn");
    optionOneEl.textContent = ("1. quotes");
    optionContEl.appendChild(optionOneEl);

    var optionTwoEl= document.createElement("button");
    optionTwoEl.setAttribute("id", "btn-option2")
    optionTwoEl.className = ("btn wrong-btn");
    optionTwoEl.textContent = ("2. curly brackets");
    optionContEl.appendChild(optionTwoEl);

    var optionThreeEl= document.createElement("button");
    optionThreeEl.setAttribute("id", "btn-option3")
    optionThreeEl.className = ("btn wrong-btn");
    optionThreeEl.textContent = ("3. square brackets");
    optionContEl.appendChild(optionThreeEl);

    var optionFourEl= document.createElement("button");
    optionFourEl.setAttribute("id", "btn-option4")
    optionFourEl.className = ("btn correct-btn");
    optionFourEl.textContent = ("4. parantheses");
    optionContEl.appendChild(optionFourEl);

    optionContEl.addEventListener("click", function(event) {
        var targetEl = event.target;
        if (targetEl.matches(".correct-btn")) {
            console.log("correct answer!");
            quizContEl.remove();
            alert("Correct Answer!");
            quizThree();
        } else if (targetEl.matches(".wrong-btn")) {
            console.log("wrong answer!");
            quizContEl.remove();
            alert("Wrong Answer!");
            timeLeft= timeLeft-10;
            quizThree();
    }
    });
}
var quizThree = function() {

    var quizContEl = document.createElement("div");
    quizContEl.setAttribute("id", "questions");
    pageContentEl.appendChild(quizContEl);

    var questionThreeEl = document.createElement("h1");
    questionThreeEl.setAttribute("id", "question-three");
    questionThreeEl.textContent = ("Arrays in JavaScript can be used to store __________.");
    quizContEl.appendChild(questionThreeEl);

    var optionContEl = document.createElement("div");
    optionContEl.setAttribute("id", "options")
    quizContEl.appendChild(optionContEl);

    var optionOneEl= document.createElement("button");
    optionOneEl.setAttribute("id", "btn-option1")
    optionOneEl.className = ("btn wrong-btn");
    optionOneEl.textContent = ("1. numbers and strings");
    optionContEl.appendChild(optionOneEl);

    var optionTwoEl= document.createElement("button");
    optionTwoEl.setAttribute("id", "btn-option2")
    optionTwoEl.className = ("btn wrong-btn");
    optionTwoEl.textContent = ("2. other arrays");
    optionContEl.appendChild(optionTwoEl);

    var optionThreeEl= document.createElement("button");
    optionThreeEl.setAttribute("id", "btn-option3")
    optionThreeEl.className = ("btn wrong-btn");
    optionThreeEl.textContent = ("3. booleans");
    optionContEl.appendChild(optionThreeEl);

    var optionFourEl= document.createElement("button");
    optionFourEl.setAttribute("id", "btn-option4")
    optionFourEl.className = ("btn correct-btn");
    optionFourEl.textContent = ("4. all of the above");
    optionContEl.appendChild(optionFourEl);

    optionContEl.addEventListener("click", function(event) {
        var targetEl = event.target;
        if (targetEl.matches(".correct-btn")) {
            console.log("correct answer!");
            quizContEl.remove();
            alert("Correct Answer!");
            quizFour();
        } else if (targetEl.matches(".wrong-btn")) {
            console.log("wrong answer!");
            quizContEl.remove();
            alert("Wrong Answer!");
            timeLeft= timeLeft-10;
            quizFour();
    }
    });
}

var quizFour = function() {
    
    var quizContEl = document.createElement("div");
    quizContEl.setAttribute("id", "questions");
    pageContentEl.appendChild(quizContEl);

    var questionFourEl = document.createElement("h1");
    questionFourEl.setAttribute("id", "question-four");
    questionFourEl.textContent = ("String values must be enclosed within __________ when being assigned to variables.");
    quizContEl.appendChild(questionFourEl);

    var optionContEl = document.createElement("div");
    optionContEl.setAttribute("id", "options")
    quizContEl.appendChild(optionContEl);

    var optionOneEl= document.createElement("button");
    optionOneEl.setAttribute("id", "btn-option1")
    optionOneEl.className = ("btn wrong-btn");
    optionOneEl.textContent = ("1. commas");
    optionContEl.appendChild(optionOneEl);

    var optionTwoEl= document.createElement("button");
    optionTwoEl.setAttribute("id", "btn-option2")
    optionTwoEl.className = ("btn correct-btn");
    optionTwoEl.textContent = ("2. quotes");
    optionContEl.appendChild(optionTwoEl);

    var optionThreeEl= document.createElement("button");
    optionThreeEl.setAttribute("id", "btn-option3")
    optionThreeEl.className = ("btn wrong-btn");
    optionThreeEl.textContent = ("3. curly brackets");
    optionContEl.appendChild(optionThreeEl);

    var optionFourEl= document.createElement("button");
    optionFourEl.setAttribute("id", "btn-option4")
    optionFourEl.className = ("btn wrong-btn");
    optionFourEl.textContent = ("4. parantheses");
    optionContEl.appendChild(optionFourEl);

    optionContEl.addEventListener("click", function(event) {
        var targetEl = event.target;
        if (targetEl.matches(".correct-btn")) {
            console.log("correct answer!");
            quizContEl.remove();
            alert("Correct Answer!");
            quizFive();
        } else if (targetEl.matches(".wrong-btn")) {
            console.log("wrong answer!");
            quizContEl.remove();
            alert("Wrong Answer!");
            timeLeft= timeLeft-10;
            quizFive();
    }
    });
}

var quizFive = function() {

    var quizContEl = document.createElement("div");
    quizContEl.setAttribute("id", "questions");
    pageContentEl.appendChild(quizContEl);

    var questionFiveEl = document.createElement("h1");
    questionFiveEl.setAttribute("id", "question-five");
    questionFiveEl.textContent = ("A very useful tool used during development and debugging for printing content to the debugger is:");
    quizContEl.appendChild(questionFiveEl);

    var optionContEl = document.createElement("div");
    optionContEl.setAttribute("id", "options")
    quizContEl.appendChild(optionContEl);

    var optionOneEl= document.createElement("button");
    optionOneEl.setAttribute("id", "btn-option1")
    optionOneEl.className = ("btn wrong-btn");
    optionOneEl.textContent = ("1. JavaScript");
    optionContEl.appendChild(optionOneEl);

    var optionTwoEl= document.createElement("button");
    optionTwoEl.setAttribute("id", "btn-option2")
    optionTwoEl.className = ("btn wrong-btn");
    optionTwoEl.textContent = ("2. terminal/git bash");
    optionContEl.appendChild(optionTwoEl);

    var optionThreeEl= document.createElement("button");
    optionThreeEl.setAttribute("id", "btn-option3")
    optionThreeEl.className = ("btn correct-btn");
    optionThreeEl.textContent = ("3. console.log");
    optionContEl.appendChild(optionThreeEl);

    var optionFourEl= document.createElement("button");
    optionFourEl.setAttribute("id", "btn-option4")
    optionFourEl.className = ("btn wrong-btn");
    optionFourEl.textContent = ("4. for loops");
    optionContEl.appendChild(optionFourEl);

    optionContEl.addEventListener("click", function(event) {
        var targetEl = event.target;
        if (targetEl.matches(".correct-btn")) {
            console.log("correct answer!");
            quizContEl.remove();
            finalScore=timeLeft;
            console.log(finalScore)
            alert("Correct Answer!");
            quizDone();
            
        } else if (targetEl.matches(".wrong-btn")) {
            console.log("wrong answer!");
            quizContEl.remove();
            timeLeft= timeLeft-10;
            finalScore= timeLeft;
            console.log(finalScore);
            alert("Wrong Answer!");
            quizDone();
            
            
    }
    });
}

var quizDone = function() {
    finalScore= timeLeft;
    clearInterval(timeCountdown);

    var quizDoneEl = document.createElement("div");
    quizDoneEl.setAttribute("id", "score-form");
    pageContentEl.appendChild(quizDoneEl);

    var allDoneEl = document.createElement("h1");
    allDoneEl.setAttribute("id", "all-done");
    allDoneEl.textContent = ("All done!");
    quizDoneEl.appendChild(allDoneEl);

    var scoreEl = document.createElement("p");
    scoreEl.setAttribute("id", "score");
    scoreEl.innerHTML = "Your final score is " +finalScore + ".";
    quizDoneEl.appendChild(scoreEl);

    var formContainer = document.createElement("div");
    formContainer.setAttribute("id", "container-form");
    quizDoneEl.appendChild(formContainer);
    
    var formLabel = document.createElement("label");
    formLabel.setAttribute("for", "final-score");
    formLabel.textContent= "Enter your initials:";
    formContainer.appendChild(formLabel);
  
    var formInput = document.createElement("input");
    formInput.setAttribute("type", "text");
    formInput.setAttribute("id", "initials")
    formInput.setAttribute("name", "initials");
    formContainer.appendChild(formInput);

    var formButton = document.createElement("button");
    formButton.setAttribute("type", "submit");
    formButton.className=("btn form-button");
    formButton.textContent = ("Sumbit");
    formContainer.appendChild(formButton);
    
    var initials = document.querySelector("#initials");

    formButton.addEventListener("click", function(){
        quizDoneEl.remove();
        headerEl.style.display="none";
        var playerScore = {
            player: initials.value.trim(),
            score: finalScore
        };

        allScores.push(playerScore);

        localStorage.setItem("allScores", JSON.stringify(allScores));

        highScore();

    })
}

var highScore = function() {
    
    var sortedScores= allScores.sort(function(firstItem, secondItem){return firstItem.score-secondItem.score} )
    sortedScores.reverse();
    console.log(sortedScores);

    var backContainerEl = document.createElement("div");
    backContainerEl.setAttribute("id", "goback-container");
    pageContentEl.appendChild(backContainerEl);

    var highScoreTitleEl = document.createElement("h1");
    highScoreTitleEl.setAttribute("id", "high-score-title");
    highScoreTitleEl.textContent = ("High Scores");
    backContainerEl.appendChild(highScoreTitleEl);

    var listContainerEl = document.createElement("ol");
    listContainerEl.setAttribute("id", "list-scores");
    backContainerEl.appendChild(listContainerEl);

    for (var i=0; i < sortedScores.length; i++) {
        var listPlayer = sortedScores[i].player;
        var listScore = sortedScores[i].score;

        var itemListEl = document.createElement("li");
        itemListEl.setAttribute("id", "list-child");
        listContainerEl.appendChild(itemListEl);
        itemListEl.textContent=(listPlayer +": "+ listScore);


    }

    var goBackBtnEL= document.createElement("button");
    goBackBtnEL.setAttribute("id", "go-back-btn")
    goBackBtnEL.className = ("btn go-back-btn");
    goBackBtnEL.textContent = ("Go Back");
    backContainerEl.appendChild(goBackBtnEL);

    var clearScoreBtnEL= document.createElement("button");
    clearScoreBtnEL.setAttribute("id", "clear-score-btn")
    clearScoreBtnEL.className = ("btn clear-score-btn");
    clearScoreBtnEL.textContent = ("Clear High Scores");
    backContainerEl.appendChild(clearScoreBtnEL);

    backContainerEl.addEventListener("click", function() {
        var targetEl = event.target ;
        if (targetEl.matches(".go-back-btn")) {
            location.reload();            
        } else if (targetEl.matches(".clear-score-btn")) {
            localStorage.clear();
            location.reload();
        }
    })
}


startingPage();
