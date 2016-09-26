// Node Modules
var firebase = require('firebase');
var rangi = require('rangi');
var moment = require('moment');

// Global Exports
var tg = require ('./tg.js');

// Firebase Initiaization
firebase.initializeApp({
  databaseURL: 'https://r-quiz-b.firebaseio.com'
});

var db = firebase.database();
var ref = db.ref('/');

// Streaming Data From Telegram To Firebase

tg.on('message', function (msg) {

    var userId = msg.from.id;
    var userName = msg.from.first_name;
    var Msgtime = moment().format('MMMM Do YYYY, h:mm:ss a');

    ref.push({
      user_id: userId,
      user_name: userName,
      timestamp: Msgtime
    });

    console.log(rangi.cyan('Message From => ' + msg.from.id));
});
