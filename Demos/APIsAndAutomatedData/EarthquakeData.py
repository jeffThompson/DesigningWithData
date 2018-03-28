
'''
EARTHQUAKE DATA
Jeff Thompson | 2018 | jeffreythompson.org

Data via a standard website is great for average users, and FTP servers hold
buried treasure but take a ton of work to find. But sometimes we want to work
with really big data, or data that's hard to get to, or just don't want to process
a bunch of stuff by hand. That's where programming really makes a difference.

In this example, we'll get earthquake data from the US Geological Survey site,
parse it and extract specific bits of data, then save that to a new csv file!

You can find more about this data, and the other versions, here:
https://earthquake.usgs.gov/earthquakes/feed/v1.0/csv.php

'''

import requests		# a library for getting the data from the site
import csv			# for formatting the data, and for saving new csv files


# the url to daily earthquake data - see above for other options!
url = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.csv'


# let's get some data!
print 'getting data...'
response = requests.get(url)		# send the request
data_string = response.content		# extract the data

# our data comes to us as a really long string of text, not separated
# nicely into separate fields
# we can use the csv library to parse our data for us into a tidy list
data = csv.reader(data_string.splitlines(), delimiter=',')
data = list(data)

# from that, we can see how many earthquakes are in the data file by
# counting the number of elements in the list!
num_earthquakes = len(data)
print '- found ' + str(num_earthquakes) + ' earthquakes!'

# we can also access specific earthquakes by their 'index' (position) in
# the list (note: the first item is at index 0, not 1!)
# the first listing is actually the header, describing the data
print 'data fields:'
header = data[0]
print header

# the first earthquake is at index #1
print 'data for the first earthquake:'
first = data[1]
print first

# we can then use a 'for loop' to walk through all the data
# let's find the average magnitude for the day's earthquakes
print 'calculating average magnitude...'

# first, we have to remove the header, since it doesn't contain actual data
del data[0]

# then add up all the magnitudes!
total_mag = 0
for quake in data:
	mag = float(quake[3])			# magnitude is the 3rd element, convert it to a decimal value
	total_mag = total_mag + mag 	# add to the total!

# calculate the average
num_quakes = len(data)				# updated # quakes, since we've removed the header
average = num_quakes / total_mag 	# divide by the total magnitude
print '- ' + str(average)

# we can also make a new csv file using a portion of the data!
locations = []
for quake in data:
	
	# get the data we want
	quake_id = quake[11]		# the unique id, a string of text
	lat =      float(quake[1])	# latitude, converted to a decimal number
	lon =      float(quake[2])	# same for longitude

	# combine into a list
	items = [ quake_id, lat, lon ]

	# and add to the output
	locations.append(items)

# and create a new header for our file
header = [ 'id', 'lat', 'lon' ]

# with all the data in hand, we can use the csv library to save it to file
# this mega-line opens a file in 'write' and 'binary' mode
with open('EarthquakeLocations.csv', 'wb') as f:
	
	# create a 'csv writer' to save the data
	output = csv.writer(f)

	# add the header we made
	output.writerow(header)

	# then add all the location data too
	for location in locations:
		output.writerow(location)

# you can now open your data in excel to do further processing!

