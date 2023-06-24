// Global variables
var startTime, endTime;
var sentence = document.getElementById("sentence").innerText.trim();
var userInput = document.getElementById("user-input");
var startBtn = document.getElementById("start-btn");
var stopBtn = document.getElementById("stop-btn");
var timer = document.getElementById("timer");
var result = document.getElementById("result");
var duration = 60; // Set the duration to 60 seconds

startBtn.addEventListener("click", startTest);
stopBtn.addEventListener("click", stopTest);

function startTest() {
  userInput.disabled = false;
  userInput.focus();
  userInput.value = "";
  startBtn.disabled = true;
  stopBtn.disabled = false;
  timer.innerText = "Timer: 0s";
  result.innerText = "";

  startTime = new Date().getTime();
  var interval = setInterval(function () {
    var currentTime = new Date().getTime();
    var elapsedTime = (currentTime - startTime) / 1000;

    if (elapsedTime >= duration) {
      stopTest();
      clearInterval(interval);
      return;
    }

    timer.innerText = "Timer: " + elapsedTime.toFixed(1) + "s";
  }, 100);

  stopBtn.addEventListener("click", function () {
    clearInterval(interval);
    stopTest();
  });
}

function stopTest() {
  userInput.disabled = true;
  startBtn.disabled = false;
  stopBtn.disabled = true;

  endTime = new Date().getTime();
  var elapsedTime = (endTime - startTime) / 1000;
  timer.innerText = "Timer: " + elapsedTime.toFixed(1) + "s";

  var inputText = userInput.value.trim();
  var matchCount = getMatchCount(inputText, sentence);
  var mistakeCount = Math.abs(sentence.length - inputText.length - matchCount);
  var wordCount = inputText.split(" ").length;
  var accuracy = ((matchCount / sentence.length) * 100).toFixed(1);

  result.innerHTML = "Matches: " + matchCount + "<br>";
  result.innerHTML += "Mistakes: " + mistakeCount + "<br>";
  result.innerHTML += "Words: " + wordCount + "<br>";
  result.innerHTML += "Accuracy: " + accuracy + "%";
}

function getMatchCount(input, target) {
  var count = 0;
  for (var i = 0; i < Math.min(input.length, target.length); i++) {
    if (input[i] === target[i]) {
      count++;
    }
  }
  return count;
}
