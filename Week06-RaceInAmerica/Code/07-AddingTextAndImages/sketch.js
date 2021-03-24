/*
ADDING IMAGES AND TEXT
Jeff Thompson | 2021 | jeffreythompson.org

A chart on its own doesn't do much for us: it
really needs context. Luckily, since our chart
is already displayed inside a webpage, we can
add all kinds of elements like text, images,
even lists with data sources and captions!

You don't need to know much about HTML to do
this: check out the index.html file, which
shows you how to add some basic elements.

HTML TAGS
HTML is the "nouns" of the internet: objects
like images and paragraphs. They are contained
inside tags, noted with <> brackets. There are
usually an opening and closing bracket, with
the content inside:

  <p>This is a paragraph</p>

Other tags, like images, have a source attribute
pointing to the file they display:

  <img src="images/icecream.jpg">

Note this one has no closing tag!

NEED HELP?
If you need help adding these elements to your
page, a quick Google search is really great but
you can also pop into drop-in hours and we can
get you sorted right away.

CHALLENGES
1. Can you add an additional image somewhere on
   the page?

*/

// nothing special here!
// check out the index.html and style.css
// files for more info
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
  let chart = new Chart(document.getElementById('chart1'), options);
});

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
  
  let chart = new Chart(document.getElementById('chart2'), options);
});

