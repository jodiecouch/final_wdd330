const dataPlace = "../data/trucks.json";
const resultsElement = document.querySelector(".results");
var ads;

function adTemplate(truck)
{
    let text =  `<div class="card">          
          <p class="title">${truck.title} <span class="id">${truck.id} </span></p>
          <p class="price">${truck.price}</p>
          <div class="photo-reel">
            <div class="main-photo">
              <img src="images/001/01.jpg" alt="truck" />
            </div>
            <div class="thumb-container">
            ` 
            let images = truck.images;         
            
            images.forEach(function(value, i){
                text = text + `<div class="thumb-holder">
                <img src="${value}" alt="ad image" />
              </div>`
            });
                      
          text = text + `</div>
           </div>
            <div class="details">
            <p class="year">${truck.year}</p>
            <p class="model">Model: ${truck.model}</p>
            <p class="mileage">Miles: ${truck.miles}</p>
            <p class="trim">Trim: ${truck.trim}</p>
            <p class="driv">${truck.drive}</p>
            <p class="tranny">${truck.tran}</p>
          </div>
          <div class="description">
            <p>${truck.description}</p>          
            </div>
        </div>`
        return text;
}

/*export function renderWithTemplate(
  templateFn,
  parentElement,
  data,
  callback  
) {
  parentElement.insertAdjacentHTML("afterbegin", templateFn);
  if(callback){
    callback(data);
  }
}*/

function adFilters()
{
  let text =`<h1>Trucks For Sale</h1>
      <div class="filters">
        <button class="filter" id="1500" value="model">1500</button>
        <button class="filter" id="2500" value="model">2500</button>
        <button class="filter" id="3500" value="model">3500</button>
        <button class="filter" id="1" value="gen">Gen 1</button>
        <button class="filter" id="2" value="gen">Gen 2</button>
        <button class="filter" id="3" value="gen">Gen 3</button>
        <button class="filter" id="4" value="gen">Gen 4</button>
        <button class="filter" id="5" value="gen">Gen 5</button>
        <button class="filter" id="12v" value="valve">12 Valve</button>
        <button class="filter" id="24v" value="valve">24 Valve</button>
        <button class="filter" id="Manual" value="tran">Manual</button>
        <button class="filter" id="Automatic" value="tran">Automatic</button>
        <button id="clearFilter">Clear Filters</button>
      </div>`
  return text;
}

export async function loadFilters()
{
  const html = adFilters();
  const titleElement = document.querySelector(".title");  
  titleElement.insertAdjacentHTML("beforeend", html);
  
}

export async function getAds()
{
    const response = await fetch(dataPlace).then((response) => response.json());
    //console.log(response.ads);    
    return response.ads;

}
async function displayData(ad)
 {
     //console.log(ad.id);
     const html =  adTemplate(ad);
     //const resultsElement = document.querySelector(".results");
     resultsElement.insertAdjacentHTML("beforeend", html);
 }

export async function loadAds()
{
    //const data = await getAds();
    ads = await getAds();
    //console.log("did i make it to here");
    ads.forEach(displayData);
       
}

export async function filterResults( )
{    
    //console.log(`Value passed was ${this.value} the id is ${this.id} Ad data follows`);
    //console.log(ads);
    
   
   //ads should be loaded with all ads from original page load
   var filteredData = ads.filter(a => a[this.value] == this.id);

    if (filteredData.length > 0){
      //clear results section
      resultsElement.innerHTML="";

      filteredData.forEach(displayData);
    }else{
      //else tell user no results
      window.alert("No results found for filter.");
    }
        
}

export async function clearFilters()
{
  //clear results section
  resultsElement.innerHTML="";
  //show everything again
  ads.forEach(displayData);
}


 