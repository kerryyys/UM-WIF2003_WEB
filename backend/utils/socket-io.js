import { Socket, Server } from "socket.io";
import { createServer } from "http";

let io;
let userSockets = {};

export const socketConnection = (httpServer) => {
  io = new Server(httpServer, {
    cors: {
      origin: "http://localhost:3000",
    },
  });
  io.on("connection", (socket) => {
    // io.emit for sending out events. First args is the event name, second args is the message or function
    // io.emit("firstEvent", "Hello this is from socket server!");
    console.log("Client connected to socket.");
    socket.on("register", (userId) => {
      userSockets[userId] = socket.id;
      socket.join(userId);
      console.log("Added new user into socket:" + userId);
    });

    socket.on("disconnect", () => {
      for (const userId in userSockets) {
        if (userSockets[userId] === socket.id) {
          delete userSockets[userId];
          console.log("User disconnected from socket: " + userId);
          break;
        }
      }
      console.log("Someone has disconnected from the socket.");
    });
  });
};

export const sendNotif = (userId, notification) => {
  console.log("Current socket users: " + JSON.stringify(userSockets));
  const socketId = userSockets[userId];
  if (socketId) {
    io.to(socketId).emit("sendNotif", notification);
  } else {
    console.log(`User ${userId} not connected.`);
  }
};
