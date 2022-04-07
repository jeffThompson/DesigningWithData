/*
LOADING CSV DATA
Jeff Thompson | 2021 | jeffreythompson.org

Creating visualizations with hand-typed data won't
cut it for long: the kinds of data we'll be using
will likely be longer than we'd like to type, plus
transcribing by hand will be prone to errors and, if
you want to make a change to your data, then you
have to type it all again!

Luckily, we can load a CSV (comma-separated values)
file with our code! Chart.js can't do this on it's
own, so instead we can use D3 (another visualization
library) to handle this for us. Our code gets a little
more complicated, since we have to load the data and
create our chart inside the csv() command, then go
through all the entries to create our 'data' and
'labels' lists.

This chart is pretty barebones with no styling – a
great next step!

DATA SOURCE
+ https://crt-climate-explorer.nemac.org/local-climate-charts/
  ?county=New%20York%2BCounty&city=New%20York%2C%20NY&fips=36061
  &lat=40.7127753&lon=-74.0059728&nav=local-climate-charts

CHALLENGES
1. How could you style this chart to better present
   the data?
2. Can you load one of the other files in the 'data'
   folder? You'll have to change the filename but also
   the 'key' for the column you want to visualize.

*/

// csv file we want to load
let filename = 'data/AnnualProjected-Modeled.csv';

// all of your code should be inside this command
d3.csv(filename).then(function(loadedData) {
  
  // let's see if our data loaded correctly
  // (and take a peek at how it's formatted)
  console.log(loadedData);
  
  // empty lists for our data and the labels
  let data =   [];
  let labels = [];
  
  // use a for-loop to load the data from the
  // file into our lists
  for (let i=0; i<loadedData.length; i++) {
    console.log(loadedData[i]);
    
    // get the year and mean temp for each listing
    // note: the 'keys' here correspond to the headers
    // in our file and need to be typed exactly
    let year =     loadedData[i].year;
    let meanTemp = loadedData[i].rcp45_weighted_mean;
    console.log(meanTemp);
    
    // add the year to our labels
    labels.push(year);
    
    // and mean temp to the data
    data.push(meanTemp);    
  }
  
  // basic line chart settings
  let options = {
    type: 'line',
    data: {
      labels: labels,  // the labels we loaded!
      datasets: [{
        data: data,    // the data we loaded!
        fill: false,
        pointRadius: 0,
        pointHoverRadius: 0,
        borderColor: 'rgb(100,100,100)'
      }]
    }
  };
  
  // with all that done, we can create our chart!
  let chart = new Chart(document.getElementById('canvas'), options);
});

