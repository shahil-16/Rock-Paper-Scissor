let userScore = 0;
let compScore = 0 ;

const choices = document.querySelectorAll(".choice");

const genCompChoice = () => {
    const options = ["rock","paper","scissors"];
    Math.random()
    //R,S,P
}

const playGame = (userChoice) => {
    console.log("userChoice =", userChoice);
    // generate comp choice
};

choices.forEach((choice) => {
    choice.addEventListener("click", ()=> {
        const userChoice = choice.getAttribute("id");
        // console.log("choices was clicked", userChoice); 
        playGame(userChoice)
    });
});