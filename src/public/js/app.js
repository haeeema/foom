const socket = io();

const welcome = document.getElementById("welcome");
const form = welcome.querySelector("form");
const room = document.getElementById("room");

room.hidden = true;
let roomName;

function showRoom() {
  welcome.hidden = true;
  room.hidden = false;
  const h3 = room.querySelector("h3");
  h3.innerText = `Room ${roomName}`;
}

function handleRoomSubmit(event) {
  event.preventDefault();
  const input = form.querySelector("input");
  socket.emit("enter_room", input.value, showRoom);
  // 1. We can <emit> a specific event whatever name that we want.
  // 2. We can send objects we do not have to send only strings.
  // 3. We can call a function from our server.
  roomName = input.value;
  input.value = "";
}

form.addEventListener("submit", handleRoomSubmit);
