/*
SETTING CHART DIMENSIONS
Jeff Thompson | 2021 | jeffreythompson.org

Chart.js handles a lot for us, including the
overall size of our chart! It guesses (best
it can) as to what size will make sense but
sometimes we might want more control.

To make things easier, we can create a variable
for width/height at the top, then set our
chart's dimensions using those values.

RESPONSIVE DESIGN
See how the chart changes size depending on 
the size of the window? This is usually what
we want (so our visualization adapts to the
screen your visitor is using) but it means
the dimensions we specify are actually just
proportions!

If you want to keep the dimensions fixed or
experiment with them being stretched, see
the 'responsive' and 'maintainAspectRatio'
variables below.

DATA SOURCE
+ https://en.wikipedia.org/wiki/World_population

CHALLENGES
1. If you've used HTML/CSS before, you can also
   set the max dimensions for our chart! This
   example includes a wrapper <div> with the
   <canvas> inside. Try adding a 'max-width'
   parameter to the wrapper in the CSS file.

*/

// the width/height we'd like our chart
// to be (see note above about resizing)
let width =  500;
let height = 300;

// everything from here to the bottom is
// as normal – scroll down for the other
// important parts!
let data =   [ 585,  660,  710,   978,  1650, 
               6127, 8549, 10152, 10875 ];
let labels = [ 1500, 1600, 1700,  1800, 1900, 
               2000, 2030, 2060,  2100 ];
let title = 'World Population (in millions)';

let options = {
  type: 'bar',
  data: {
    labels: labels,
    datasets: [{
      backgroundColor: 'rgb(255,150,0)',
      borderColor:     'rgb(200,100,0)',
      borderWidth:     2,
      barPercentage:   1.0,
      data:            data,
      label:           'Population (in millions)'
    }]
  },
  options: {
    
    // two settings you might want 
    // to experiment with...
    
    // 'true' means your chart will resize
    // with the browser window
    responsive:          true,
    
    // 'true' means the width/height ratio
    // will stay the same ('false' means it
    // will stretch/shrink)
    maintainAspectRatio: true,
    
    title: {
      display: true,
      text:    title
    },
    legend: {
      display: false
    }
  }
}

// using the width/height settings above,
// we apply them to the <canvas> element
// where our chart is drawn
let context = document.getElementById('canvas');
context.width =  width;
context.height = height;

// then we pass the 'context' variable into
// our chart when making it
let chart = new Chart(context, options);

