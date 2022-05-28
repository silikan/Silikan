var http = require("http").Server();
const cors = require("cors");
var io = require("socket.io")(http, {
    cors: {
        origin: ["http://localhost:8080", "http://localhost:8000"],
    },
});
var Redis = require("ioredis");

var redis = new Redis();
redis.on("messages", function () {});

io.on("connection", (socket) => {
    console.log("made socket connection", socket.id);

    socket.on("room", function (room) {
        redis.subscribe(room, function (err, count) {});
        console.log("subscribed to room: " + room);
        socket.join(room);
    });

    socket.on("message", function (data) {
        io.sockets.in(`room-${data.data.room_id}`).emit("message", data.data);
    });

    socket.on("typing", function (data) {
        socket.broadcast.emit("typing", data);
    });
});

http.listen(3000, function () {
    console.log("Listening on Port: 3000");
});
