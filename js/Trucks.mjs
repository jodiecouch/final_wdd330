const dataPlace = "../data/trucks.json";


export async function getAds()
{
    const response = await fetch(dataPlace).then((response) => response.json());
    return response.ads;

}