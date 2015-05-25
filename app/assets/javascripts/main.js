/**
 * Created by bruno on 25/05/15.
 */

var AppearIn = window.AppearIn || require('appearin-sdk');
var appearin = new AppearIn();

// Promise-based workflow (recommended)
//appearin.getRandomRoomName().then(function (roomName) {
    var iframe = document.getElementById("conf-iframe");
    appearin.addRoomToIframe(iframe, "rede-leve-51df561sa6dfas1f51asf5ariu99i54"); // roomName
//});
