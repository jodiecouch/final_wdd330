import {clearFilters, filterResults, loadAds} from "./Trucks.mjs";

 const truck = loadAds();
 //console.log("Hey girl");

 //document.getElementById("model2500").onclick = filterResults(2500);
 // or
 /*
let button = document.getElementById("2500");
button.addEventListener("click",filterResults,false);
*/

var buttons = document.querySelectorAll("button.filter");
for(var i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click",filterResults,false);
}

let clear = document.getElementById("clearFilter");
clear.addEventListener("click",clearFilters,false);

/*
 const dataPlace = "data/trucks.json";
  fetch(dataPlace)
        .then(response => response.json())
        .then(json => {
            console.log(json);
            const ads = json['ads'];
            ads.forEach(displayData);
            console.log("did I make it");
        })
        
 
    function displayData(ad){
        console.log(`${ad.id}, ${ad.year}`);
        }

*/



    


