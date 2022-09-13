function getComputerChoice() {
    let list = ["Rock", "Paper", "Scissors"];
    let randomChoiceComputer = list[Math.floor(Math.random() * list.length)];
    console.log(randomChoiceComputer);
}