/*
CUSTOMIZED TOOLTIPS
Jeff Thompson | 2021 | jeffreythompson.org

Chart.js handles a lot of stuff for us but the
default styling may not fit your project. One
of the things we might want to change is how the
tooltips – the info that pops up when we hover
over a datapoint – appear. Changing the colors
etc is really easy; changing the text that
displays is a bit tricker, but you can use this
example as a template for your own projects!

DATA SOURCE
+ https://en.wikipedia.org/wiki/World_population

MORE INFO
+ https://www.chartjs.org/docs/latest/configuration/tooltip.html
+ https://en.wikipedia.org/wiki/Decimal_separator#Digit_grouping

SEE ALSO
+ Another option for more customized tooltips!
  https://chartjs-plugin-datalabels.netlify.app

CHALLENGES
1. What other info and/or additions might you make
   to the tooltips here?

*/

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
    
    // everything happens here!
    tooltips: {
      
      // don't show the little color
      // preview in the tooltip box
      displayColors: false,
      
      // color settings
      backgroundColor: 'rgb(150,50,0)',
      titleFontColor:  'rgb(255,255,255)',
      bodyFontColor:   'rgb(255,255,255)',
      footerFontColor: 'rgb(255,255,255)',
      footerFontStyle: 'normal',
      
      // optionally, add a border too
      // borderColor:     'rgb(100,50,0)',
      // borderWidth:     1,
      
      // here we can change the text that is
      // displayed in the tooltip!
      // the syntax here is a bit confusing,
      // but you can use this as a template
      callbacks: {
        
        // title: bold text, usually the
        // x value (the year, in this case) 
        // for that point 
        title: function(item, everything) {
          
          // returning nothing essentially
          // turns off the title in the tooltip
          return;
        },
        
        // label: usually the x value (population)
        // for that point
        label: function(item, everything) {
          
          // we can check out all the variables
          // available to us (hover over a bar
          // to see the results)
          // console.log(item);
          
          // we can grab the values for that
          // point on the x and y axes
          let year =       item.xLabel;
          let population = item.yLabel;
          
          // we could do any number of fancy
          // calculations here, but a simple
          // but helpful change is to add commas
          // (in English-speaking countries) or 
          // periods (much of the rest of the 
          // world) to the number
          population = population.toLocaleString();
          
          // create the label text...
          let label = 'Population: ' + population + ' million';
          
          // ...and set it
          return label;
        },
        
        // footer: info after everything
        // else (might be useful for adding
        // context or units)
        footer: function(item, everything) {
          
          // where in the dataset is this value?
          let index = item[0].index;
          
          // if we're not at the first value...
          if (index > 0) {
            
            // grab the current and previous
            // values from the data using the index
            let curr = everything.datasets[0].data[index];
            let prev = everything.datasets[0].data[index-1];
            
            // calculate the difference
            let diff = curr - prev;
            
            // if the difference is positive, add
            // a plus-sign to the value
            if (diff > 0) {
              diff = '+' + diff;
            }
            
            // and give us the result with a label
            return 'Change: ' + diff;
          }
          
          // for the first item, don't display
          // anything
          else {
            return;
          }
        }
      }
    },
    
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

