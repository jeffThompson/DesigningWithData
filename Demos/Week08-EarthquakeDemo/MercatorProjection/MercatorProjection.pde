
/*
MERCATOR PROJECTION
Jeff Thompson | 2019 | jeffreythompson.org

While the Mercator projection has some pretty serious limitations (after all,
it was created in 1569), this demo should show you how you might think about
converting latitude/longitude into different map projections.

Gerardus Mercator's map projection was designed for navigation, but has the
unintended result of distorting landmasses near the poles. For a great
visualization of this, see: https://en.wikipedia.org/wiki/File:Worlds_animate.gif

Map source:
https://en.wikipedia.org/wiki/Mercator_projection#/media/File:Mercator_projection_Square.JPG

*/


void setup() {
  size(800,800);
  
  // load the map image
  PImage map = loadImage("mercator.jpg");
  map.resize(width, height);
  image(map, 0,0);
  
  // the location for Minneapolis, Minnesota
  // ... my home town :)
  float latitude = 44.5855;      // positive = north, negative = south, 0 = equator
  float longitude = -93.1609;    // negative = west, positive = east, 0 = prime meridian
  
  // convert the coordinates
  // (comes back as a PVector object, which basically holds
  // x and y coordinates together in a single variable)
  PVector position = mercatorScreenCoords(latitude, longitude);
  
  // draw the position on the map!
  fill(0);
  noStroke();
  ellipse(position.x, position.y, 30,30);  
}


// function that latitude/longitude converts to Mercator projection
// coordinates onscreen
// note! if your map isn't the full screen size you'll need
// to modify the code below
// via: https://stackoverflow.com/a/14457180/1167783
PVector mercatorScreenCoords(float latitude, float longitude) {
  
  // east =  FE + R (λ – λₒ)
  // north = FN + R ln[tan(π/4 + φ/2)]   
  
  // get x position
  float x = (longitude+180) * (width/360.0);
  
  // get y position
  float mercN = log(tan(QUARTER_PI + (radians(latitude)/2)));
  float y = (height/2) - (height*mercN/(TWO_PI));
  
  return new PVector(x,y);
}
  
