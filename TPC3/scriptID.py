import json

ficheiro = open("dataset-extra1.json", "r")
data = json.load(ficheiro)

for i in range(len(data['pessoas'])):
    data['pessoas'][i]['id'] = i + 1

with open("dataset-extra1.json", "w") as f:
    json.dump(data, f, indent=4)