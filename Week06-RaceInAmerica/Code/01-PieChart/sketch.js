/*
PIE CHART
Jeff Thompson | 2021 | jeffreythompson.org

A classic chart, and one we see a lot, is the pie chart.
It's meant to show proportional data, rather than data
that changes over time. Chart.js does a great job of
looking through our data and doing the math to compute
the ratios of the different datapoints.

Here, we graph US occupations in creative industries, pulled
from the Bureau of Labor Statistics.

SEE ALSO
+ https://www.chartjs.org/docs/latest/charts/doughnut.html

DATA SOURCE
+ https://www.bls.gov/cps/cpsaat11.htm

CHALLENGES
1. Can you find other proportion data that can be 
   plotted this way?
2. Changing the color of our bars is a bit tricky. Can
   you read the reference page above and get that to
   work (likely with a smaller dataset)?

*/


let filename = 'data/CreativeOccupations.csv';

d3.csv(filename).then(function(loadedData) {
  let data =   [];
  let labels = [];
  
  for (let i=0; i<loadedData.length; i++) {
    let occupation = loadedData[i].occupation;
    labels.push(occupation);
    
    let count = loadedData[i].count;
    data.push(count);
  }
  
  // optionally, add colors based on our data
  // (uses a function at the bottom, check it out 
  // if you're interested in how this is accomplished)
  let colors = generateColors(
    data,         // the data
    [0,50,100],   // rgb values for the first color
    [0,150,255]   // and for the other
  );
  
  let options = {
    
    // pie chart, please!
    type: 'pie',
    
    // everything else is pretty much
    // like we've used before
    data: {
      labels: labels,
      datasets: [{
        data: data,
        
        // the colors we generated above
        // (otherwise will be gray)
        backgroundColor: colors,
        hoverBackgroundColor: 'rgb(0,150,100)'
      }]
    },
    options: {
      title: {
        display: true,
        text: 'Creative Occupations (2020, in thousands)'
      },
      
      // we have a lot of data here, so the
      // legend is in the way and doesn't provide
      // us with any helpful info
      legend: {
        display: false
      }
    }
  };
  
  let chart = new Chart(document.getElementById('canvas'), options);
});


// an extra bit of code that generates a list
// of colors based on the data – the values
// will be between two colors specified above
function generateColors(data, c1, c2) {
  
  // get the min/max values from the data
  let minVal = Math.min(...data);
  let maxVal = Math.max(...data);
  
  // convert those to color values
  let c = [];
  for (let d of data) {
    let r = scale(d, minVal,maxVal, c1[0],c2[0]);
    let g = scale(d, minVal,maxVal, c1[1],c2[1]);
    let b = scale(d, minVal,maxVal, c1[2],c2[2]);
    c.push('rgb(' + r + ',' + g + ',' + b + ')');
  }
  return c;
}

// helpful function: scales numbers from one range
// to another (in this case our data to RGB)
function scale(num, inMin, inMax, outMin, outMax) {
  return (num-inMin) * (outMax-outMin) / (inMax-inMin)+outMin;
}

