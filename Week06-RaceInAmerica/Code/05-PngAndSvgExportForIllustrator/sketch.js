/*
PNG AND SVG EXPORT (for Illustrator)
Jeff Thompson | 2021 | jeffreythompson.org

Online charts are great, but what if you want to share
them on social media, use them in print projects, etc?
With a little tweaking, we can export and download
any chart we make as a PNG and SVG!

SVGs are vector graphics, meaning we can also open
them in Illustrator and access all the shapes! This is
great if you want to create a base chart in code, then
style it in Illustrator to make it super cool.

Note! Your SVG may look cut off when viewing in
the web browser. Fear not: if you open it in Illustrator
you'll see everything there :)

DATA SOURCE
+ https://en.wikipedia.org/wiki/World_population

MORE INFO
+ Uses canvas2svg.js
  http://gliffy.github.io/canvas2svg

CHALLENGES
1. Try opening the SVG in Illustrator: can you ungroup
   everything and change colors and text?

*/

// set the output dimensions (helpful
// especially for PNG)
let width =  900;
let height = 600;

// (scroll down for more details...)
let data = [ 585,  660,  710,  978,  1650, 6127, 8549, 10152, 10875 ];
let labels = [ 1500, 1600, 1700, 1800, 1900, 2000, 2030, 2060, 2100 ];
let title = 'World Population (in millions)';

let options = {
  type: 'bar',
  data: {
    labels: labels,
    datasets: [{
      backgroundColor: 'rgb(255,150,0)',
      barPercentage:   1.0,
      data:            data,
      label:           'Population (in millions)'
    }]
  },
  options: {  
    title: {
      display: true,
      text: title
    },
    legend: {
      display: false
    },
    
    // these need to be set to false
    // for export!
    animation:  false,
    responsive: false
  }
}

// set the chart's size based on the
// values we set at the top
let context =    document.getElementById('canvas');
context.width =  width;
context.height = height;

// create the chart
let chart = new Chart(document.getElementById('canvas'), options);

// and generate the PNG and SVG links!
// (the code that does this is in the 'libs'
// folder > export.js)

// arguments: filename, link text, chart we created
createPngLink('chart.png', 'Export PNG, ', chart);

// arguments: filename, link text, the chart, and its settings
createSvgLink('chart.svg', 'SVG', chart, options);

