// Variables
let countdown;
const displayMinutes = document.getElementById('displayMinutes');
const displaySeconds = document.getElementById('displaySeconds');
const minutesInput = document.getElementById('minutes');
const secondsInput = document.getElementById('seconds');
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');

// Función para actualizar el temporizador
function updateTimer() {
    let minutes = parseInt(minutesInput.value);
    let seconds = parseInt(secondsInput.value);

    if (minutes === 0 && seconds === 0) {
        clearInterval(countdown);
        alert('¡Tiempo agotado!');
        minutesInput.disabled = false;
        secondsInput.disabled = false;
        startButton.disabled = false;
    } else if (seconds === 0) {
        minutes--;
        seconds = 59;
    } else {
        seconds--;
    }

    displayMinutes.textContent = minutes;
    displaySeconds.textContent = seconds;
    minutesInput.value = minutes;
    secondsInput.value = seconds;
}

// Evento al hacer clic en el botón "Iniciar"
startButton.addEventListener('click', () => {
    let totalSeconds = parseInt(minutesInput.value) * 60 + parseInt(secondsInput.value);
    if (totalSeconds > 0) {
        minutesInput.disabled = true;
        secondsInput.disabled = true;
        startButton.disabled = true;
        countdown = setInterval(updateTimer, 1000);
        updateTimer();
    }
});

// Evento al hacer clic en el botón "Detener"
stopButton.addEventListener('click', () => {
    clearInterval(countdown);
    minutesInput.value = 0;
    secondsInput.value = 0;
    displayMinutes.textContent = 0;
    displaySeconds.textContent = 0;
    minutesInput.disabled = false;
    secondsInput.disabled = false;
    startButton.disabled = false;
});


