from itertools import product
import random
import time
import requests
from string import ascii_uppercase
import json

api = "https://stationpicker.nationalrail.co.uk/stationPicker/{search}"
headers = {
    "User-Agent": "Mozilla/5.0 (X11; Linux x86_64; rv:131.0) Gecko/20100101 Firefox/131.0",
    "Referer": "https://www.nationalrail.co.uk/",
    "Origin": "https://www.nationalrail.co.uk",
}


def read_json(file):
    try:
        with open(file) as data_file:
            database = json.load(data_file)
            return database
    except:
        return {}


def save_json(file, data):
    with open(file, "w") as x:
        json.dump(data, x, indent=2, sort_keys=True, ensure_ascii=False)


def scrapper(file_database):

    data = read_json(file_database)
    product_alpha = product(ascii_uppercase, repeat=3)

    count = 0
    for tup in product_alpha:
        combination = "".join(tup)

        print(combination)

        if combination in data:
            print(f"Skipping {combination}")
            continue

        r = requests.get(api.format(search=combination), headers=headers)
        r.raise_for_status()

        res = r.json()
        if res["status"] != "OK":
            raise ValueError()

        stations = res["payload"]["stations"]
        result = list(filter(lambda x: x["crsCode"] == combination, stations))

        data[combination] = result
        count += 1
        if count == 100 or combination == "ZZZ":
            print("Saving")
            save_json(file_database, data)
            count = 0
        time.sleep(random.uniform(0, 0.5))

    pass


if __name__ == "__main__":
    file_database = "./db/seeds/data/stations.json"
    scrapper(file_database)
