import Vue from 'vue'
import VueHead from 'vue-head'
import VueRouter from 'vue-router'

import Home from '../pages/Home.vue'
import Favorites from '../pages/Favorites.vue'
import SearchResults from '../pages/SearchResults.vue'
import Details from '../pages/Details.vue'
import NotFound from '../pages/NotFound.vue'

Vue.use(VueHead)
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
    	path: '/',
    	name: 'home',
    	component: Home
   	},
		{
			path: '/favorites/',
			name: 'favorites',
			component: Favorites
		},
		{
			path: '/:searchTerm/',
			name: 'search-results',
			component: SearchResults
		},
		{
			path: '/:searchTerm/:gifId/',
			name: 'details',
			component: Details
		},
		{
			path: '*',
			name: 'notfound',
			component: NotFound
		}
  ]
})

export default router
