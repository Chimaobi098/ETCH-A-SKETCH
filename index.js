const container = document.querySelector("#container");
const clearBtn = document.querySelector(".clear");
const eraserBtn = document.querySelector(".eraser");
const blackBtn = document.querySelector(".black");
const rainbowBtn = document.querySelector(".rainbow");
const slider = document.querySelector("#myRange");
const display = document.querySelector("#display");

// Event listeners
clearBtn.addEventListener("click", clearAll);
eraserBtn.addEventListener("click", erase);
blackBtn.addEventListener("click", colorBlack);
rainbowBtn.addEventListener("click", colorRandom);

// Loop Logic for creating a 16 x 16 grid
for (let i = 0; i < slider.value * slider.value; i++) {
  const square = document.createElement("div");
  //   square.setAttribute("style", "border:2px solid black");
  container.appendChild(square);
  square.addEventListener("mouseover", defaultBlack);
}

// Slider display value
const displayValue = document.createElement("p");
displayValue.setAttribute(
  "style",
  "text-align:center; font-size:2rem; margin-top:2rem"
);
displayValue.textContent = slider.value + " x " + slider.value;
display.appendChild(displayValue);

//  silder value update and LOGIC
slider.addEventListener("input", drag);

function drag() {
  clearAll();
  container.style.gridTemplateColumns = "repeat(" + slider.value + ", 1fr)";
  container.style.gridTemplateRows = "repeat(" + slider.value + ", 1fr)";

  for (let i = 0; i < slider.value * slider.value; i++) {
    const square = document.createElement("div");
    //   square.setAttribute("style", "border:2px solid black");
    container.appendChild(square);
    square.addEventListener("mouseover", defaultBlack);
  }

  displayValue.textContent = slider.value + " x " + slider.value;
}

//default  coloring function
function defaultBlack(e) {
  e.target.style.backgroundColor = "black";
}

// Clear all function
function clearAll() {
  const squares = document.querySelectorAll("#container > div");

  Array.from(squares).forEach((square) => {
    square.style.backgroundColor = "white";
  });
}

// Eraser function
function erase() {
  const squares = document.querySelectorAll("#container > div");

  function colorWhite(e) {
    e.target.style.backgroundColor = "white";
  }

  Array.from(squares).forEach((square) => {
    square.addEventListener("mouseover", colorWhite);
  });
}

// Coloring black button function

function colorBlack() {
  const squares = document.querySelectorAll("#container > div");

  function black(e) {
    e.target.style.backgroundColor = "black";
  }

  Array.from(squares).forEach((square) => {
    square.addEventListener("mouseover", black);
  });
}

// Rainbow button function
function colorRandom() {
  const squares = document.querySelectorAll("#container > div");

  function rainbow(e) {
    let random = Math.floor(Math.random() * 256);
    let random2 = Math.floor(Math.random() * 256);
    let random3 = Math.floor(Math.random() * 256);
    e.target.style.backgroundColor =
      "rgb(" + random + "," + random2 + "," + random3 + ")";
  }

  Array.from(squares).forEach((square) => {
    square.addEventListener("mouseover", rainbow);
  });
}
