
/*
EARTHQUAKE TEMPLATE
Jeff Thompson | 2019 | jeffreythompson.org

Below is a basic template for loading earthquake data from the US
Geological Survey (USGS) and visualizing it.

Source (with lots of options to download different time periods):
https://earthquake.usgs.gov/earthquakes/feed/v1.0/csv.php

*/


void setup() {
  
  // set size equal to the map image
  size(1200,600);
  background(255);
  
  // load the map (though you can choose whether to show it
  // or not, or use a different map instead)
  PImage map = loadImage("EquirectangularProjection-1200pxDimmed.png");
  //image(map, 0,0);
  
  // load the data!
  // the extra parameters tell Processing this is a CSV file
  // that has a header (which makes it much easier to extract
  // the data later)
  Table earthquakes = loadTable("Earthquakes-7Days.csv", "header, csv");
  
  // "rows" in a CSV file are entries (in this case earthquakes)
  // if we get the number of rows, we can tell how many datapoints
  // were in the file
  println("found " + earthquakes.getRowCount() + " earthquakes");
  
  // iterate through the earthquakes one-by-one...
  for (TableRow earthquake : earthquakes.rows()) {
    
    // extract the essential data (position, strength, and depth)
    float latitude =  earthquake.getFloat("latitude");
    float longitude = earthquake.getFloat("longitude");
    float magnitude = earthquake.getFloat("mag");
    float depth =     earthquake.getFloat("depth");
    
    // some other data too
    // bonus: try researching what some of the other data fields
    // like "magType" and "rms" are! 
    String datetime = earthquake.getString("time");
    String location = earthquake.getString("place");
    String id =       earthquake.getString("id");
    
    // print info on each earthquake (helpful for debugging)
    println(location + ": " + latitude + "/" + longitude + " (" + magnitude + ")");
    
    // longitude/latitude will be in number ranges that we
    // can't directly use in our sketch – instead, we can use
    // the map() command to convert them to screen coordinates
    
    // map has five arguments (parameters)
    // input value, lowest possible input, highest possible input,
    // lowest desired output, highest desired output
    
    // for example, longitude (east/west) goes from -180º to 180º
    // we want that scaled so that -180º = 0 in the x coordinate
    // and 180º = the width of the screen, with other values 
    // falling in between
    longitude = map(longitude, -180,180, 0,width);
    
    // do the same thing for latitude (north/south) and
    // the magnitude (strength, 0-9) of the earthquake
    latitude =  map(latitude, 90,-90, 0,height);
    magnitude = map(magnitude, 0,9, 2,50);
    
    // now we can use that to draw a circle for each earthquake!
    fill(150,0,0, 100);
    noStroke();
    ellipse(longitude,latitude, magnitude,magnitude);
  }
  
  // when done drawing, save the result to a png file
  save("Earthquakes.png");
}
  
