presidentsApp.service('presidentsService', function() {
	this.getPresidents = function() {
		return [
			{
				"number": "1",
				"fname": "George",
				"lname":  "Washington",
				"years": "1789 - 1797",
				"terms": ["1", "2"],
				"image": "http://www.npg.si.edu/img2/travpres/big/biggwpp.jpg"
			},
			{
				"number": "2",
				"fname": "John",
				"lname": "Adams",
				"years": "1797 - 1801",
				"terms": ["3"],
				"image": "http://www.npg.si.edu/img2/travpres/big/bigadams.gif"
			},
			{
				"number": "3",
				"fname": "Thomas",
				"lname": "Jefferson",
				"years": "1801 - 1809",
				"terms": ["4", "5"],
				"image": "http://www.npg.si.edu/img2/travpres/big/bigtom.jpg"
			},
			{
				"number": "4",
				"fname": "James",
				"lname": "Madison",
				"years": "1809 - 1817",
				"terms": ["6", "7"],
				"image": "http://www.npg.si.edu/img2/travpres/big/bigmadison.gif"
			},
			{
				"number": "5",
				"fname": "James",
				"lname": "Monroe",
				"years": "1817 - 1825",
				"terms": ["8", "9"],
				"image": "http://www.npg.si.edu/img2/travpres/big/bigmonro.jpg"
			},
			{
				"number": "6",
				"fname": "John",
				"lname": "Adams",
				"years": "1825 - 1829",
				"terms": ["10"],
				"image": "http://www.npg.si.edu/img2/travpres/big/bigjqa.gif"
			},
			{
				"number": "7",
				"fname": "Andrew",
				"lname": "Jackson",
				"years": "1829 - 1837",
				"terms": ["11", "12"],
				"image": "http://www.npg.si.edu/img2/travpres/big/bigjack1.gif"
			},
			{
				"number": "8",
				"fname": "Martin",
				"lname": "Van Buren",
				"years": "1837 - 1841",
				"terms": ["13"],
				"image": "http://www.npg.si.edu/img2/travpres/big/bigvb2.jpg"
			},
			{
				"number": "9",
				"fname": "William",
				"lname": "Harrison",
				"years": "1841 - 1841",
				"terms": ["14"],
				"image": "http://www.npg.si.edu/img2/travpres/big/bigwhharr.gif"
			},
			{
				"number": "10",
				"fname": "John",
				"lname": "Tyler",
				"years": "1841 - 1845",
				"terms": ["14"],
				"image": "http://www.npg.si.edu/img2/travpres/big/bigtyler.gif"
			},
			{
				"number": "11",
				"fname": "James",
				"lname": "Polk",
				"years": "1845 - 1849",
				"terms": ["15"],
				"image": "http://www.npg.si.edu/img2/travpres/big/bigpolk.jpg"
			},
			{
				"number": "12",
				"fname": "Zachary",
				"lname": "Tyler",
				"years": "1849 - 1850",
				"terms": ["16"],
				"image": "http://www.npg.si.edu/img2/travpres/big/bigztay1.gif"
			},
			{
				"number": "13",
				"fname": "Milard",
				"lname": "Fillmore",
				"years": "1850 - 1853",
				"terms": ["16"],
				"image": "http://www.npg.si.edu/img2/travpres/big/bigmfill.gif"
			},
			{
				"number": "14",
				"fname": "Franklin",
				"lname": "Pierce",
				"years": "1853 - 1857",
				"terms": ["17"],
				"image": "http://www.npg.si.edu/img2/travpres/big/bigpierce.gif"
			},
			{
				"number": "15",
				"fname": "James",
				"lname": "Buchanan",
				"years": "1857 - 1861",
				"terms": ["18"],
				"image": "http://www.npg.si.edu/img2/travpres/big/bigbuch.jpg"
			},
			{
				"number": "16",
				"fname": "Abraham",
				"lname": "Lincoln",
				"years": "1861 - 1865",
				"terms": ["19"],
				"image": "http://www.npg.si.edu/img2/travpres/big/biglincs.jpg"
			},
			{
				"number": "17",
				"fname": "Andrew",
				"lname": "Johnson",
				"years": "1865 - 1869",
				"terms": ["20"],
				"image": "http://www.npg.si.edu/img2/travpres/big/bigjohn.gif"
			},
			{
				"number": "18",
				"fname": "Ulysses",
				"lname": "Grant",
				"years": "1869 - 1877",
				"terms": ["21", "22"],
				"image": "http://www.npg.si.edu/img2/travpres/big/biggrant.gif"
			},
			{
				"number": "19",
				"fname": "Rutherford",
				"lname": "Hayes",
				"years": "1877 - 1881",
				"terms": ["23"],
				"image": "http://www.npg.si.edu/img2/travpres/big/bighayes2.jpg"
			},
			{
				"number": "20",
				"fname": "James",
				"lname": "Garfield",
				"years": "1881 - 1881",
				"terms": ["24"],
				"image": "http://www.npg.si.edu/img2/travpres/big/biggarf.gif"
			},
			{
				"number": "21",
				"fname": "Chester",
				"lname": "Author",
				"years": "1881 - 1885",
				"terms": ["24"],
				"image": "http://www.npg.si.edu/img2/travpres/big/bigchest.gif"
			},
			{
				"number": "22",
				"fname": "Grover",
				"lname": "Cleveland",
				"years": "1885 - 1889",
				"terms": ["25"],
				"image": "http://www.npg.si.edu/img2/travpres/big/biggrover.gif"
			},
			{
				"number": "23",
				"fname": "Benjamin",
				"lname": "Harrison",
				"years": "1889 - 1893",
				"terms": ["26"],
				"image": "http://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Benjamin_Harrison_%28official_Presidential_portrait%2C_1895%29.jpg/398px-Benjamin_Harrison_%28official_Presidential_portrait%2C_1895%29.jpg"
			},
			{
				"number": "24",
				"fname": "Grover",
				"lname": "Cleveland",
				"years": "1893 - 1897",
				"terms": ["27"],
				"image": "http://www.npg.si.edu/img2/travpres/big/biggrover.gif"
			},
			{
				"number": "25",
				"fname": "William",
				"lname": "McKinley",
				"years": "1897 - 1901",
				"terms": ["28"],
				"image": "http://www.npg.si.edu/img2/travpres/big/bigmckin2.jpg"
			},
			{
				"number": "26",
				"fname": "Theodore",
				"lname": "Roosevelt",
				"years": "1901 - 1909",
				"terms": ["29", "30"],
				"image": "http://www.npg.si.edu/img2/travpres/big/bigtr.gif"
			},
			{
				"number": "27",
				"fname": "William",
				"lname": "Taft",
				"years": "1909 - 1913",
				"terms": ["31"],
				"image": "http://www.npg.si.edu/img2/travpres/big/bigtaft2.jpg"
			},
			{
				"number": "28",
				"fname": "Woodrow",
				"lname": "Wilson",
				"years": "1913 - 1921",
				"terms": ["32", "33"],
				"image": "http://www.npg.si.edu/img2/travpres/big/bigwood.gif"
			},
			{
				"number": "29",
				"fname": "Warren",
				"lname": "Harding",
				"years": "1921 - 1923",
				"terms": ["34"],
				"image": "http://www.npg.si.edu/img2/travpres/big/bigwarr.gif"
			},
			{
				"number": "30",
				"fname": "Calvin",
				"lname": "Coolidge",
				"years": "1923 - 1929",
				"terms": ["34", "35"],
				"image": "http://www.npg.si.edu/img2/travpres/big/bigcool.gif"
			},
			{
				"number": "31",
				"fname": "Herbert",
				"lname": "Hoover",
				"years": "1929 - 1933",
				"terms": ["36"],
				"image": "http://www.npg.si.edu/img2/travpres/big/bighoov.gif"
			},
			{
				"number": "32",
				"fname": "Franklin",
				"lname": "Roosevelt",
				"years": "1933 - 1945",
				"terms": ["37", "38", "39", "40"],
				"image": "http://www.npg.si.edu/img2/travpres/big/bigfdr.gif"
			},
			{
				"number": "33",
				"fname": "Harry",
				"lname": "Truman",
				"years": "1945 - 1953",
				"terms": ["40", "41"],
				"image": "http://www.npg.si.edu/img2/travpres/big/bigtruman.gif"
			},
			{
				"number": "34",
				"fname": "Dwight",
				"lname": "Eisenhower",
				"years": "1953 - 1961",
				"terms": ["42", "43"],
				"image": "http://www.npg.si.edu/img2/travpres/big/bigeisen.gif"
			},
			{
				"number": "35",
				"fname": "John",
				"lname": "Kennedy",
				"years": "1961 - 1963",
				"terms": ["44"],
				"image": "http://upload.wikimedia.org/wikipedia/commons/thumb/2/21/John_F_Kennedy_Official_Portrait.jpg/405px-John_F_Kennedy_Official_Portrait.jpg"
			},
			{
				"number": "36",
				"fname": "Lydon",
				"lname": "Johnson",
				"years": "1963 - 1969",
				"terms": ["44", "45"],
				"image": "http://www.npg.si.edu/img2/travpres/big/biglbj.gif"
			},
			{
				"number": "37",
				"fname": "Richard",
				"lname": "Nixon",
				"years": "1969 - 1974",
				"terms": ["46", "47"],
				"image": "http://www.npg.si.edu/img2/travpres/big/bignixon.jpg"
			},
			{
				"number": "38",
				"fname": "Gerald",
				"lname": "Ford",
				"years": "1974 - 1977",
				"terms": ["47"],
				"image": "http://www.npg.si.edu/img2/travpres/big/bigford2.jpg"
			},
			{
				"number": "39",
				"fname": "Jimmy",
				"lname": "Carter",
				"years": "1977 - 1981",
				"terms": ["48"],
				"image": "http://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Official_presidential_portrait_of_Jimmy_Carter_%28by_Herbert_E._Abrams%2C_1982%29.jpg/510px-Official_presidential_portrait_of_Jimmy_Carter_%28by_Herbert_E._Abrams%2C_1982%29.jpg"
			},
			{
				"number": "40",
				"fname": "Ronald",
				"lname": "Reagan",
				"years": "1981 - 1989",
				"terms": ["49", "50"],
				"image": "http://www.npg.si.edu/img2/travpres/big/bigreagan.gif"
			},
			{
				"number": "41",
				"fname": "George",
				"lname": "Bush",
				"years": "1989 - 1993",
				"terms": ["51"],
				"image": "http://www.npg.si.edu/img2/travpres/big/bigbush.gif"
			},
			{
				"number": "42",
				"fname": "Bill",
				"lname": "Clinton",
				"years": "1993 - 2001",
				"terms": ["52", "53"],
				"image": "http://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Bill_Clinton_-_Presidential_portrait.jpg/471px-Bill_Clinton_-_Presidential_portrait.jpg"
			},
			{
				"number": "43",
				"fname": "George",
				"lname": "Bush",
				"years": "2001 - 2009",
				"terms": ["54", "55"],
				"image": "http://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/George_W_Bush_-_Presidential_portrait.jpg/478px-George_W_Bush_-_Presidential_portrait.jpg"
			},
			{
				"number": "44",
				"fname": "Barack",
				"lname": "Obama",
				"years": "2009 - 2016",
				"terms": ["56", "57"],
				"image": "http://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/President_Barack_Obama.jpg/480px-President_Barack_Obama.jpg"
			}
		]
	}
});