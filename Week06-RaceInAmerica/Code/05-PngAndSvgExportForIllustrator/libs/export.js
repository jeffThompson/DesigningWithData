
function createPngLink(filename, linkText, chart) {
  if (chart.options.animation !== false) {
    console.warn('Cannot create PNG: "animation" is not set to false (see the options section)');
    return;
  }
  if (chart.options.responsive !== false) {
    console.warn('Cannot create PNG: "responsive" is not set to false (see the options section)');
    return;
  }

  // create the download link
  let link = document.createElement('a');
  link.href = chart.toBase64Image();
  link.download = filename;
  link.text = linkText;
  
  // and add it to the page
  document.getElementById('wrapper').appendChild(link);
}


function createSvgLink(filename, linkText, chart, chartSettings) {
  if (chart.options.animation !== false) {
    console.warn('Cannot create SVG: "animation" is not set to false (see the options section)');
    return;
  }
  if (chart.options.responsive !== false) {
    console.warn('Cannot create SVG: "responsive" is not set to false (see the options section)');
    return;
  }

  tweakLib();

  // get the dimensions of our original chart
  let chartCanvas = document.getElementById('canvas');
  let width =  chartCanvas.offsetWidth;
  let height = chartCanvas.offsetHeight;

  // create an svg version of the chart
  let svgContext = C2S(width, height);
  let svgChart = new Chart(svgContext, chartSettings);

  // create download link
  let link = document.createElement('a');
  link.href = 'data:image/svg+xml;utf8,' + encodeURIComponent(svgContext.getSerializedSvg());
  link.download = filename;
  link.text = linkText;

  // add link to the page
  document.getElementById('wrapper').appendChild(link);
}


// some tweaks to the canvas2svg library are required for this to work
// via: https://stackoverflow.com/questions/62249315/export-canvas-to-svg-file
function tweakLib() {
  C2S.prototype.getContext = function(contextId) {
    if (contextId === '2d' || contextId === '2D') {
      return this;
    }
    return null;
  }
  C2S.prototype.style = function() {
    return this.__canvas.style;
  }
  C2S.prototype.getAttribute = function(name) {
    return this[name];
  }
  C2S.prototype.addEventListener = function(type, listener, eventListenerOptions) {
    // nothing to do here, but we need this function :)
  }
}

