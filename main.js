const leftNum = document.querySelector(".leftNum");
const centerNum = document.querySelector(".centerNum");
const rightNum = document.querySelector(".rightNum");
const startBtn = document.querySelector(".startBtn");
const leftStopBtn = document.querySelector(".leftStopBtn");
const centerStopBtn = document.querySelector(".centerStopBtn");
const rightStopBtn = document.querySelector(".rightStopBtn");

let leftIntervalId;
let centerIntervalId;
let rightIntervalId;

let count = 0;

function slotNum(numberElement, number) {
  return function () {
    numberElement.textContent = number;
    number++;
    if (number === 10) {
      number = 0;
    }
  };
}

startBtn.addEventListener("click", function () {
  leftStopBtn.removeAttribute("disabled");
  centerStopBtn.removeAttribute("disabled");
  rightStopBtn.removeAttribute("disabled");

  let leftNumber = 0;
  let centerNumber = 0;
  let rightNumber = 0;

  leftIntervalId = setInterval(slotNum(leftNum, leftNumber), 100);
  centerIntervalId = setInterval(slotNum(centerNum, centerNumber), 100);
  rightIntervalId = setInterval(slotNum(rightNum, rightNumber), 100);

  startBtn.addEventListener("click", function () {
    stopInterval(leftIntervalId);
    stopInterval(centerIntervalId);
    stopInterval(rightIntervalId);
  });
});

function stopInterval(intervalId) {
  clearInterval(intervalId);
}

leftStopBtn.addEventListener("click", function () {
  stopInterval(leftIntervalId);
  count++;
  button.disabled = false;

  if (count === 3) {
    checkMatch();
  }
});

centerStopBtn.addEventListener("click", function () {
  stopInterval(centerIntervalId);
  count++;

  if (count === 3) {
    checkMatch();
  }
});

rightStopBtn.addEventListener("click", function () {
  stopInterval(rightIntervalId);
  count++;

  if (count === 3) {
    checkMatch();
  }
});

function checkMatch() {
   if (
    leftNum.textContent === centerNum.textContent &&
    centerNum.textContent === rightNum.textContent
  ) {
    alert("やったね！");
  } else {
    alert("残念！");
  }
  // リロード
  location.reload();
};

// 3つの数字が一致するかどうかを確認
