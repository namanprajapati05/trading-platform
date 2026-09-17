import json
import time
from urllib.request import Request, urlopen
from concurrent.futures import ThreadPoolExecutor, as_completed


SYMBOLS = [
    "BANKINDIA.NS",
    "BANKBARODA.NS",
    "IRFC.NS",
    "IREDA.NS",
    "^BSESN",
    "^NSEI",
    "PNB.NS",
    "RVNL.NS",
    "IDEA.NS",

    "ICICIBANK.NS",
    "SBIN.NS",
    "WIPRO.NS",
    "TCS.NS",
    "INFY.NS",
    "ITC.NS",
    "RELIANCE.NS",
    "HDFCBANK.NS",
    "BHARTIARTL.NS"
]


def get_market_data(symbol):

    url = f"https://query1.finance.yahoo.com/v8/finance/chart/{symbol}"

    request = Request(
        url,
        headers={
            "User-Agent": "Mozilla/5.0"
        }
    )

    with urlopen(request, timeout=10) as response:
        data = json.loads(response.read().decode("utf-8"))

    result = data["chart"]["result"][0]
    meta = result["meta"]

    price = meta.get("regularMarketPrice")
    previous_close = meta.get("previousClose")

    change = None
    change_percent = None

    if price is not None and previous_close:
        change = price - previous_close
        change_percent = (change / previous_close) * 100

    return {
        "symbol": symbol,
        "price": price,
        "previousClose": previous_close,
        "change": round(change, 2) if change is not None else None,
        "changePercent": round(change_percent, 2)
        if change_percent is not None else None
    }


def get_all_market_data():

    market_data = []

    # Fetch all stocks in parallel
    with ThreadPoolExecutor(max_workers=18) as executor:

        futures = {
            executor.submit(get_market_data, symbol): symbol
            for symbol in SYMBOLS
        }

        for future in as_completed(futures):

            symbol = futures[future]

            try:

                data = future.result()
                market_data.append(data)

            except Exception as error:

                print(f"Error fetching {symbol}: {error}")

    return market_data


if __name__ == "__main__":

    while True:

        print("\n----- MARKET DATA -----")

        start_time = time.time()

        data = get_all_market_data()

        for stock in data:
            print(stock)

        end_time = time.time()

        print("-----------------------")

        print(
            f"Fetch time: {round(end_time - start_time, 2)} seconds"
        )

        time.sleep(1)