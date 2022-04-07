/*
ADDING OPTIONS TO A LINE CHART
Jeff Thompson | 2021 | jeffreythompson.org

In the last example, we made the more bare-bones line
chart possible. Here, we add some additional options
that let us control color, labels, and lots more.

DATA SOURCE
https://en.wikipedia.org/wiki/World_population

WHAT IS THAT WEIRD FORMAT?
The 'options' section may look quite unusual if you
haven't done programming before (or even if have). It
contains several different kinds of notation and it
will be helpful to understand a little bit about
what they are...

Name: variable
Everything in the options has a name (like 'borderColor')
followed by a colon and a value. Sometimes the value
will be a number (like line width) or text (like the
axis title) which will be in quotes.

Commas
Each name/variable pair is separated by commas – you'll
get an error if you forget to include them. Sections
(like 'data' and 'options') are also separated by commas.

{}
These are called 'objects' in Javascript (and dictionaries
in some other languages). They are a collection of items
where the order doesn't matter.

[]
These are lists. Our data is a list (in this case, of
population values) as are the labels for that data. You
may also see lists in other places, such as 'datasets'.
This is because you can have more than one dataset in
your chart!

CHALLENGES
1. Currently, the dots at each data-point get larger
   when you hover over them – can you make them get
   smaller instead?

*/

// a list of the data we want to display
let data = [ 585,  660,  710,  978,  1650, 6127, 8549, 10152, 10875 ];

// labels, also a list with one item per data point above
// these are years, but labels could be other numbers or
// text (which need to be in quotes)
let labels = [ 1500, 1600, 1700, 1800, 1900, 2000, 2030, 2060, 2100 ];

// the overall title for our chart
let title = 'World Population';

// this is where we define the visual elements, labels,
// and other settings for our chart
// the format here can be confusing but luckily chart.js
// is pretty forgiving and won't throw a bunch of errors
// if you do something wrong
let options = {
  
  // this is a line chart!
  type: 'line',
  
  // the data we want to display
  data: {
    
    // uses the labels we defined at the top
    labels: labels,
    
    // we only have one dataset (population over time)
    // but later we can add more than one!
    datasets: [{
      
      // the data we want to graph, defined at the top
      data: data,
      
      // line style options
      fill: false,                    // fill below the line
      borderColor: 'rgb(255,150,0)',  // line color
      lineTension: 0.3,               // 0 = straight segments, 1 = limp noodle
      
      // data-point style options
      pointRadius: 10,                     // size of dot at each data-point
      pointHoverRadius: 15,                // size of dot when you hover over it
      backgroundColor: 'rgb(200,100,0)',   // fill color of the dot
      pointBorderColor: 'rgb(200,100,0)',  // outline color of dot
      pointStyle: 'rectRot',               // shape for the point*
      
      // * more info on point styles:
      // https://www.chartjs.org/docs/latest/configuration/elements.html#point-styles
      
      // label for the data, shown when you hover over a point
      label: 'Population (in millions)'
    }]
  },
  
  // overall chart options
  options: {
    // show a title at the top?
    title: {
      display: true,    // show the title (false = hide it)
      text: title       // text to display, defined at top
    },
    
    // show a legend at the top?
    legend: {
      display: false
    },
    
    // options for the x/y axes
    scales: {
      
      // y (vertical) axis
      yAxes: [{
        // type: 'logarithmic',
        
        // label on the side
        scaleLabel: {
          display: true,
          labelString: 'Population (in millions)'
        },
        
        // start scale at zero (generally a best practice)
        ticks: {
          beginAtZero: true
        }
      }],
      
      // x (horizontal) axis
      xAxes: [{
        
        // label this too
        scaleLabel: {
          display: true,
          labelString: 'Year'
        }
      }]
    }
  }
}

// we can also change all text used in the chart: font, color, and size
Chart.defaults.global.defaultFontFamily = '"Helvetica Neue", "Helvetica", "Arial", sans-serif';
Chart.defaults.global.defaultFontColor =  'rgb(100,100,100)';
Chart.defaults.global.defaultFontSize =   16;

// with all our options complete, we can create the chart!
let chart = new Chart(document.getElementById('canvas'), options);

