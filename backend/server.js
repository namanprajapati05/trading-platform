require("dotenv").config();

const http = require("http");
const { Server } = require("socket.io");

const app = require("./index");
const setupMarketSocket = require("./websocket/marketSocket");

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "https://trading-dashboard-k3zagrska-namans-projects-b6811f1a.vercel.app",
        methods: ["GET", "POST"],
        credentials: true,
    },
});

// Python → Node
setupMarketSocket(server, io);

// React → Node
io.on("connection", (socket) => {
    console.log("React connected:", socket.id);

    socket.on("disconnect", () => {
        console.log("React disconnected:", socket.id);
    });
});

const PORT = process.env.PORT || 8000;

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
