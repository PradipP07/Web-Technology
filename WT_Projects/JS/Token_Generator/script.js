let tokenNumber = 0;
let currentServing = 0;
let queue = [];

const generateBtn = document.getElementById("generateBtn");
const userToken = document.getElementById("userToken");
const currentToken = document.getElementById("currentToken");
const queueList = document.getElementById("queueList");

// Generate token (DOM manipulation)
generateBtn.addEventListener("click", () => {
  tokenNumber++;
  queue.push(tokenNumber);

  userToken.textContent = tokenNumber;

  displayQueue();
});

// Display queue
function displayQueue() {
  queueList.innerHTML = "";

  queue.forEach(token => {
    const li = document.createElement("li");
    li.textContent = "Token " + token;
    queueList.appendChild(li);
  });
}

// Simulate serving tokens (Promise + setTimeout)
function serveNext() {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (queue.length > 0) {
        currentServing = queue.shift();
        currentToken.textContent = currentServing;
        displayQueue();
      }
      resolve();
    }, 30000); // serve every 30 seconds
  });
}

// Auto loop (async/await)
async function startServing() {
  while (true) {
    await serveNext();
  }
}

// Start system
startServing();