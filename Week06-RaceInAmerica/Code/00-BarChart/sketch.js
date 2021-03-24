/*
BAR CHART
Jeff Thompson | 2021 | jeffreythompson.org

Bar charts are basically just like line charts, they
just display the data in vertical bars instead of as
a connected line! The settings are quite similar too,
making it easy to transition from one to the other.

DATA SOURCE
+ https://en.wikipedia.org/wiki/World_population

MORE INFO
+ https://www.chartjs.org/docs/latest/charts/bar.html

CHALLENGES
1. Can you try converting your previous visualization
   into a bar chart? How does it read differently?

*/

let data = [ 585,  660,  710,  978,  1650, 6127, 8549, 10152, 10875 ];
let labels = [ 1500, 1600, 1700, 1800, 1900, 2000, 2030, 2060, 2100 ];
let title = 'World Population (in millions)';

let options = {
  
  // the big change – bar instead of line!
  type: 'bar',
  
  data: {
    labels: labels,
    datasets: [{
      
      // a few basic settings for the bars
      backgroundColor: 'rgb(255,150,0)',
      borderColor:     'rgb(200,100,0)',
      borderWidth:     2,
      
      // thickness of the bar (0–1)
      barPercentage: 1.0,
      
      data: data,
      label: 'Population (in millions)'
    }]
  },
  options: {
    title: {
      display: true,
      text: title
    },
    legend: {
      display: false
    }
  }
}

let chart = new Chart(document.getElementById('canvas'), options);

