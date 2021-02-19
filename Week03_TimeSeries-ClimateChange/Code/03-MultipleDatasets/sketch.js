/*
MULTIPLE DATASETS
Jeff Thompson | 2021 | jeffreythompson.org

Sometimes we want to compare two different datasets.
We could make two charts, but then viewers would have
to look back-and-forth between them to understand the
relationship between the data. Instead, if our data
is in a similar format, we can combine two datasets
into a single visualization!

Here, we graph world population from 1960–2020 and
the number of people living in urban areas during that
same time period.

DATA SOURCE
https://en.wikipedia.org/wiki/World_population

CHALLENGES
1. The Wikipedia page where this data came from includes
   lots of other data too. Can you add a third dataset
   to the chart?

*/

// two datasets!
// since our y axis is population in millions, both
// of our datasets need to be in the same units (so you might
// need to do some math)
let population = [ 3035, 3700, 4558, 5327, 6302, 6957, 7795 ];
let urban =      [ 1024, 1354, 1754, 2290, 2868, 3595, 4379 ];

// labels are the same for both!
let labels = [ 1960, 1970, 1980, 1990, 2000, 2010, 2020 ];

let title = 'World Population vs Urban Population';

let options = {
  type: 'line',
  data: {
    labels: labels,
    datasets: [
      // population data, drawn in solid orange
      {
        data: population,
        fill: false,
        borderColor: 'rgb(255,150,0)',
        label: 'Total population (in millions)'
      },
      // urban data, drawn in blue
      // note this has a different label
      {
        data: urban,
        fill: false,
        borderColor: 'rgb(0,150,255)',
        label: 'Urban population (in millions)',
      }
    ]
  },
  
  // options are the same as the previous example
  options: {
    title: {
      display: true,
      text: title
    },
    legend: {
      display: false
    },
    scales: {
      yAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'Population (in millions)'
        },
        ticks: {
          beginAtZero: true
        }
      }],
      xAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'Year'
        }
      }]
    }
  }
}

Chart.defaults.global.defaultFontFamily = '"Helvetica Neue", "Helvetica", "Arial", sans-serif';
Chart.defaults.global.defaultFontColor =  'rgb(100,100,100)';
Chart.defaults.global.defaultFontSize =   16;

let chart = new Chart(document.getElementById('canvas'), options);

