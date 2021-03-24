/*
SCATTER CHART
Jeff Thompson | 2021 | jeffreythompson.org

In our previous examples, our data has been singular:
one number for each item. However, data often has
multiple elements that may be inter-related in some
way. The scatter plot is a great way to see that!

Instead of a single value for each data point, we can
specify two – one in the X direction and one in the Y.
In this example, we use ice cream sales data from the
early 1950s – a classic of data visualization.

SEE ALSO
+ https://www.chartjs.org/docs/latest/charts/scatter.html

DATA SOURCES
+ https://www3.nd.edu/~busiforc/handouts/Data%20and%20
  Stories/regression/ice%20cream%20consumption/icecream.html
+ https://rpubs.com/WaffleEyedJo/478664

CHALLENGES
1. There is an additional column in the data for price per
   pint. Try using that instead!

*/

let filename = 'data/IceCream.csv';

d3.csv(filename).then(function(loadedData) {
  
  // no list of labels here, just data
  let data = [];
  
  for (let i=0; i<loadedData.length; i++) {
    let pints = loadedData[i].pints_consumed;
    let temperature = loadedData[i].temperature;
    
    // combine the data into a single datapoint
    // we can specify which value is in the x
    // direction and which the y
    let point = { x: pints, y: temperature };
    data.push(point);
  }
  
  let options = {
    type: 'scatter',
    data: {
      datasets: [{
        data: data,
        
        // add a trendline too!
        // this can help us make sense of
        // complex plots like this
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
          
          // while chart.js automatically sets
          // the axes for us (which is great) sometimes
          // we want more control over the min/max
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
  
  let chart = new Chart(document.getElementById('canvas'), options);
});

