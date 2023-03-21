console.log("Hey girl");
const data = "data/trucks.json"

/*fetch(data)
.then(response => response.json())
.then(json => {
    console.log(json);
    const ads = json['ads'];
    //ads.forEach( )
})
*/

 fetch(data)
  .then(response => response.json())
  .then(json => {
    console.log(json);
   const details = json['ads'];
   details.forEach(displayData);
});

function displayData(ad){
    console.log(`${ad.id}, ${ad.year}`);

}