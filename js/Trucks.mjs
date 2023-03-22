const dataPlace = "../data/trucks.json";


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
 }

export async function loadAds()
{
    const data = await getAds();
    console.log("did i make it to here");
    data.forEach(displayData);
}
 