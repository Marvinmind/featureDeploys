importScripts('https://www.gstatic.com/firebasejs/7.15.5/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.15.5/firebase-messaging.js');

firebase.initializeApp({
	apiKey: 'AIzaSyAm1iB_FIJ0dRfSCCQBaxJCwFnhWU-SLu8',
	authDomain: 'craftnote-development.firebaseapp.com',
	databaseURL: 'https://craftnote-development.firebaseio.com',
	projectId: 'craftnote-development',
	storageBucket: 'craftnote-development.appspot.com',
	messagingSenderId: '165709396204',
	appId: '1:165709396204:web:b536ce2d40e2b3566ccdc9',
	measurementId: 'G-7P1F0SL4VL',
});

const messaging = firebase.messaging();
