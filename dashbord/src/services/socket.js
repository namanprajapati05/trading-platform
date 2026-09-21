import { io } from "socket.io-client";

const socket = io("https://backend.getvoroa.com", {
    withCredentials: true,
    transports: ["polling"],
    
});

export default socket;