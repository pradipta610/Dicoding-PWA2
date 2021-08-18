/* eslint-disable linebreak-style */
import API_ENDPOINT from '../globals/api-endpoint';

class restaurantdbSource {
  static async listOfRestaurants() {
    const response = await fetch(API_ENDPOINT.LIST);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailRestaurants(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }
}

export default restaurantdbSource;
