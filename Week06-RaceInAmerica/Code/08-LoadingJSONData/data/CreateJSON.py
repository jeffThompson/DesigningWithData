'''
CREATE JSON
Jeff Thompson | 2021 | jeffreythompson.org

Little utility that converts CSV data to JSON
format. You'll need to change the elements below
based on your CSV headers.

'''

import csv, json

passengers = []
with open('TitanicPassengers.csv', mode='r') as csv_file:
  reader = csv.DictReader(csv_file)
  line_count = 0
  for row in reader:
    if line_count == 0:
      line_count += 1
    else:
      p = {
        'name': row['name'],
        'sex': row['sex'],
        'age': row['age'],
        'survived': row['survived'],
        'passenger_class': row['passenger_class']
      }
      passengers.append(p)

with open('TitanicPassengers.json', 'w') as f:
  json.dump(passengers, f, indent=2, sort_keys=True)

