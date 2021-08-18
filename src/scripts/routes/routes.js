/* eslint-disable linebreak-style */
/* eslint-disable import/no-duplicates */
import daftarRestaurant from '../views/pages/daftar-restaurant';
import NowPlaying from '../views/pages/daftar-restaurant';
import Detail from '../views/pages/detail';
import Like from '../views/pages/like';

const routes = {
  '/': NowPlaying, // default page
  '/daftar-restaurant': daftarRestaurant,
  '/detail/:id': Detail,
  '/like': Like,
};

export default routes;
