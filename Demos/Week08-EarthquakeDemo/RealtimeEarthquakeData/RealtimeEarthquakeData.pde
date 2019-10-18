
/*
REALTIME EARTHQUAKE DATA
Jeff Thompson | 2019 | jeffreythompson.org

This example builds on the EarthquakeTemplate sketch, but loads
earthquakes from the past hour in realtime from the USGS servers!

Source:
https://earthquake.usgs.gov/earthquakes/feed/v1.0/csv.php

*/

// instead of specifying a local csv file, we can feed a url
// to the loadTable() command!
String url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.csv"; 


void setup() {
  size(1200,600);
  background(255);
  
  // load the data from a url instead of locally!
  Table earthquakes = loadTable(url, "header, csv");
  println(earthquakes.getRowCount() + " earthquakes in the past hour");
  
  // go through the results, use map() to convert the data to
  // values we can use, and draw the earthquakes
  for (TableRow earthquake : earthquakes.rows()) {
    float latitude =  earthquake.getFloat("latitude");
    float longitude = earthquake.getFloat("longitude");
    float magnitude = earthquake.getFloat("mag");

    longitude = map(longitude, -180,180, 0,width);
    latitude =  map(latitude, 90,-90, 0,height);
    magnitude = map(magnitude, 0,9, 2,50);
    
    fill(150,0,0, 100);
    noStroke();
    ellipse(longitude,latitude, magnitude,magnitude);
  }
}
  
