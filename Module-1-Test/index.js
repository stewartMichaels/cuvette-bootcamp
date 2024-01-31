// DOM for RULES
const rulesBtn = document.querySelector(".rules-btn");
const closeBtn = document.querySelector(".close-btn");
const rules = document.querySelector(".rules");

//DOM for WINNER RIPPLE
const playerWinIndicator = document.getElementById('playerWinIndicator');
const pcWinIndicator = document.getElementById('pcWinIndicator');

// DOM for Score
const pcScoreElement = document.querySelector(".computer-score");
let pcInitialScore = 0;

const userScoreElement = document.querySelector(".your-score");
let userInitialScore = 0;

//DOM for NEXT BUTTON
const nextBtn = document.querySelector(".next-btn");

nextBtn.disabled = true;

nextBtn.addEventListener("click", () => {
    const sectionsToDisable = document.querySelectorAll(".container, .result-container");

    sectionsToDisable.forEach((section) => {
        section.classList.toggle("disabled-section")
    });


    const sectionsToToggle = document.querySelector(".hurray");

    sectionsToToggle.classList.toggle("disabled-section");

    nextBtn.disabled = true;
})


//DOM for Items Picked
const itemsPicked = [
    {
        name: 'rock',
        beats: 'scissors'
    },
    {
        name: 'scissors',
        beats: 'paper'
    },
    {
        name: 'paper',
        beats: 'rock'
    }
]

const pickBtn = document.querySelectorAll(".rps-card");
const gameSection = document.querySelector(".game");
const resultsSection = document.querySelector(".result-container");
const pickedCard = document.querySelectorAll(".picked-card");

// DOM for ANNOUNCEMENT
const resultWinner = document.querySelector(".win-lose-draw");
const resultDrawBtn = document.querySelector(".play-again-btn");


// GAME LOGIC (headache)
pickBtn.forEach(button => {
    button.addEventListener('click', () => {

        // console.log('Working');

        const itemName = button.dataset.rps;
        const rps = itemsPicked.find(rps => rps.name == itemName);

        // console.log(rps);

        picked(rps);
    })
})

function picked(rps) {

    const pcPicks = pcPicked();
    displayResults([rps, pcPicks]);
}


function pcPicked() {
    const random = Math.floor(Math.random() * itemsPicked.length);

    return itemsPicked[random];
}

function displayResults(results) {
    pickedCard.forEach((pickedCard, index) => {
        requestAnimationFrame(() => {
            pickedCard.innerHTML = `
                <div class="rps ${results[index].name}">
                <img src="./assets/${results[index].name}.png" alt="${results[index].name}" />
                </div>
            `;
        });
    });

    // announcement settings
    const userPick = results[0].name;
    const pcPick = results[1].name;

    if (userPick === pcPick) {
        resultWinner.innerHTML = `<p class="if-draw">
        <span id="winner">TIE UP</span>
        <br />
      </p>`;
        resultDrawBtn.textContent = "REPLAY";

        // Ripple Visibility
        playerWinIndicator.classList.add('disabled');
        pcWinIndicator.classList.add('disabled');

        // rules button position
        console.log("Resetting rules button position");
        rulesBtn.style.right = "50px";
    }

    else if (itemsPicked.find(item => item.name === userPick).beats === pcPick) {
        resultWinner.innerHTML = `<p class="if-draw">
        <span id="winner">YOU WIN</span>
        <br />
        AGAINST PC
        </p>`;
        keepScore("userWin");

        // Ripple Visibility
        playerWinIndicator.classList.remove('disabled');
        pcWinIndicator.classList.add('disabled');

        nextBtn.disabled = false;

        // rules button position
        rulesBtn.style.right = "220px";

    }

    else {
        resultWinner.innerHTML = `<p class="if-draw">
        <span id="winner">YOU LOST</span>
        <br />
        AGAINST PC
        </p>`;
        keepScore("pcWin");

        // Ripple Visibility
        playerWinIndicator.classList.add('disabled');
        pcWinIndicator.classList.remove('disabled');

        // rules button position
        rulesBtn.style.right = "50px";

    }

    // console log before toggle
    // console.log('Before toggle - gameSection:', gameSection.classList);
    // console.log('Before toggle - resultsSection:', resultsSection.classList);

    gameSection.classList.toggle('hidden');
    resultsSection.classList.toggle('hidden');

    // console log after toggle
    // console.log('After toggle - gameSection:', gameSection.classList);
    // console.log('After toggle - resultsSection:', resultsSection.classList);
}



// FUNCTION FOR SCORE
function keepScore(result) {
    if (result === 'userWin') {
        userInitialScore++;
    }

    else if (result === 'pcWin') {
        pcInitialScore++;
    }

    userScoreElement.innerHTML = userInitialScore;
    pcScoreElement.innerHTML = pcInitialScore;

    // local Storage
    localStorage.setItem('userScore', userInitialScore);
    localStorage.setItem('pcScore', pcInitialScore);
}

// Retrieve Local Storage Score
window.addEventListener('load', () => {
    userInitialScore = parseInt(localStorage.getItem("userScore")) || 0;
    pcInitialScore = parseInt(localStorage.getItem("pcScore")) || 0;

    userScoreElement.innerHTML = userInitialScore;
    pcScoreElement.innerHTML = pcInitialScore;
})

// RULES TO HIDE OR VIEW
// always open by default
rules.classList.add('view-rules');

// Rules Button (add)
rulesBtn.addEventListener('click', () => {
    rules.classList.add('view-rules')
});


// Close Button (remove)
closeBtn.addEventListener('click', () => {
    rules.classList.remove('view-rules')
});


// PLAY AGAIN BUTTON
const playAgainBtn = document.querySelector(".play-again-btn");
const playAgainBtnHurray = document.querySelector(".hurray .play-again-btn")

playAgainBtn.addEventListener('click', () => {
    gameSection.classList.remove('hidden');
    resultsSection.classList.add('hidden');

});

playAgainBtnHurray.addEventListener('click', () => {

    const sectionsToDisable = document.querySelectorAll(".container, .result-container");

    sectionsToDisable.forEach((section) => {
        section.classList.toggle("disabled-section")
    });


    const sectionsToToggle = document.querySelector(".hurray");

    sectionsToToggle.classList.toggle("disabled-section");

    nextBtn.disabled = true;
});