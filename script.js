
function toggleMenu() {
    const navbarNav = document.getElementById('navbarNav');
    const navbarToggler = document.getElementById('navbarToggler');
    navbarNav.classList.toggle('show');
    navbarToggler.style.display = navbarNav.classList.contains('show') ? 'none' : 'inline-block';
}

function hideMenu() {
    const navbarNav = document.getElementById('navbarNav');
    navbarNav.classList.remove('show');
    document.getElementById('navbarToggler').style.display = 'inline-block';
}

document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            hideMenu();
        });
    });


    const navbar = document.querySelector('.navbar');
    navbar.addEventListener('mouseleave', function() {
        hideMenu();
    });
});
function randomImage() {
    var images = [
        { src: "img/butterfly.png", title: "papillon" },
        { src: "img/car.png", title: "voiture" },
        { src: "img/cat.png", title: "chat" },
        { src: "img/cow.png", title: "vache" },
        { src: "img/flower.png", title: "fleur" },
        { src: "img/tree.png", title: "arbre" }
    ];

    var randomIndex = Math.floor(Math.random() * images.length);
    var randomImage = images[randomIndex];
    document.getElementById("randomImage").src = randomImage.src;
    document.getElementById("randomImage").title = randomImage.title;
}

    function randomImage() {
      var images = [
        { src: "img/butterfly.png", title: "papillon" },
        { src: "img/car.png", title: "voiture" },
        { src: "img/cat.png", title: "chat" },
        { src: "img/cow.png", title: "vache" },
        { src: "img/flower.png", title: "fleur" },
        { src: "img/tree.png", title: "arbre" }
      ];

      var randomIndex = Math.floor(Math.random() * images.length);
      var randomImage = images[randomIndex];
      document.getElementById("randomImage").src = randomImage.src;
      document.getElementById("randomImage").title = randomImage.title;
    }
    function checkGuess1() {

        var userGuess = document.getElementById("guessInput").value.toLowerCase();
        var correctAnswer = document.getElementById("randomImage").title.toLowerCase();

        var resultText = "";
        if (userGuess === correctAnswer) {
            resultText = "Correct, vous n'êtes pas un robot :) Bienvenue !";
    
            setTimeout(function() {
                window.location.href = "main.html";
                }, 1500);
        } else {
            resultText = "Faux :/ Réessayez !";
        }
        document.getElementById("result").textContent = resultText;
    }
function checkGuess() {
    var userGuess = document.getElementById("guessInput").value.toLowerCase();
    var correctAnswer = document.getElementById("randomImage").title.toLowerCase();

    var resultText = "";
    if (userGuess === correctAnswer) {
        resultText = "Correct, vous n'êtes pas un robot :) Bienvenue !";
    } else {
        resultText = "Faux :/ Réessayez !";
    }
    document.getElementById("result").textContent = resultText;
}
document.getElementById("submitGuess").addEventListener("click", checkGuess1);
document.getElementById("submitGuess").addEventListener("click", checkGuess1); // 
window.onload = randomImage;
document.getElementById("submitGuessSimple").addEventListener("click", checkGuess); // 
window.onload = randomImage;


function sendEmail() {
    window.location.href = "mailto:77maryamkitty@gmail.com";
}

function callUs() {
    window.location.href = "tel:+0669440129";
}

document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('startButton');
    const audioElement = document.getElementById('audio');
    const questionElement = document.getElementById('question');
    const answerInput = document.getElementById('answerInput');
    const submitButton = document.getElementById('submitButton');
    const resultElement = document.getElementById('result');

    const sounds = [
        { name: 'chat', file: 'sounds/chat.mp3' },
        { name: 'chien', file: 'sounds/chien.mp3' },
        { name: 'porc', file: 'sounds/porc.mp3' }
        // Add more sounds as needed
    ];
    let currentSound = null;

    startButton.addEventListener('click', () => {
        console.log("Start button clicked");
        questionElement.textContent = '';
        resultElement.textContent = '';

        const utterance = new SpeechSynthesisUtterance("Quel animal entendez-vous ?");
        speechSynthesis.speak(utterance);

        utterance.onend = () => {
            console.log("Speech synthesis ended");
            playRandomSound();
        };
    });

    function playRandomSound() {
        const randomIndex = Math.floor(Math.random() * sounds.length);
        currentSound = sounds[randomIndex];
        console.log("Playing sound:", currentSound.name);

        audioElement.src = currentSound.file;
        audioElement.play();
    }

    submitButton.addEventListener('click', () => {
        console.log("Submit button clicked");
        const userAnswer = answerInput.value.trim().toLowerCase();

        if (userAnswer === currentSound.name) {
            resultElement.textContent = "Correct !";
        } else {
            resultElement.textContent = "Incorrect, essayez encore.";
        }
    });

    audioElement.addEventListener('error', (e) => {
        console.error("Audio playback error", e);
    });
});
