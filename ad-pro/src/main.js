import Vue from 'vue';
import Router from 'vue-router';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './router/index';
import store from './store';
import fb from 'firebase';

Vue.use(Router);
Vue.config.productionTip = false;

new Vue({
  vuetify,
  render: h => h(App),
  router:router,
  store,
  created(){
    var firebaseConfig = {
		apiKey: "AIzaSyBLmJ4QLslMWVdxaQnj9AexLY3mhVadUd4",
		authDomain: "ad-pro-ee8bc.firebaseapp.com",
		projectId: "ad-pro-ee8bc",
		storageBucket: "ad-pro-ee8bc.appspot.com",
		messagingSenderId: "435424741916",
		appId: "1:435424741916:web:662809eb39b7b51b256dd9",
		measurementId: "G-WB6WZVJFR0"
	};
	
	// Initialize Firebase
	fb.initializeApp(firebaseConfig);
	fb.getAnalytics();
	fb.auth().onAuthStateChanged(user => {
		if (user) {
			this.$store.dispatch('autoLoginUser', user)
		}
   })
  

}
}).$mount('#app');
