const WebSocket = require("ws");

function setupMarketSocket(server, io) {
    const wss = new WebSocket.Server({
        server,
        path: "/market-data",
    });

    wss.on("connection", (ws) => {
        console.log("Python connected to market WebSocket");

        ws.on("message", (message) => {
            try {
                const marketData = JSON.parse(message);

                console.log(
                    "Market data received:",
                    marketData.length,
                    "stocks"
                );

                // Send live data to all React clients
                io.emit("market-data", marketData);

            } catch (error) {
                console.log("Invalid market data:", error);
            }
        });

        ws.on("close", () => {
            console.log("Python disconnected");
        });

        ws.on("error", (error) => {
            console.log("WebSocket error:", error);
        });
    });

    return wss;
}

module.exports = setupMarketSocket;