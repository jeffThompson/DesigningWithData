/*
SPLITTING A LINE CHART
Jeff Thompson | 2021 | jeffreythompson.org

In a previous example, we plotted population data
that included projected population in the future.
To make sure our visualization is clear and avoids
miscommunication, we'd probably want some way to
note that those numbers are projections rather than
recorded data. There are lots of ways we could
think about accomplishing that, but one way would
be to color the projected sections differently.

Unfortunately, chart.js doesn't give us an easy, out-
of-the-box way to handle this, but by creating two
parallel datasets we can make this work!

One caveat: without some extra work, you'll notice
that we get a double-tooltip when hovering over
the year 1999. That's because it's in our datasets
twice, since a line needs two points to be drawn.
For a way around this, see: 
https://jsfiddle.net/cjedgerton/sqgft5n4

DATA SOURCE
https://en.wikipedia.org/wiki/World_population
https://ourworldindata.org/future-population-growth

CHALLENGES
1. According to the Our World in Data link above, the UN
   projects global population to be 11.2 billion (or
   11200 million) by the year 2100. Can you add a third
   dataset that projects that value alongside the other
   projection? This can be really useful for showing
   predictions or where sources differ.

*/

// two datasets, one for current population and one
// for projected – notice that both lists are the same
// length and that we use null (nothing, no value) where
// the other dataset is present
let current =   [ 585,  660,  710,  978,  1650, 6127, 7795, null, null,  null ];
let projected = [ null, null, null, null, null, null, 7795, 8549, 10152, 10875 ];

// labels are the same for both!
let labels =    [ 1500, 1600, 1700, 1800, 1900, 2000, 2020, 2030, 2060, 2100 ];

let title = 'World Population';

let options = {
  type: 'line',
  data: {
    labels: labels,
    datasets: [
      // current data, drawn in solid orange
      {
        data: current,
        fill: false,
        borderColor: 'rgb(255,150,0)',
        label: 'Population (in millions)'
      },
      // projected data, drawn in dashed blue
      // note we change the label for this too!
      {
        data: projected,
        fill: false,
        borderColor: 'rgb(0,150,255)',
        label: 'Projected population (in millions)',
        
        // list with length of line and dash parts in pixels
        borderDash: [ 5, 5 ]
      }
    ]
  },
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

