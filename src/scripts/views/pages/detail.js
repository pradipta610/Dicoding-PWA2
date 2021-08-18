/* eslint-disable linebreak-style */
import UrlParser from '../../routes/url-parser';
import restaurantdbSource from '../../data/restaurantdb-source';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
        <div class="posts" id="card-container-detail"></div>
        <div id="likeButtonContainer"></div>
        
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurants = await restaurantdbSource.detailRestaurants(url.id);
    const restaurantContainer = document.querySelector('#card-container-detail');
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurants);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: restaurants.id,
        pictureId: restaurants.pictureId,
        name: restaurants.name,
        city: restaurants.city,
        address: restaurants.address,
        rating: restaurants.rating,
        description: restaurants.description,
      },
    });
  },
};

export default Detail;
