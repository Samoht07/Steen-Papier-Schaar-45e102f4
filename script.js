var spelerkeuze;
var tegenstander;
var keuze1 = "Jouw keuze is " + spelerkeuze + ". Speler " + tegenstander
var win = " Je hebt gewonnen!";
var verlies = " Je hebt verloren!";
var gelijk = " Gelijkspel!";

var winner = document.getElementById('winner');
var verliesr = document.getElementById('verliesr');
var gelijkd = document.getElementById('gelijkd');
var rock = document.getElementById("rock");
var paper = document.getElementById("paper");
var scissors = document.getElementById("scissors");
var myChoice = document.getElementById("myChoice");
var cpuChoice = document.getElementById("cpuChoice");
var verdict = document.getElementById("verdict");


rock.addEventListener("click", function() {
    spelerkeuze = 0;
    myChoice.innerHTML = "Je hebt steen gekozen!";
    checkTegenstander();
    compare();
});
paper.addEventListener("click", function() {
    spelerkeuze = 1;
    myChoice.innerHTML = "Je hebt papier gekozen!";
    checkTegenstander();
    compare();
});
scissors.addEventListener("click", function() {
    spelerkeuze = 2;
    myChoice.innerHTML = "Je hebt schaar gekozen";
    checkTegenstander();
    compare();
});


function checkTegenstander() {

    randomNum = Math.floor(Math.random() * 3);


    if (randomNum === 0) {
        tegenstander = "steen";
    } else if (randomNum === 1) {
        tegenstander = "papier";
    } else {
        tegenstander = "schaar";
    }
    console.log('Speler koos ' + tegenstander);
}


function resultsgelijk() {
    verdict.innerHTML = gelijk;
    winner.style.display = 'none';
    verliesr.style.display = 'none';
    gelijkd.style.display = 'block';
}

function resultsWinner() {
    verdict.innerHTML = win;
    winner.style.display = 'block';
    verliesr.style.display = 'none';
    gelijkd.style.display = 'none';
}

function resultsverliesr() {
    verdict.innerHTML = verlies;
    winner.style.display = 'none';
    verliesr.style.display = 'block';
    gelijkd.style.display = 'none';
}


function compare() {
    if (spelerkeuze === randomNum) {
        resultsgelijk();
    } else if (spelerkeuze === 0 && randomNum === 1) {
        resultsverliesr();
    } else if (spelerkeuze === 0 && randomNum === 2) {
        resultsWinner();
    }


    if (spelerkeuze === 1 && randomNum === 0) {
        resultsWinner();
    } else if (spelerkeuze === 1 && randomNum === 2) {
        resultsverliesr();
    }


    if (spelerkeuze === 2 && randomNum === 0) {
        resultsverliesr();
    } else if (spelerkeuze === 2 && randomNum === 1) {
        resultsWinner();
    }

    cpuChoice.innerHTML = "Speler koos: " + tegenstander;
}