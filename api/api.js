const YELP_API_KEY = "BUl1SYe49QRO5EpgsdmKbCyHGj5nq-PjglCtATcr0HH3vuduUKBFKbuenWAuuU14I0DZhgYmvCLAT0bfe02jMRUcQe_4nnwBdZE842AL76m9U7ylzwBIvTireB-LYnYx";
const yelpUrl = "https://api.yelp.com/v3/businesses/search?term=restaurants&location=Hollywood";
const apiOptions={
    headers:{
    Authorization: `Bearer ${YELP_API_KEY}`, 
    }
};
const getRestaurantsFromYelp = async ()=> {
    try{
        const response = await fetch(yelpUrl, apiOptions);
        const restaurantObject = await response.json();
        return restaurantObject;

    } catch (error) {
        console.error(error)
    }
};

export default getRestaurantsFromYelp;