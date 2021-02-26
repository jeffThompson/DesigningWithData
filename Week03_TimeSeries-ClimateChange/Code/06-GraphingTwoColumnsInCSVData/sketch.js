/*
GRAPHING TWO COLUMNS FROM CSV DATA
Jeff Thompson | 2021 | jeffreythompson.org

In the last example, we loaded and displayed one column
from our CSV file. But what if we want to plot more than
one in our chart? Easy!

DATA SOURCE
+ https://crt-climate-explorer.nemac.org/local-climate-charts/
  ?county=New%20York%2BCounty&city=New%20York%2C%20NY&fips=36061
  &lat=40.7127753&lon=-74.0059728&nav=local-climate-charts

CHALLENGES
1. Can you add labels to the y axis and other styling
   that will help this chart communicate better?

*/


// load the data...
let filename = 'data/AnnualProjected-Modeled.csv';
d3.csv(filename).then(function(loadedData) {
  
  // the labels will be the same for both
  // (the year, in this case)
  let labels = [];
  
  // ...but we'll make two datasets
  let lowerEmissions = [];
  let higherEmissions = [];
  
  for (let i=0; i<loadedData.length; i++) {
    
    // get the year, just like before
    let year = loadedData[i].year;
    labels.push(year);
    
    // get both data-points, add them to their
    // respective lists
    let lower =  loadedData[i].rcp45_weighted_mean;
    let higher = loadedData[i].rcp85_weighted_mean;
    lowerEmissions.push(lower);
    higherEmissions.push(higher);
  }
  
  // basic line chart settings
  let options = {
    type: 'line',
    data: {
      labels: labels,   // the labels we loaded!
      
      // add both our datasets here
      datasets: [{
        data: lowerEmissions,
        label: 'Lower Emissions',
        fill: false,
        borderColor: 'rgb(255,150,0)'
      }, {
        data: higherEmissions,
        label: 'Higher Emissions',
        fill: false,
        borderColor: 'rgb(0,150,255)'
      }]
    }
  };
  
  // with all that done, we can create our chart!
  let chart = new Chart(document.getElementById('canvas'), options);
});

