/*
LOADING MULTIPLE CSV FILES
Jeff Thompson | 2021 | jeffreythompson.org

Loading a single CSV file is great, but what if
we have more than one data file we want to use?
We can break up the process of creating our chart
and loading the data, allowing us to make a template
chart, then add the data in two additional steps.

We also create two separate y axes, since our data
is in two units (ºF and million metric tons).

Note: while this works, it would probably be easier
to combine your data in Excel/Google Sheets instead!

DATA SOURCES
+ https://crt-climate-explorer.nemac.org/local-climate-charts/
  ?county=New%20York%2BCounty&city=New%20York%2C%20NY&fips=36061
  &lat=40.7127753&lon=-74.0059728&nav=local-climate-charts
+ https://datahub.io/core/co2-fossil-global#data

CHALLENGES
1. Can you add a third dataset here, perhaps the
   modeled historical data?

*/

// two filenames of data to load
let filename1 = 'data/AnnualHistorical-Observed.csv';
let filename2 = 'data/CO2Emissions.csv';

// first, create an empty visualization (no
// data) with our basic options specified
let options = {
  type: 'line',
  options: {
    
    // since our data is in two different scales 
    // (one temperature in ºF, the other in metric
    // tons of carbon), we need to create two separate
    // y axes, one for each dataset
    scales: {
      yAxes: [{
        id: 'temperature',  // this id will tie our data
        display: true,      // to the axis we want to use
        position: 'left',
        scaleLabel: {       // label the axis
          display: true,
          labelString: 'Temperature (ºF)'
        }
      }, {
        id: 'co2',          // second axis, this one for CO2
        display: true,
        position: 'right',
        scaleLabel: {
          display: true,
          labelString: 'CO₂ Emissions (million metric tons)'
        },
        
        // we don't want two sets of gridlines
        // so we can hide them for this dataset
        gridLines: {
          drawOnChartArea: false
        }
      }]
    }
  }
};

// creat the empty chart!
let chart = new Chart(document.getElementById('canvas'), options);


// load the first file (temperature) and add it
// to our chart
d3.csv(filename1).then(function(loadedData) {
  
  // dataset with no data yet!
  // this lets us specify its settings, connect
  // it to an axis, etc
  let dataset = {
    data: [],                // will add data next!
    label: 'Temperature',    // for legend/tooltip
    yAxisID: 'temperature',  // axis label (above)
    fill: false,
    pointRadius: 2,
    borderColor: 'rgb(255,150,0)'
  }
  
  // go through the data and add it!
  for (let i=0; i<loadedData.length; i++) {
    
    // since our chart doesn't have labels (x axis)
    // yet, add them here
    let year = loadedData[i].year;
    chart.data.labels.push(year);
    
    // grab the temp and add it to our dataset
    let meanTemp = loadedData[i].tmax;
    dataset.data.push(meanTemp);
  }
  
  // then add the whole dataset (with settings)
  // to our chart and update the display!
  chart.data.datasets.push(dataset);
  chart.update();
});


// same thing here (with a few minor changes)
d3.csv(filename2).then(function(loadedData) {
  
  // second dataset with different label,
  // y axis, and color
  let dataset = {
    data: [],
    label: 'CO₂',
    yAxisID: 'co2',
    fill: false,
    pointRadius: 2,
    borderColor: 'rgb(0,150,255)'
  }
  
  // add the data
  for (let i=0; i<loadedData.length; i++) {
    let total = loadedData[i].total;
    dataset.data.push(total);
    
    // note we don't add labels here!
    // that's because we already have the
    // years from the previous dataset
    // if we add them now, we'll see 1950–
    // 2012 followed by the year 1950 again!
  }
  
  // add second dataset to our chart, update
  chart.data.datasets.push(dataset);
  chart.update();
});

