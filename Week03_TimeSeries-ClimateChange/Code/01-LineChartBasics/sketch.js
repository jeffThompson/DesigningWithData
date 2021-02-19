/*
LINE CHART BASICS
Jeff Thompson | 2021 | jeffreythompson.org

The cool thing about chart.js (and using code to
generate our visualizations in general) is that
the basics are really simple but we can quickly
add as many new features as we want!

This demo is the most barebones line chart we
can create: it shows the number of personal
computers in the US between 1983–2000.

Of course, because we're really just adding data
and labels on the bottom, we're stuck with the
defaults that chart.js provides for everything
else – something we'll be changing next!

DATA SOURCES
+ https://hypertextbook.com/facts/2004/DianeEnnefils.shtml
+ https://www.theverge.com/2021/1/11/22225356/pc-sales-shipments-
  2020-growth-idc-canalys-remote-work

CHALLENGES
1. Looking at the chart, what do you see missing that
   would help us understand this better? What changes
   would you make to the design to improve legibility?
2. In 2020, approximately 300 million computers were
   sold (world-wide, so our data doesn't quite line 
   up)... can you add that value to our data? Don't
   forget to add another year to the 'labels' too
   
*/

// a list of the data we want to display
let data = [ 2, 54, 168.6 ];

// labels, also a list with one item per data point above
let labels = [ 1983, 1990, 2000 ];

// all of our settings (and the data!) go in here
// (we'll add lots more options to this section in
// upcoming examples)
let options = {
  
  // this is a line chart!
  // (try changing to 'bar' and see the result)
  type: 'line',
  
  // the data we want to display
  data: {
    
    // uses the labels we defined at the top
    labels: labels,
    
    // our data goes here (for now we just have
    // one dataset though later we'll add more)
    datasets: [{
      
      // the data we want to graph, defined at the top
      data: data,
    }]
  },
}

// with all our options complete, we can create the chart!
let chart = new Chart(document.getElementById('canvas'), options);

