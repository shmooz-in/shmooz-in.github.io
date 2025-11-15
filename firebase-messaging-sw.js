// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing the generated config
var firebaseConfig = {
    apiKey: 'AIzaSyAza2ttwL_S947xdIVkgvrlS8kIgUXva9w',
    authDomain: 'shmooz-79c7e.firebaseapp.com',
    projectId: 'shmooz-79c7e',
    storageBucket: 'shmooz-79c7e.appspot.com',
    messagingSenderId: '786248212603',
    appId: '1:786248212603:web:fafda5a88186239bc182de'
};

// This initializes the Firebase app with the provided configuration
firebase.initializeApp(firebaseConfig);

// This retrieves an instance of Firebase Messaging to handle background messages.
const messaging = firebase.messaging();

// Utility functions to format date and time values.

// Function to format data to 2 digit like 01, 02, 03, 04, 05, 06, 07, 08, 09
function formatData(input) {
    if (input > 9) {
        return input;
    } else return `0${input}`;
};

// Function to format hour to 12 hour format
function formatHour(input) {
    if (input > 12) {
        return input - 12;
    }
    return input;
};

// Function to format date to dd/mm/yyyy
function formatDate(date) {
    const today = new Date(date); // e.g. 2021-01-01
    const yyyy = today.getFullYear(); // e.g. 2021
    let mm = today.getMonth() + 1; // Months start at 0!
    let dd = today.getDate(); // Days start at 1!

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;

    const formattedToday = dd + '/' + mm + '/' + yyyy;

    return formattedToday;
};

// Function to format time to hh:mm AM/PM format e.g. 12:01 AM
function formatTime(date) {
    const today = new Date(date);
    let hh = formatData(formatHour(today.getHours())); // Hours in 12h format
    let MM = formatData(today.getMinutes()); // Minutes in 2 digits
    const formattedToday = `${hh}:${MM} ${today.getHours() > 12 ? 'PM' : 'AM'}`; // AM or PM based on hours value

    return formattedToday;
};

// This function is triggered when a background message is received. It logs the payload and can be customized to show notifications.
messaging.onBackgroundMessage(function (payload) {
    /// used when backgound message is recived to notify application using fcm channel
    console.log('Received background message ', payload);
    // Customize notification here

    const notificationTitle = payload.notification.title + 'custom';
    const notificationOptions = {
        body: payload.notification.body
    };

    const fcmChannel = new BroadcastChannel('fcm-channel');
    fcmChannel.postMessage('test');

    // self.registration.showNotification(notificationTitle, notificationOptions);
});

// This event listener handles notification click events. 
// It focuses an existing window or opens a new one with the URL specified in the notification data.
self.addEventListener('notificationclick', function (event) {
    console.log('notificationclick', event);
    var urlToRedirect = event.notification.data.url;
    event.notification.close();
    //event.waitUntil(self.clients.openWindow(urlToRedirect));

    event.waitUntil(
        clients
            .matchAll({
                includeUncontrolled: true,
                type: 'window'
            })
            .then((clientList) => {
                for (const client of clientList) {
                    if ('focus' in client) return client.focus();
                }
                if (clients.openWindow) return clients.openWindow(urlToRedirect);
            })
    );
});
