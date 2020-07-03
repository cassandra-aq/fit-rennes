import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Login from '@/views/Login';
import Admin from '@/views/Admin';
import Member from '@/views/Member';
// import store from '@/store/index';


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
		path: '/login',
		name: 'Login',
		component: Login
	},
  {
		path: '/admin',
		name: 'Admin',
		component: Admin,
		meta: { needAdmin: true }
  },
  {
		path: '/mon-compte',
		name: 'Member',
		component: Member
	},
]

const router = new VueRouter({
  routes
})

// router.beforeEach((to, from, next) => {
//   console.log('ok');
// 	const userInStore = store.state.users.user;
// 	const isAuthenticated = userInStore !== null ? true : false;
//   const isProtected = to.matched.some((route) => route.meta.needAuth);
//   const needAdmin = to.matched.some((route) => route.meta.needAdmin);
//   const isAdmin = isAuthenticated && store.getters.user.admin;

//   console.log(store.getters.user);

//   console.log(isAdmin);

// 	if (!isAuthenticated && isProtected) {
//     console.log('lul1');
//     next({ name: 'Login' });
//   } else if (needAdmin && !isAdmin) {
//     console.log('lul2');
// 		next({ name: 'Login' });
//   } else {
//     console.log('lul3');
// 		next();
// 	}
// });

export default router
