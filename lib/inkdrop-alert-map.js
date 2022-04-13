var map = new Object();
map["[!warning]"] = "Warning";
map["[!note]"] = "Note";
map["[!tip]"] = "Tip";
map["[!important]"] = "Important";
map["[!caution]"] = "Caution";

function getAlert(k) {
    return map[k];
}

var mapBackground = new Object();
mapBackground["Warning"] = "#FFF4CE";
mapBackground["Note"] = "#EFD9FD";
mapBackground["Tip"] = "#DFF6DD";
mapBackground["Important"] = "#D7EAF8";
mapBackground["Caution"] = "#FDE7E9";

function getBackground(k) {
    return mapBackground[k];
}

var mapTitleColor = new Object();
mapTitleColor["Warning"] = "#6a4b16";
mapTitleColor["Note"] = "#50436C";
mapTitleColor["Tip"] = "#3A7547";
mapTitleColor["Important"] = "#004173";
mapTitleColor["Caution"] = "#6A4B16";

function getTitleColor(k) {
    return mapTitleColor[k];
}

var mapIcon = new Object();
mapIcon["Warning"] = "⚠️";
mapIcon["Note"] = "ⓘ";
mapIcon["Tip"] = "⛭";
mapIcon["Important"] = "ⓘ";
mapIcon["Caution"] = "☣";

function getIcon(k) {
    return mapIcon[k];
}



module.exports = { getAlert, getBackground, getTitleColor, getIcon }