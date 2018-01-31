![Portion of a visualization showing how writers spend their day](https://raw.githubusercontent.com/jeffThompson/DataVisualization/master/Images/Week03_ProportionData/HowWritersSpendTheirDay-cropped.jpg)

PROPORTION DATA
====

### DUE: WEDNESDAY, FEBRUARY 7  

Having worked with data that changes over time, your next project deals with data that represents proportions of a whole. Typically, this is shown using a [pie chart](https://en.wikipedia.org/wiki/Pie_chart), a form developed by William Playfair in 1801. While the piechart is most common, the layout can make it difficult for people to accurately compare proportions – many alternatives exist, such as [bar charts](https://en.wikipedia.org/wiki/Bar_chart), [treemaps](https://en.wikipedia.org/wiki/Treemapping), and [proportional area charts](https://datavizcatalogue.com/methods/area_chart.html) (lots more suggests [here](https://datavizcatalogue.com/search/proportions.html)).

This week, our dataset comes from the US Bureau of Labor Statistics' data on occupations, which is culled from the US census. Write-in answers on the census are translated to 23 major groups, such as `Manufacturing` and further refined to 539 occupations like `Cement, concrete, lime, and gypsum product manufacturing`. Each of these has a total, showing how many people work in that occupation. To contextualize this data, you'll want to read [this page from the US Census Bureau's site](https://www.census.gov/topics/employment/industry-occupation/about/occupation.html). Like last week, I've included a cleaned-up version of the data, as well as the original if you want to dig through it.

Occupation data has been collected by the Census Bureau since 1850, and provides a rich portrait of the United States in the form of a dataset. As you look through the data, think about a *story* you want to tell through it. What interesting things can we learn about the American work force from this data? What surprises are there? What things might you have intuitively guessed are confirmed in the data? **You do not need to show everything (and in fact shouldn't!) so try to find parts that resonate with you and can be woven into a story.**

Your final visualization, created in Illustrator, should show how different occupations or categories of jobs compare with each other – proportions of a whole. The form of your visualization could be as a pie chart (or a series of them), a stacked graph, some other format common format, or one of your own creation.

**CALCULATING PROPORTIONS**  
While pie charts look simpler than time series charts, they require more math to get the data into a usable format – we have to convert arbitrary numbers into percentages, angles, or otherwise evenly-scaled values of some kind.

* Percent: `(Number of particular thing / total number of things) * 100` will give a number between 0–100%  
* Angle: `(Number of particular thing / total number of things) * 360` will give an angle between 0–360, which you can use for pie chart sections  
* Arbitrary value: use the same idea above, but multiply by the max value you want, useful for making circles of varying diameter, etc  

### DELIVERABLES  
Your finished project should include the following:

* Visualization of a selection of the data, including:  
  * A portion of the data, clearly showing proportions of a whole  
  * A title that describes your visualization  
  * Labels as necessary  
  * A citation of your data's source (listed in the data file)  
* Final version should be laser-printed on `8x5x11"` paper, either at the Fab Lab or off-campus  
* Upload a PDF of your project to Canvas (`File > Save As...` and select `PDF` from the dropdown)  

### RESOURCES  

* More about the [US Census' different "industry" categorizations](https://www.bls.gov/cps/lfcharacteristics.htm#occind) (this page also includes lots more related data, if you want to go digging around, as well as some [interesting charts](https://www.bls.gov/opub/ted/2012/ted_20121026.htm))  
* If you want to read all 31,293 responses (including people who listed their occupation as vulcanizer, wagon person, motor rewinder, cow tender, and malariologist), see the [census 2016 occupations list](https://www.census.gov/topics/employment/industry-occupation/guidance/indexes.html)  
* More info from the US Census Bureau on [how this data is collected and categorized, and some of the history behind its collection](https://www2.census.gov/programs-surveys/demo/guidance/industry-occupation/overview2010.pdf)  
* The [Data Viz Catalogue](https://datavizcatalogue.com/search/proportions.html) includes lots of other formats for showing proportion data  
* [Flowing Data has a nice breakdown of nine of these](http://flowingdata.com/2009/11/25/9-ways-to-visualize-proportions-a-guide/), with links to examples  
* Illustrator tools we covered this week are: transformation commands, rotate tool, join command, and the scissors and pen tools. Want to practice? Try the online [pen game](http://bezier.method.ac/)    

### PROJECTS SHOWN  

* William Playfair's early examples of the pie chart, showing imports and exports in his 1801 publication *Statistical Breviary*  
* Florence Nightingale's ground-breaking visualization in 1857 of the cause of death during the Crimean War, showing that more deaths could be attributed to poor hospital conditions than battlefield wounds  
* A pie chart alternative is the [treemap](https://en.wikipedia.org/wiki/Treemapping), including a very nice version by Charles Louis de Fourcroy from 1872 and a newer one from the [Harvard-MIT Observatory for Economic Complexity](https://atlas.media.mit.edu/en/visualize/tree_map/hs92/export/nor/all/show/2016/)  

*Top: portion of a visualization showing how writers spend their day. Each row is a day (midnight to midnight), and activities are color-coded letting us quickly compare writers' activities.*