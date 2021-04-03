var meditate = document.getElementById("meditate");
var audio = document.querySelector('audio');
meditate.addEventListener("click", function () {
    console.log(meditate);
    audio.volume = 0.2;
    audio.play();
    const FULL_DASH_ARRAY = 283;
    const WARNING_THRESHOLD = 10;
    const ALERT_THRESHOLD = 5;
    const COLOR_CODES = {
        info: {
            color: "green"
        },
        warning: {
            color: "orange",
            threshold: WARNING_THRESHOLD
        },
        alert: {
            color: "red",
            threshold: ALERT_THRESHOLD
        }
    };
    var timelength = document.getElementById("time-length");
    console.log(timelength.value)
    const TIME_LIMIT = timelength.value;
    let timePassed = 0;
    let timeLeft = TIME_LIMIT;
    let timerInterval = null;
    let remainingPathColor = COLOR_CODES.info.color;
    document.getElementById("app").innerHTML = `
<div class="base-timer">
  <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <g class="base-timer__circle">
      <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
      <path
        id="base-timer-path-remaining"
        stroke-dasharray="283"
        class="base-timer__path-remaining ${remainingPathColor}"
        d="
          M 50, 50
          m -45, 0
          a 45,45 0 1,0 90,0
          a 45,45 0 1,0 -90,0
        "
      ></path>
    </g>
  </svg>
  <span id="base-timer-label" class="base-timer__label">${formatTime(
        timeLeft
    )}</span>
</div>
`;
    startTimer();
    function onTimesUp() {
        clearInterval(timerInterval);
    }
    function startTimer() {
        timerInterval = setInterval(() => {
            timePassed = timePassed += 1;
            timeLeft = TIME_LIMIT - timePassed;
            document.getElementById("base-timer-label").innerHTML = formatTime(
                timeLeft
            );
            setCircleDasharray();
            setRemainingPathColor(timeLeft);
            if (timeLeft === 0) {
                onTimesUp();
            }
        }, 1000);
    }
    function formatTime(time) {
        const minutes = Math.floor(time / 60);
        let seconds = time % 60;
        if (seconds < 10) {
            seconds = `0${seconds}`;
        }
        return `${minutes}:${seconds}`;
    }
    function setRemainingPathColor(timeLeft) {
        const { alert, warning, info } = COLOR_CODES;
        if (timeLeft <= alert.threshold) {
            document
                .getElementById("base-timer-path-remaining")
                .classList.remove(warning.color);
            document
                .getElementById("base-timer-path-remaining")
                .classList.add(alert.color);
        } else if (timeLeft <= warning.threshold) {
            document
                .getElementById("base-timer-path-remaining")
                .classList.remove(info.color);
            document
                .getElementById("base-timer-path-remaining")
                .classList.add(warning.color);
        }
    }
    function calculateTimeFraction() {
        const rawTimeFraction = timeLeft / TIME_LIMIT;
        return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
    }
    function setCircleDasharray() {
        const circleDasharray = `${(
            calculateTimeFraction() * FULL_DASH_ARRAY
        ).toFixed(0)} 283`;
        document
            .getElementById("base-timer-path-remaining")
            .setAttribute("stroke-dasharray", circleDasharray);
    }
});

var acceptanceArr = ['Happiness can only exist in Acceptance', 'No regrets..just lessons. No worries..just acceptance. No expectations..just gratitude', 'Accept then act.', 'Acceptance makes an incredible fertile soil for the seeds of change', 'Embrace the glorious mess that you are', 'Whatever comes let it come']
var patienceArr = ['Have patience with all things', 'Patience is not the ability to wait but the ability to keep a good attitude while waiting', 'Patience is bitter, but its fruit is sweet', "Patience is a virtue, and I'm learning patience is a tough lesson", "Patience is the ability to count down before you blast off"]
var balanceArr = ['Life is all about balance', 'Balance: stability found at the center of acceptance', 'Life is like riding a bike to keep you balanced you must keep moving', "Balance is not something you find, it's something you create", 'The key to finding a happy balance in modern life is simplicity', 'Find a balance in life']
var anxietyArr = ['Go easy on yourself, Whatever you do today, let it be enough', 'The way you speak to yourself matters', "Just because I can't explain the feelings causing why anxiety, doesn't make them less valid", 'Your anxiety is lying to you. You are loved and you are going to be okay.']
var stressArr = ["Don't stress the could haves, if it should have, it should have", 'The greatest weapon against stress is our ability to choose one thought over another', 'Today I refuse to stress myself out about things I cannot control or change', "It's not stress that kills us, it is our reaction to it", 'Stress and confusion come from being busy.Peace and clarity come from slowing down and stilling your waters']
var acceptance = document.getElementById('acceptance'); var balance = document.getElementById('balance'); var patience = document.getElementById('patience'); var anxiety = document.getElementById('anxiety'); var stress = document.getElementById('stress'); var displayQuote = document.getElementById('awnswerType'); acceptance.addEventListener('click', function () { var currentQuote = Math.floor(Math.random() * (acceptanceArr.length)); console.log(currentQuote); displayQuote.innerHTML = acceptanceArr[currentQuote]; })
patience.addEventListener('click', function () { var currentQuote = Math.floor(Math.random() * (patienceArr.length)); console.log(currentQuote); displayQuote.innerHTML = patienceArr[currentQuote]; })
balance.addEventListener('click', function () { var currentQuote = Math.floor(Math.random() * (balanceArr.length)); console.log(currentQuote); displayQuote.innerHTML = balanceArr[currentQuote]; })
anxiety.addEventListener('click', function () { var currentQuote = Math.floor(Math.random() * (anxietyArr.length)); console.log(currentQuote); displayQuote.innerHTML = anxietyArr[currentQuote]; })
stress.addEventListener('click', function () { var currentQuote = Math.floor(Math.random() * (stressArr.length)); console.log(currentQuote); displayQuote.innerHTML = stressArr[currentQuote]; })

