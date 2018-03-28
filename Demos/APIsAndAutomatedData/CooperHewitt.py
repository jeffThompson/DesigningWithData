
'''
COOPER HEWITT API
Jeff Thompson | 2018 | jeffreythompson.org

An API, or Application Program Interface, is a system for querying and accessing 
data from a website in an automated way using code. APIs generally return results 
in a nice format like JSON, and even paginate data so you can get a ton of data a 
little at a time!

APIs are becoming more and more common, and are part of an approach called
RESTful web design. REST stands for REpresentational State Transfer, but you can
think of it as the web (HTTP) plus commands to GET and PUT data via code, and 
helpful error codes when things go wrong.

In this example, we'll query from the Cooper Hewitt's extensive collection data.
Some of the code below is pretty simple and just gets us a JSON file, which might
be enough for you to start digging. For those more inclined to play with code,
we can then automatically parse and process the data right here, giving us only
the results we want and letting our script do all the work!

Don't worry if all the code here doesn't make sense - for this assignment, your
only requirement is to get data via the API.

CREATING YOUR ACCOUNT
In order to access the API, you need to sign up for an 'access token', essentially
a password. This lets the organization be sure no one is spamming their system 
or using it in ways that violate their terms.

1. Create a free account using your email: https://you.cooperhewitt.org/signup
2. Create an access token, giving it 'read' permission  
3. Agree to the terms (TLDR: be nice and don't abuse the system)  
4. Copy your access token below - if you lose it, you can find it on the CH site

WHAT CAN I DO WITH THIS?
Some APIs are incredibly well-documented, some not at all, and many are in between.
The Cooper Hewitt API has some documentation, but it will take a little digging and
experimentation to see what you can do with it.

You can find most everything here: https://collection.cooperhewitt.org/api/methods

Or download some data, see what's there, and keep hacking and playing!

'''

import requests					# a library for making the request to the api
import json 					# for formatting the raw json into a file
from pprint import pprint		# for printing json in a clean, easy-to-read way


# SETUP VARIABLES
# first, we need to define some things for our code (these are called variables)
# for most apis, we create a url with all the parameters we want in it

# the access token we created
token = 'bde38336a737fda272ac6a053b5c705b'

# what do you want to search for?
query = 'paper'

# how many results to ask for (max 500, or more using page_num below)
results_per_page = 100

# which page of results to get?
# useful if you want to gather *lots* of data
page_num = 1

# format the query url
# (note that we have to convert numbers into strings using the str() command)
url = 'https://api.collection.cooperhewitt.org/rest/?method=cooperhewitt.search.objects&access_token=' + token + '&query=' + query + '&page=' +str(page_num) + '&per_page=' + str(results_per_page)


# GET SOME DATA!
# we can now send those variables, encoded in a url, up to the Cooper Hewitt site,
# get data back, and see what's there

# make the request to the api
print 'making request...'
response = requests.get(url)	# send the request
data = response.json()			# convert to json!


# let's inspect the data a bit
# first we can see the first-level labels of our data
print data.keys()


# then we can access parts of the data using those keys
# first, how many pages of data are there for this search?
print '- there are ' + str(data['pages']) + ' pages of data'


# SAVE TO JSON
# we might not want to do any further processing in code, but luckily
# python makes it really easy to save to a json file

# extract the list of objects from the data and save it to its own json file!
print 'getting list of attributes for the first item...'
items = data['objects']

output_file = open('Objects.json', 'w')		# 'w' means create the file in 'write' mode
json.dump(items, output_file, indent=4)		# write the items to file, with nice indentation
output_file.close()							# be sure to close the file when you're done!


# GET SPECIFIC DATA
# if we want to go further, we can go further into each object in the data, grab
# the same info from all objects, even re-write the data to csv

# from that list, we can get individual objets and information about them!
first_item = items[0]		# get the first item using its 'index' in the list
print items[0].keys()		# print the keys for that item!


# and we can access info from this objects using its keys
print '- this object is called "' + first_item['title'] + '"'
print '- it was was made in ' + first_item['date'] + ' and acquired in ' + first_item['year_acquired']


# super cool, but what if we want to extract something from this data?
# let's get the dimensions for each work plus its ID so we can track it later

# first, we create the csv file
csv = open('Dimensions.csv', 'w')

# next, let's create a header for the file
csv.write('id,width,height,unit')	# the header info
csv.write('\n')						# don't forget a line break!

# then go through all the data using a 'for loop'
for item in data['objects']:
	
	# get the dimensions for this item
	dimensions = item['dimensions_raw']

	# our data is a bit messy, so we have to do some checks
	# first, if there are no dimensions the result will be 'None'
	# so we continue on and skip the rest below for this item
	if dimensions is None:
		continue

	# we should also check if the item has a width and height listed
	# if not, we skip this one too
	if 'width' not in dimensions.keys() or 'height' not in dimensions.keys():
		continue
	
	# if all went ok, we get the dimensions and what unit they're in
	width, unit =  dimensions['width']
	height, unit = dimensions['height']

	# get the item's id
	id_num = item['id']

	# and add to the csv file
	csv.write(id_num + ',' + str(width) + ',' + str(height) + ',' + unit + '\n')


# finally, when we're done we should close the csv file
csv.close()

# we could then open this csv file in Excel to do some further processing
# for example, convert the units to inches instead of cm, or sort by the longest
# item, or find the average dimensions!


# one more: let's get a list of all the participants in these works, and 
# their roles - we can then store the results using a 'set', which is like
# a list but it only keeps unique items
names = set()
for item in data['objects']:
	
	# get the list of participants for this object
	participants = item['participants']

	# use another for loop to iterate through them all!
	for participant in participants:

		# get the person's name and their role
		# combine into a string surrounded by quotation marks (in case
		# their name has commas in it) and add to the set
		name = participant['person_name']
		role = participant['role_name']
		person = '"' + name + '","' + role + '"'
		names.add(person)

# sort the results by name (not necessary, but nice)
names = sorted(names)

# with all our data gathered, write to a csv file!
csv = open('Participants.csv', 'w')
for name in names:

	# since some names will include 'special characters' we have
	# tell python to convert them to a certain format, otherwise
	# it will throw an error when trying to write them to file
	csv.write(name.encode('utf-8') + '\n')		# don't forget the line break using \n!
csv.close()

