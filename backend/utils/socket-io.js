import { Socket, Server } from "socket.io";
import { createServer } from "http";

let io;
let onlineUsers = [];

const addNewUser = (userId, socketId) => {
  !onlineUsers.some((user) => user.userId === userId) &&
    onlineUsers.push({ userId, socketId });
};
const removeUser = (socketId) => {
  onlineUsers = onlineUsers.filter((user) => user.socketId !== socketId);
};

const getUser = (userId) => {
  return onlineUsers.find((user) => user.userId === userId);
};

export const socketConnection = (httpServer) => {
  io = new Server(httpServer, {
    cors: {
      origin: "http://localhost:3000",
    },
  });
  io.on("connection", (socket) => {
    // io.emit for sending out events. First args is the event name, second args is the message or function
    // io.emit("firstEvent", "Hello this is from socket server!");

    socket.on("newUser", (userId) => {
      addNewUser(userId, socket.id);
    });

    socket.on("disconnect", () => {
      console.log("Someone has disconnected from the socket.");
      removeUser(socket.id);
    });
  });
};
