// FUNCTION TO ADD MESSAGE
function addMessage() {

  // GET TEXTAREA VALUE
  const input = document.getElementById("messageInput");

  const messageText = input.value.trim();

  // STOP EMPTY MESSAGE
  if (messageText === "") {

    alert("Please enter a message 💖");

    return;
  }

  // GET CONTAINER
  const container = document.getElementById("messageContainer");

  // CREATE CARD
  const card = document.createElement("div");

  card.classList.add("message-card");

  card.innerHTML = `
    💖 ${messageText}
  `;

  // ADD CARD
  container.appendChild(card);

  // SAVE TO LOCAL STORAGE
  saveMessage(messageText);

  // CLEAR INPUT
  input.value = "";
}


// SAVE MESSAGES
function saveMessage(message) {

  let messages =
    JSON.parse(localStorage.getItem("hazelMessages"))
    || [];

  messages.push(message);

  localStorage.setItem(
    "hazelMessages",
    JSON.stringify(messages)
  );

}


// LOAD SAVED MESSAGES
window.onload = function () {

  const messages =
    JSON.parse(localStorage.getItem("hazelMessages"))
    || [];

  const container =
    document.getElementById("messageContainer");

  messages.forEach(message => {

    const card =
      document.createElement("div");

    card.classList.add("message-card");

    card.innerHTML = `
      💖 ${message}
    `;

    container.appendChild(card);

  });

};