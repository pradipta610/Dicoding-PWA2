/* eslint-disable linebreak-style */
import restaurantdbSource from '../../data/restaurantdb-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const daftarRestaurant = {
  async render() {
    return `
      <h1>Daftar Restaurant </h1>
      <div id="card-container">
      
</div>
       
      `;
  },

  async afterRender() {
    const restaurants = await restaurantdbSource.listOfRestaurants();
    const restaurantsContainer = document.querySelector('#card-container');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default daftarRestaurant;
