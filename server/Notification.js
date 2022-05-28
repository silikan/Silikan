var http = require("http").Server();
const cors = require("cors");
const { json } = require("express");
var io = require("socket.io")(http, {
    cors: {
        origin: ["http://localhost:8080", "http://localhost:8000"],
    },
});
var Redis = require("ioredis");

var redis = new Redis();

redis.on("pmessage", function(channel, message, data) {
    console.log("channel: " + channel);
    console.log("message: " + message);
    let notification = JSON.parse(data);
    io.sockets.in(channel).emit("notification", notification.data.notification);
});

io.on("connection", (socket) => {
    console.log("made socket connection", socket.id);

    socket.on("notificationRoom", function(room) {
        redis.psubscribe(room, function(err, count) {});
        socket.join(room);
    });

    socket.on("notification", function(data) {
        io.sockets
            .in(`notification-room-${data.data.room_id}`)
            .emit("notification", data.data);
    });
});

http.listen(4000, function() {
    console.log("Listening on Port: 4000");
});