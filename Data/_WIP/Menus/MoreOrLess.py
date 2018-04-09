
import csv
import random

num_comparisons = 200	# how many to generate
times_thresh =    120	# must appear this many times to be included


# load data
with open('Dishes.csv') as f:
	d = f.readlines()
	header = d[0].strip()
	del d[0]
	data = csv.reader(d, delimiter=',')
	data = list(data)
print len(data)


# convert counts to float (for later math)
data = [ [item,float(count)] for item,count in data if float(count) > times_thresh ]


# get random comparisons
output = []
max_desc_len = 0
for i in range(0,num_comparisons):
	sample = random.sample(range(0,len(data)-1), 2)
	item0, count0 = data[sample[0]]
	item1, count1 = data[sample[1]]

	item0 = item0.strip()
	item1 = item1.strip()

	del data[sample[0]]
	del data[sample[1]]

	if len(item0) > max_desc_len:
		max_desc_len = len(item0)
	if len(item1) > max_desc_len:
		max_desc_len = len(item1)

	if count0 > count1:
		chance = count0 / count1
		out = [chance, item0, item1]
	else:
		chance = count1 / count0
		out = [chance, item1, item0]
	output.append(out)


# sort by likelihood
output = sorted(output, reverse=True)


# write to file
with open('Comparisons.csv', 'w') as f:
	for out in output:
		chance = '{0:.3f}'.format(out[0])
		item0 =  out[1]
		item1 =  out[2]
		f.write('"' + item0 + '","' + chance + '","' + item1 + '"\n')
	
