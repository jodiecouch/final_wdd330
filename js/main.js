import {clearFilters, filterResults, loadAds, loadFilters} from "./Trucks.mjs";

loadFilters();
 const truck = loadAds();
var buttons = document.querySelectorAll("button.filter");

for(var i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click",filterResults,false);
}

let clear = document.getElementById("clearFilter");
clear.addEventListener("click",clearFilters,false);

