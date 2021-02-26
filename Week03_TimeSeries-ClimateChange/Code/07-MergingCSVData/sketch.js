/*
MERGING CSV FILES
Jeff Thompson | 2021 | jeffreythompson.org

Often, we won't find all the data we want int a single
place. There are a few solutions, but by far the
easiest is to just merge the files! In this example,
we'll combine historical temperature with CO2 data.
We also create two separate y axes, since our data
is in two units (ºF and million metric tons).

DATA SOURCES
+ https://crt-climate-explorer.nemac.org/local-climate-charts/
  ?county=New%20York%2BCounty&city=New%20York%2C%20NY&fips=36061
  &lat=40.7127753&lon=-74.0059728&nav=local-climate-charts
+ https://datahub.io/core/co2-fossil-global#data

CHALLENGES
1. Can you add a third dataset here, perhaps the
   modeled historical data?

*/

// load the new file we created
let filename = 'data/TempAndCO2Emissions.csv';

d3.csv(filename).then(function(loadedData) {
  
  // labels, plus our two columns of data
  let labels = [];
  let temperatures = [];
  let emissions = [];
  
  for (let i=0; i<loadedData.length; i++) {
    let year = loadedData[i].year;
    labels.push(year);
    
    // get both data-points, add them to their
    // respective lists
    let temp =  loadedData[i].temp;
    temperatures.push(temp);

    let co2 = loadedData[i].co2;
    emissions.push(co2);
  }
  
  // basic line chart settings
  let options = {
    type: 'line',
    data: {
      labels: labels,
      
      // add both our datasets here
      datasets: [{
        data: temperatures,
        label: 'Temperature',
        yAxisID: 'temperature',
        fill: false,
        borderColor: 'rgb(255,150,0)'
      }, {
        data: emissions,
        label: 'CO2',
        yAxisID: 'co2',
        fill: false,
        borderColor: 'rgb(0,150,255)'
      }]
    },

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
  
  // with all that done, we can create our chart!
  let chart = new Chart(document.getElementById('canvas'), options);
});

