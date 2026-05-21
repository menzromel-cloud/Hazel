// MESSAGE FUNCTION
function addMessage() {

  const input = document.getElementById("messageInput");

  const messageText = input.value.trim();

  if (messageText === "") {
    return;
  }

  const container = document.getElementById("messageContainer");

  const card = document.createElement("div");

  card.classList.add("message-card");

  card.innerHTML = `
    💖 ${messageText}
  `;

  container.appendChild(card);

  // SAVE IN BROWSER
  saveMessage(messageText);

  input.value = "";
}


// SAVE TO LOCAL STORAGE
function saveMessage(message) {

  let messages = JSON.parse(localStorage.getItem("hazelMessages")) || [];

  messages.push(message);

  localStorage.setItem("hazelMessages", JSON.stringify(messages));

}


// LOAD SAVED MESSAGES
window.onload = function () {

  const messages = JSON.parse(localStorage.getItem("hazelMessages")) || [];

  const container = document.getElementById("messageContainer");

  messages.forEach(message => {

    const card = document.createElement("div");

    card.classList.add("message-card");

    card.innerHTML = `💖 ${message}`;

    container.appendChild(card);

  });

};