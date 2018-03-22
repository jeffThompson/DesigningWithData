CREATE TABLE IF NOT EXISTS `earthquakes` (
	`eqid` varchar(8) COLLATE latin1_general_ci NOT NULL,
	`src` varchar(2) COLLATE latin1_general_ci NOT NULL,
	`version` int NOT NULL,
	`datetime` datetime NOT NULL,
	`lat` float NOT NULL,
	`lon` float NOT NULL,
	`magnitude` float NOT NULL,
	`depth` float NOT NULL,
	`nst` int NOT NULL,
	`region` varchar(40) COLLATE latin1_general_ci NOT NULL
)

INSERT INTO `earthquakes` (`eqid`, `src`, `version`, `datetime`, `lat`, `lon`, `magnitude`, `depth`, `nst`, `region`) VALUES 
('11034853', 'ci', 0, '2011-11-21 01:01:38', 33.1762, -115.6135, 3.2, 2.30, 70, 'Southern California'),
('10360520', 'ak', 1, '2011-11-20 23:32:28', 59.6523, -154.5378, 3.2, 194.10, 59, 'Southern Alaska'),
('c0006v94', 'us', 5, '2011-11-20 21:25:40', 5.6169, 127.2300, 4.7, 81.30, 30, 'Philippine Islands region');