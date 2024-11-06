const socket = io()

const txt = document.getElementById("mensaje")
socket.emit("message", txt)

