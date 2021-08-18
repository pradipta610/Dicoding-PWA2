/* eslint-disable linebreak-style */
/* eslint-disable max-len */

import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `

<h2 class="title">${restaurant.name}</h2>
<div class="img-container">
<img class="poster" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.pictureId}" />
</div>
<div class="info-container">
<h2 class="titlerestaurant">Restaurant Information</h2>
  <h3>Restaurant Name</h3>
  <p>${restaurant.name}</p>
  <h3>City</h3>
  <p>${restaurant.city}</p>
  <h3>Address</h3>
  <p>${restaurant.address}</p>
  <h3>Food Menu</h3>
  
  <p>${restaurant.menus.foods.map((food) => food.name)}</p>
  <h3>Kategori Menu</h3>
  <p>${restaurant.categories.map((food) => food.name)}</p>
 
  <h3>Drinks Menu</h3>
  
  <p>${restaurant.menus.drinks.map((food) => food.name)}</p>

  <h3>Rating</h3>
  <p>${restaurant.rating}</p>
</div>
<div class="overview-container">
  <h2 class="titlerestaurant">Tentang Restaurant</h2>
  <p>${restaurant.description}</p>
  <h2 class="titlerestaurant">Review Pelanggan</h2>
  ${restaurant.customerReviews.map((review) => `
          <h4 tabindex="0">${review.name} (${review.date})</h4>
          <p tabindex="0">${review.review}</p>
  `).join('')}
</div>
`;

const createRestaurantItemTemplate = (restaurant) => `
  <div  class= "card">
            <div class= "card-img"><img tabindex="0" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}"></div>
            <div  class="card-content">
                <div tabindex="0"class="card-title"><a href="${`/#/detail/${restaurant.id}`}">${restaurant.name}</a></div>
                <div class="inner-collapse">
                <div tabindex="0"class="card-city">Location : ${restaurant.city}</div>
                <div tabindex="0"class="card-rating">Rating : ${restaurant.rating}</div>
                </div>
                <p tabindex="0"class="card-deskripsi">${restaurant.description.substring(0, 100)}...</p>
            </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantDetailTemplate, createRestaurantItemTemplate, createLikeButtonTemplate, createLikedButtonTemplate,
};
