import { createRouter, createWebHistory } from 'vue-router';
import GamePage from '../components/GamesCollection.vue';
import GameDetails from '../components/GameDetails.vue';

const routes = [
  {
    path: '/',
    name: 'GamePage',
    component: GamePage,
  },
  {
    path: '/game/:id', // Dynamic route for game details
    name: 'GameDetails',
    component: GameDetails,
    props: true, // Enables passing route params as props
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
