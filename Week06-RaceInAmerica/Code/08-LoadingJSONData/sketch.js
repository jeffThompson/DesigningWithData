/*
LOADING JSON DATA
Jeff Thompson | 2021 | jeffreythompson.org

Most of our examples have looked at CSV data, which
makes sense since most of the data you'll find will
be in that format (or Excel, which is basically a
fancy version of CSV). But JSON data is also very
common so let's see how we can work with that.
Fortunately, the D3 library comes to the rescue 
and handles most of the work for us!

Let's take a look at some passenger data for the
Titanic and visualize the number of passengers
that survived or died by age range. To do that,
we need to do just a bit of math here...

First, we take ages 0–100 and make them 0–1:

  age = age / 100

Then we multiply by 10 so that range is 0–10:

  age = age * 10

Since this might give us decimal numbers (3.5,
etc) we can round down to whole numbers only:

  age = Math.floor(age)

Now we can count up all the people who are in
the same age range! This could also be done
other ways, either in code or manually.

DATA SOURCE
+ https://github.com/Geoyi/Cleaning-Titanic-Data

CHALLENGES
1. What other elements from the Titanic dataset
   could you try graphing here? The original
   data source also includes some interesting
   elements that have been removed here, so
   feel free to try those too!

*/

// we can load json data using the D3 library
// just like with csv data!
let filename = 'data/TitanicPassengers.json';
d3.json(filename).then(function(loadedData) {
  
  // let's see how the data is formatted
  // by printing the first listing
  console.log(loadedData[0]);

  // we'll show the number of passengers that
  // survived or died by age range
  let labels = [
    '0–9', '10–19', '20–29', '30–39', '40–49', 
    '50–59', '60–69', '70–79', '80–89'
  ];
  
  // create some blank lists for the data to
  // go in too
  let survived = [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
  let died = [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
  for (let i=0; i<loadedData.length; i++) {
    
    // grab the age of the passenger from
    // the json data
    let age = loadedData[i].age;
    
    // do a little math to get their age in
    // the tens range (10 years old = 1, 30 years
    // old = 3, 6 months old = 0, etc)
    age = Math.floor((age / 100) * 10);
    
    // if the passenger died, increase the count
    // for their age range by one
    if (loadedData[i].survived === '0') {
      died[age] += 1;
    }
    // same if the passenger died
    else {
      survived[age] += 1;
    }    
  }
  
  let options = {
    type: 'bar',   
    
    // add both datasets
    data: {
      labels: labels,
      datasets: [{
        label: 'Died',
        data: died,
        backgroundColor: 'rgb(0,50,150)'
      }, {
        label: 'Survived',
        data: survived,
        backgroundColor: 'rgb(0,150,255)'
      }]
    },
    options: {

      // stack the bar chart!
      scales: {
        xAxes: [{
          stacked: true,
          scaleLabel: {
            display: true,
            labelString: 'Passenger Ages'
          }
        }],
        yAxes: [{
          stacked: true,
          scaleLabel: {
            display: true,
            labelString: 'Number of Passengers'
          }
        }]
      },

      // ...and customize the tooltips a bit
      // (mode: index means show all datapoints
      // for this bar!)
      tooltips: {
        mode: 'index',
        displayColors: false,
        callbacks: {
          title: function(item, everything) {
            return 'Ages ' + item[0].label;
          }
        }
      },
      title: {
        display: true,
        text: 'Titanic Passenger Survival by Age'
      },
      legend: {
        display: false
      }
    }
  };
  
  let chart = new Chart(document.getElementById('canvas'), options);
});

