let CONSTANTE_FABRICANTE = 65536.0;

var convert = function(src, output, from){
    switch (from){
        case "decToHex":
            document.getElementById(output).innerHTML = decToHex(src);
            break;
        case "hexToDec":
            document.getElementById(output).innerHTML = hexToDec(src);
            break;
    }
};

var decToHex = function(src) {
    var mapping = {
        "0" : "0",
        "1" : "1",
        "2" : "2",
        "3" : "3",
        "4" : "4",
        "5" : "5",
        "6" : "6",
        "7" : "7",
        "8" : "8",
        "9" : "9",
        "10" : "A",
        "11" : "B",
        "12" : "C",
        "13" : "D",
        "14" : "E",
        "15" : "F"
    }
    
    var n = 0;
    var returnString = "";
    
    while (16 ** (n+1) < src) {
        n++;
    }
    
    for (n; n >= 0; n--) {
        if (16 ** n <= src) {
            returnString += mapping[Math.floor(src / 16 ** n).toString()];
            src = src - Math.floor(src / 16 ** n) * (16 ** n);
        } else {
            returnString += "0";
        }
    }
    
    return returnString;
};

var hexToDec = function(src) {
    
    var mapping = {
        "0" : "0",
        "1" : "1",
        "2" : "2",
        "3" : "3",
        "4" : "4",
        "5" : "5",
        "6" : "6",
        "7" : "7",
        "8" : "8",
        "9" : "9",
        "A" : "10",
        "B" : "11",
        "C" : "12",
        "D" : "13",
        "E" : "14",
        "F" : "15"
    }
    
    var srcString = src.toString();
    var returnNum = 0;
    var i;
    
    for (i = 0; i < srcString.length; i++) {
        returnNum += mapping[srcString[i]] * (16 ** (srcString.length -1 - i));
    }
    
    return returnNum;
    
};