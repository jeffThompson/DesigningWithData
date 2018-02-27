![](https://raw.githubusercontent.com/jeffThompson/DataVisualization/master/Images/Week06_DataDig/SolarSynopticMap_2015-07-07.jpg)

DATA DIG
====

### DUE: WEDNESDAY, MARCH 21  

> "Data in the 21st century is largely ephemeral, because it is so easily produced: a machine creates it, uses it for a few seconds and overwrites it as new data arrives. Some data is never examined at all, such as scientific experiments that collect so much raw data that scientists never look at most of it. Only a fraction ever gets stored on a medium such as a hard drive, tape or sheet of paper, yet even ephemeral data often has 'descendents'-new data based on the old." – Bohn and Short, *How Much Information?*

For this project, you'll be "digging" for data online in places like the [US National Oceanic and Atmospheric Administration's](http://www.noaa.gov/) server. NOAA (pronounced like the name *Noah*) was one of the first organizations in the US to release their data to the public, starting in the 1970s. They assist in scientific research and monitoring of the oceans and atmosphere. To do this, they collect climate and weather data via remote sensing outposts, satellites, and even autonomous [data buoys](http://www.ndbc.noaa.gov/) in the middle of the ocean! NOAA uses this data to predict the impacts of climate and weather may have on commerce and travel, and disasters like droughts and tsunamis.

NOAA's leadership in releasing their data has lead to the US Government's [Open Data Policy](https://en.wikipedia.org/wiki/Open_data_in_the_United_States), which was [published on Github](https://project-open-data.cio.gov/). Other agencies, like the National Weather Service (which is part of NOAA) and Census Bureau, now offer FTP access, where you can find tons of data that is otherwise hidden.

The goal of this project is to dig up under-explored data from a massive pile – a lot like [dumpster diving for data!](https://giphy.com/gifs/check-it-out-dr-steve-brule-xLsaBMK6Mg8DK/fullscreen) While sometimes visualizers are given nice, clean data and a simple task, more often the first step is searching for through an interesting but unstructured source for something to work with.

Your assignment is to dig through online servers, find data that is interesting to you, parse from it a story you want to tell, and create a visualization that shows us that story. The physical form of the project is completely up to you: a printed poster, a series of charts, a short play, sonification, sculpture, etc. Think about what presentation format best suits your data and what you want us to experience from it.

### ACCESSING THE FTP SERVERS  
To get access to these servers, you'll need a File Transfer Protocol (FTP) client, a piece of software that lets your browse the server and download files. You can use [Filezilla](https://sourceforge.net/projects/filezilla/), which is free but a little clunky, or [Transmit](https://panic.com/transmit/), which is $$ but works very well.

* Server address: URL to connect to (ex: `ftp.ngdc.noaa.gov`, see list below)  
* Username: `anonymous`  
* Password: none, leave blank!  

Servers:
* NOAA: `ftp.ngdc.noaa.gov`  
* National Weather Service: `tgftp.nws.noaa.gov`  
* Census Bureau: `ftp.census.gov`  
* Centers for Disease Control: `ftp.cdc.gov`  
* Environmental Protection Agency: `ftp.epa.gov`  
* Federal Elections Commission: `ftp.fcc.gov`  
* NASA: `neoftp.sci.gsfc.nasa.gov` and `cdaweb.gsfc.nasa.gov`  
* Treasury: `ofacftp.treas.gov`  
* You could also look at [this list of US government agencies](https://en.wikipedia.org/wiki/List_of_federal_agencies_in_the_United_States) and see if you can find FTP access for them – if you do find one, please let me know!  

See the `Resources` folder for screenshots of where to put this info in Filezilla and Transmit.

Once logged in, you can navigate the directories and look inside. To download a file, navigate the left-hand side to your desktop or downloads folder. Right-click the file you want to save and click "download". (See the `Resources` folder for screenshots of this, too.) Be careful of file sizes, though! Data files can get *really* big.

### DELIVERABLES  
Your finished project should include the following:

* At least one dataset found on a US government agency server    
* A finished visualization, in any format (print, sound, sculpture, etc) that tells a story from your data  
* A citation of your data's source, either embedded in the piece or accompanying it

### FOR WEDNESDAY, MARCH 7  
For next week, please continue to dig for data like we did in class, with the goal of at least one dataset to work with. You may find data in a common format (like the `csv` we've looked at), but it might also be in `txt` files, inside a compressed `zip` or `gz` archive, or in some weird format. You'll just have to look and dig... when in doubt: download and try to open it in a text editor!

Find something else cool? Just ask if there's a way we can use it for this project and we'll talk. Be sure to keep track of where you download your data from (a full path from the main page of the server, like a url) so you can cite it (and find it again) later. It will be easiest to keep track of this in a blank text file, or, for Mac users, in the `Comments` section in the file's `Get Info` pane.

Once you have something that interests you, start looking through it and think about what you want to show from the data. We'll look next week at how to view your data in Excel and do some basic operations on it, then start drafting your finished visualizations, so come with materials you might need to start working.

### FOR WEDNESDAY, MARCH 21  
Finish your project, details TBD. (Note that March 14 is spring break, so no class!)

### RESOURCES  

* More info on the US government's [Open Data Policy](https://project-open-data.cio.gov/)  
* For info on accessing the servers listed above, see the `Resources` folder for screenshots.  
