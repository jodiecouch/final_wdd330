import {clearFilters, filterResults, loadAds, loadFilters} from "./Trucks.mjs";
import { loadForm } from "./NewAd.mjs";

function loadContent(){
    //clear the page content
    let results = document.querySelector(".results")
    let title = document.querySelector(".title")
    title.innerHTML="";    
    results.innerHTML = "";

    if(location.hash=="#home") {
        results.classList.add("home");
        results.classList.remove('newAd');
        loadFilters();
        const truck = loadAds();
        var buttons = document.querySelectorAll("button.filter");

        for(var i = 0; i < buttons.length; i++){
            buttons[i].addEventListener("click",filterResults,false);
        }

        let clear = document.getElementById("clearFilter");
        clear.addEventListener("click",clearFilters,false);

        }else if(location.hash=="#new"){
            results.classList.remove("home");
            results.classList.add('newAd');
            loadForm();
        }
}

if(!location.hash) {
  location.hash = "#home";
}

loadContent();

window.addEventListener("hashchange", loadContent)


