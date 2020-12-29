import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import firebase from 'firebase'

Vue.config.productionTip = false


var firebaseConfig = {
  apiKey: "AIzaSyAaH2b0uPRNuHOcJJeZRtPPUUShRB2cMic",
  authDomain: "tinder-app-1233e.firebaseapp.com",
  projectId: "tinder-app-1233e",
  storageBucket: "tinder-app-1233e.appspot.com",
  messagingSenderId: "626191238662",
  appId: "1:626191238662:web:a4bf1ec09bd29aeeb1e587"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
