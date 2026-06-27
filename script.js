const letters = [
    "A",
    "B",
    "C",
    "D",
    "E"
];

const animals = [
    "giraffe.png",
    "lion.png",
    "monkey.png",
    "crocodile.png",
    "flamingo.png"
];
const compliments = [
    "🎉 Great Job!",
    "⭐ Fantastic!",
    "🦒 Amazing!",
    "🐵 Super Work!",
    "🦁 Roar-some!",
    "🦩 You're Awesome!"
];


const speechMessages = [
    "Can you find the letter?",
    "Let's learn together!",
    "You're doing great!",
    "Ready for another one?",
    "Safari learning is fun!"
];



let currentLetter = "";
let score = 0;
let currentAudio = null;



function startGame() {

    document.getElementById("startScreen")
        .style.display = "none";

    document.getElementById("gameScreen")
        .style.display = "block";

    nextQuestion();
}



function playLetterSound(letter) {



    if (currentAudio) {

        currentAudio.pause();
        currentAudio.currentTime = 0;
    }

    currentAudio = new Audio(`audio/${letter}.mp3`);

    currentAudio.play();
}


function showRandomAnimal() {

    const randomAnimal =
        animals[
            Math.floor(
                Math.random() * animals.length
            )
        ];

    document.getElementById("animalFriend")
        .src =
        "images/" + randomAnimal;

    const randomMessage =
        speechMessages[
            Math.floor(
                Math.random() *
                speechMessages.length
            )
        ];

    document.getElementById("speechBubble")
        .textContent =
        randomMessage;


    document.getElementById("animalFriend")
        .onclick = function () {

            playLetterSound(currentLetter);
        };
}


function createChoices() {

    const choicesDiv =
        document.getElementById("choices");

    choicesDiv.innerHTML = "";

    letters.forEach(letter => {

        const button =
            document.createElement("button");

        button.textContent = letter;

        button.onclick = function () {

            checkAnswer(letter);
        };

        choicesDiv.appendChild(button);
    });
}


function nextQuestion() {

    const card =
        document.querySelector(".game-card");

    card.style.opacity = "0";

    setTimeout(() => {

        const randomIndex =
            Math.floor(
                Math.random() *
                letters.length
            );

        currentLetter =
            letters[randomIndex];

        document.getElementById("letter")
            .textContent =
            currentLetter;

        document.getElementById("feedback")
            .textContent = "";

        showRandomAnimal();

        createChoices();

        playLetterSound(currentLetter);

        card.style.opacity = "1";

    }, 300);
}

function checkAnswer(answer) {

    if (answer === currentLetter) {

        score++;

        const compliment =
            compliments[
                Math.floor(
                    Math.random() *
                    compliments.length
                )
            ];

        document.getElementById("feedback")
            .textContent =
            compliment;

    } else {

        document.getElementById("feedback")
            .textContent =
            "❌ Try Again!";
    }

    document.getElementById("score")
        .textContent =
        score;
}