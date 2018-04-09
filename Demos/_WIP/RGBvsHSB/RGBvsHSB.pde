
/*
RGB vs HSB COLOR
Jeff Thompson | 2015 | www.jeffreythompson.org

See what a colorblind person might:
http://www.color-blindness.com/coblis-color-blindness-simulator

Color associations:
http://www.informationisbeautiful.net/visualizations/colours-in-cultures/

*/


void setup() {
  size(800,600);
  
  // RGB: red >> green
  colorMode(RGB);
  for (int i=0; i<800; i++) {
    float r = map(i, 0,800, 255,0);
    float g = map(i, 0,800, 0,255);
    float b = map(i, 0,800, 0,0);
    stroke(r, g, b);
    line(i,0, i,height);
  }
  save("RGB_RedToGreen.png");
  
  // RGB: orange >> pale blue
  for (int i=0; i<800; i++) {
    float r = map(i, 0,800, 255,0);
    float g = map(i, 0,800, 150,255);
    float b = map(i, 0,800, 0,255);
    stroke(r, g, b);
    line(i,0, i,height);
  }
  save("RGB_OrangeToPaleBlue.png");

  // HSB: full spectrum
  colorMode(HSB, 255);
  for (int i=0; i<800; i++) {
    float h = map(i, 0,800, 0,255);
    stroke(h, 255, 255);
    line(i,0, i,height);
  }
  save("HSB_FullSpectrum.png");
  
  // HSB: orange >> blue
  colorMode(HSB, 255);
  for (int i=0; i<800; i++) {
    float h = map(i, 0,800, 35,180);
    stroke(h, 255, 255);
    line(i,0, i,height);
  }
  save("HSB_OrangeToPaleBlue.png");
}