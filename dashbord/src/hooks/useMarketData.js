import { useEffect, useState } from "react";
import socket from "../services/socket";

const useMarketData = () => {

    const [marketData, setMarketData] = useState([]);

    useEffect(() => {

        const handleMarketData = (data) => {
            console.log("Market data received:", data);
            setMarketData(data);
        };

        socket.on("market-data", handleMarketData);

        return () => {
            socket.off("market-data", handleMarketData);
        };

    }, []);

    return marketData;
};

export default useMarketData;