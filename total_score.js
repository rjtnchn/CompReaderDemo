const finalScore1 = document.getElementById("finalScore1");
const mostRecentScore1 = localStorage.getItem("mostRecentScore1");
finalScore1.innerText = "Literal: " + mostRecentScore1 + "/" + "10";

const finalScore2 = document.getElementById("finalScore2");
const mostRecentScore2 = localStorage.getItem("mostRecentScore2");
finalScore2.innerText = "Inference: " + mostRecentScore2 + "/" + "10";

const finalScore3 = document.getElementById("finalScore3");
const mostRecentScore3 = localStorage.getItem("mostRecentScore3");
finalScore3.innerText = "Evaluative: " + mostRecentScore3 + "/" + "10";
