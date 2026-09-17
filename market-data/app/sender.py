import json
import time
import websocket

from market_data import get_all_market_data
from config import NODE_SERVER_URL


def main():

    ws_url = NODE_SERVER_URL.replace(
        "http://", "ws://"
    ).replace(
        "https://", "wss://"
    )

    ws_url = f"{ws_url}/market-data"

    print("Connecting to:", ws_url)

    ws = websocket.create_connection(ws_url)

    print("WebSocket connected")

    while True:

        try:

            start_time = time.time()

            data = get_all_market_data()

            payload = json.dumps(data)

            ws.send(payload)

            end_time = time.time()

            print(
                f"Market data sent | "
                f"{len(data)} stocks | "
                f"Fetch time: {round(end_time - start_time, 2)} sec"
            )

            time.sleep(1)

        except Exception as error:

            print("Error:", error)
            break

    ws.close()


if __name__ == "__main__":
    main()