import {filterResults, loadAds} from "./Trucks.mjs";

 const truck = loadAds();
 console.log("Hey girl");

 //document.getElementById("model2500").onclick = filterResults(2500);
let button = document.getElementById("2500");
//let button = document.querySelector("button.model") - then need a for each to set the onclick
button.addEventListener("click",filterResults,false);
//button.myParam = "2500";


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



    


