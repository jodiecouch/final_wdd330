const dataPlace = "../data/trucks.json";

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

export function renderWithTemplate(
  templateFn,
  parentElement,
  data,
  callback  
) {
  parentElement.insertAdjacentHTML("afterbegin", templateFn);
  if(callback){
    callback(data);
  }
}

export async function getAds()
{
    const response = await fetch(dataPlace).then((response) => response.json());
    console.log(response.ads);
    //return response.ads;
    return response.ads;

}
async function displayData(ad)
 {
     console.log(ad.id);
     const html =  adTemplate(ad);
     const resultsElement = document.querySelector(".results");
     resultsElement.insertAdjacentHTML("beforeend", html);
 }

export async function loadAds()
{
    const data = await getAds();
    console.log("did i make it to here");
    data.forEach(displayData);
       
}

export async function filterResults( )
{
    //const gold = members.filter(x=> x.membership >=2);  
    /*this gets all members with a membership level greater then or equal to 2*/
 console.log(`Value passed was ${this.value} the id is ${this.id}`);
    //get filtered dataset
    const data = await getAds();
    const filteredData = data.filter(ads => ads[this.value] = this.id);
   console.log(filteredData);
    //clear results
FILTER NOT WORKING
    //build new results html

}

 