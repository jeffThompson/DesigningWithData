/*
MULTIPLE VISUALIZATIONS
Jeff Thompson | 2021 | jeffreythompson.org

Ok, but what if we want multiple visualizations
on the same page? To do this, we need a few
things:

1. index.html
   Create additional <canvas> elements and
   add an ID (like a unique identifier) to
   each one
2. sketch.js
   Create your visualization as usual, then
   change the ID when the chart gets created
   to target the <canvas> elements we made
   earlier.

That's it!

CHALLENGES
1. Can you change the ID of the visualizations
   here and in the index.html file? Do you
   still see both charts?
2. Can you copy/paste one of the chart's code
   and display it in a third <canvas>?

*/

// our first visualization
d3.csv('data/Flavors.csv').then(function(loadedData) {
  let data =   [];
  let labels = [];
  for (let i=0; i<loadedData.length; i++) {
    let flavor = loadedData[i].flavor;
    labels.push(flavor);
    let percent = loadedData[i].percent;
    data.push(percent);
  }  
  let options = {
    type: 'pie',
    data: {
      labels: labels,
      datasets: [{
        data: data,
      }]
    },
    options: {
      title: {
        display: true,
        text: 'Most popular ice cream flavors'
      },
      legend: {
        display: false
      }
    }
  };
  
  // note the 'popularFlavors' value
  // this targets a <canvas> element in your
  // HTML page with the same ID – this should
  // be different for each chart you have
  let chart = new Chart(document.getElementById('popularFlavors'), options);
});


// ...and the second!
// (notice the different ID below)
d3.csv('data/IceCream.csv').then(function(loadedData) {
  let data = [];
  for (let i=0; i<loadedData.length; i++) {
    let pints = loadedData[i].pints_consumed;
    let temperature = loadedData[i].temperature;
    let point = { x: pints, y: temperature };
    data.push(point);
  }
  let options = {
    type: 'scatter',
    data: {
      datasets: [{
        data: data,
        trendlineLinear: {
          style: 'rgba(0,150,255, 0.5)',
          width: 2,
          lineStyle: 'dotted'
        }
      }]
    },
    options: {
      title: {
        display: true,
        text: 'Ice Cream Consumed (1951–1953)'
      },
      scales: {
        yAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Temperature (ºF)'
          },
          ticks: {
            min: 0,
            max: 100
          }
        }],
        xAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Pints Consumed (per person)'
          }
        }],
      },
      legend: {
        display: false
      }
    }
  };
  
  let chart = new Chart(document.getElementById('iceCreamConsumption'), options);
});

