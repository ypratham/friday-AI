const sr = window.webkitSpeechRecognition || window.SpeechRecognition;
const fridayArea = document.getElementById('friday');

var programRun = true;

function startListening() {
    if (window.hasOwnProperty('webkitSpeechRecognition')) {
        const recog = new sr();
        recog.lang = 'en-in';
        var activatingAudio = new Audio('sounds/activate.ogg');
        activatingAudio.playbackRate = 3;
        activatingAudio.play()
        recog.onstart = console.log("Listening");
        recog.onresult = function (data) {
            handleResults(data);
        }
        recog.start();

    } else {
        console.log('speech recognition not working on this browser');
    }
}

function handleResults(data) {
    let text = data.results[0][0].transcript;
    text = text.toLowerCase();
    console.log(text)
    ProcessCommand(text)
}

// Hand written set of rule
function ProcessCommand(UserText) {
    setOPL();
    let fridayToSpeak = "";

    // Open Instagram
    if (UserText.includes(UserText.includes("friday") && UserText.includes("instagram"))) {
        fridayToSpeak = "Open instagram";
        Speak(fridayToSpeak);
        window.open("https://www.instagram.com");
    }

    // Search for google
    else if (UserText.includes("friday") && UserText.includes("search google for ")) {
        var searchKeyword = UserText.split("search google for ")[1];
        var keyword = searchKeyword.replace(" ", "+");
        fridayToSpeak = "Searching for " + searchKeyword;
        Speak(fridayToSpeak);
        window.open("https://www.google.com/search?q=" + keyword + "&sxsrf=ALeKk03sVEDsI9OOb0iUnBoaAHFebmCnWA%3A1622786896460&ei=UMO5YJa-G4aI4-EPgOyLuA8&oq=%22How+to+&gs_lcp=Cgdnd3Mtd2l6EAMYATIECCMQJzIECCMQJzIECCMQJzIFCAAQkQIyBQgAEJECMgUIABCRAjIFCAAQkQIyBQgAEJECMgcIABCHAhAUMgcIABCHAhAUOgcIIxDqAhAnOgQIABBDOgQILhBDOgUIABCxAzoHCAAQsQMQQzoCCABQoRJYpTtg8UZoA3ACeACAAbECiAH8CZIBBzAuOC4wLjGYAQCgAQGqAQdnd3Mtd2l6sAEKwAEB&sclient=gws-wiz");
    }

    // search youtube
    else if (UserText.includes("friday") && UserText.includes("search youtube")) {
        var searchKeyword = UserText.split("youtube")[1];
        fridayToSpeak = "Searching for " + searchKeyword;
        Speak(fridayToSpeak);
        window.open("https://www.youtube.com/results?search_query=" + searchKeyword);
    }

    // friday help
    else if (UserText.includes("friday") && UserText.includes("help")) {
        fridayToSpeak = "How may I help you?" + searchKeyword;
        Speak(fridayToSpeak);
    }

    // open youtube
    else if (UserText.includes("friday") && UserText.includes("youtube")) {
        fridayToSpeak = "Opening youtube"
        Speak(fridayToSpeak);

        window.open("https://www.youtube.com");
    }

    // open google meet
    else if (UserText.includes("friday") && UserText.includes("google") && UserText.includes("meet")) {
        fridayToSpeak = "Starting meet session";
        Speak(fridayToSpeak);

        window.open("https://meet.google.com/vdn-ykrc-ztz");
    }

    // open google classroom
    else if (UserText.includes("friday") && UserText.includes("google") && UserText.includes("classroom")) {
        fridayToSpeak = "Opening google";
        Speak(fridayToSpeak);

        window.open("https://classroom.google.com/u/2/h");
    }

    else if (UserText.includes("friday") && UserText.includes("college") && UserText.includes("google") && UserText.includes("drive")) {
        fridayToSpeak = "Opening college google drive";
        Speak(fridayToSpeak);

        window.open("https://drive.google.com/drive/u/2/my-drive");
    }

    // open google 
    else if (UserText.includes("friday") && UserText.includes("google")) {
        fridayToSpeak = "Opening google";
        Speak(fridayToSpeak);

        window.open("https://www.google.com");
    }

    // open github
    else if (UserText.includes("friday") && UserText.includes("github")) {
        fridayToSpeak = "Opening github";
        Speak(fridayToSpeak);

        window.open("https://github.com/");
    }

    // open pyadav5000 mail
    else if (UserText.includes("friday") && UserText.includes("mail") && UserText.includes("first one")) {
        fridayToSpeak = "Opening p yadav 5000 mail";
        Speak(fridayToSpeak);

        window.open("https://mail.google.com/mail/u/0/?tab=wm#inbox");
        setTimeout(startListening, 3000);
    }

    // open college mail
    else if (UserText.includes("friday") && UserText.includes("mail") && UserText.includes("college")) {
        fridayToSpeak = "Opening college mail";
        Speak(fridayToSpeak);

        window.open("https://mail.google.com/mail/u/2/#inbox");
        setTimeout(startListening, 3000);
    }

    // open figma file of friday 
    else if (UserText.includes("friday") && UserText.includes("your") && UserText.includes("figma")) {
        fridayToSpeak = "Opening my figma file";
        Speak(fridayToSpeak);
        window.open("https://www.figma.com/file/T8KvvogfSiNRfaTWh6wQuM/FRIDAY?node-id=1%3A2");
        setTimeout(startListening, 3000);
    }

    // hello to friday
    else if (UserText.includes("friday") && UserText.includes("hello")) {
        fridayToSpeak = "Hello, sir!";
        Speak(fridayToSpeak);
        setTimeout(startListening, 3000);
    }

    // sleep friday
    else if (UserText.includes("friday") && UserText.includes("quit") || UserText.includes("bye") || UserText.includes("quit") || UserText.includes("sleep")) {
        fridayToSpeak = "Ok sir";
        Speak(fridayToSpeak);

        programRun = false
    }
    // say friday
    else if (UserText.includes("friday")) {
        fridayToSpeak = "Yes sir, how may I help you?";
        Speak(fridayToSpeak);
        setTimeout(startListening, 3500);
    }
    // else didn't get that
    else {
        fridayToSpeak = "Sorry, I didn't get that";
        Speak(fridayToSpeak);

        setTimeout(startListening, 3000);
    }
    setOPH();
}

// Wish me function
function wishMe() {
    var todayDate = new Date()

    var hourDateFormat = todayDate.getHours();

    if (hourDateFormat >= 6 && hourDateFormat < 12) {
        Speak("Good Morning, sir")
    }
    else if (hourDateFormat >= 12 && hourDateFormat < 18) {
        Speak("Good Afternoon, sir")
    } else {
        Speak("Good Evening, sir")
    }
    Speak("System initialized successfully. How may I help you?");
}

// Friday speaking
function Speak(txt) {
    const utter = new SpeechSynthesisUtterance();

    utter.text = txt;

    window.speechSynthesis.speak(utter);
}

// Youtube search field
function ytSearch(search) {
    const apiKey = "AIzaSyBi_5RvkjrxJOkx8JC_ks2xKahOlD-zRw4";
    const url = "https://www.googleapis.com/youtube/v3/search?key=" + apiKey +
        "&type=video&part=snippet&maxResult=20&q=" + search;
}

// JSON data for youtube
function returnJSONData(url) {
    fetch(url).then(res => res.json()).then((out) => {
        // console.log(out);
        var searchLink = out.items[0].id.videoId;
        var link = "https://www.youtube.com/watch?v=" + searchLink;
        window.open(link);
    }).catch(err => { throw err });
}

// Function to show weather stats
function weatherStats(query) {
    const apiKey = "4ab8f1b0a8d4078544a4eff779d847de";
    const units = "metric";
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apiKey + "&units=" + units;
    fetch(url).then(res => res.json()).then((weatherData) => {
        // const weatherData = JSON.parse(out);
        const temp = weatherData.main.temp;
        const icon = weatherData.weather[0].icon
        const imgUrl = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
        document.getElementById('weather-icon').src = imgUrl;
        tempDetails.innerHTML = temp + " &#176";
        console.log(imgUrl);
        console.log(temp);
    }).catch(err => { throw err });
}

// function to keep the weather update after every 30s
function weatherUpdate() {
    const refresh = 30000;
    setTimeout('weatherStats("Navi%20Mumbai")', refresh);
}
// Setting the opacity of the Friday body to high
function setOPH() {
    document.getElementById('letsSpeak').style.opacity = "100%";
}
// Setting the opacity of the Friday body to Low
function setOPL() {
    document.getElementById('letsSpeak').style.opacity = "50%";
}
// Function to keep the time and date up to date after every 60sec
function timeDateUpdate() {
    var refresh = 1000; // Refresh rate in milli seconds
    setTimeout('showDateTime()', refresh)
}
// Function for showing date and time
function showDateTime() {
    var time = timeFunc();
    const dt = new Date();
    const options = {
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    }
    var date = dt.toLocaleString('en-us', options)

    document.getElementById('date').innerHTML = time
    document.getElementById('month').innerHTML = date
    timeDateUpdate();
}

// Function for getting time
function timeFunc() {
    const dt = new Date();
    var timeH = dt.getHours();
    var timeS = "";
    var timeM = dt.getMinutes();
    var timeSec = dt.getSeconds();
    if (timeH > 12) {
        timeS = "PM";
        timeH = timeH - 12;
    }
    else if (timeH < 12) {
        timeS = "AM";

    }

    var time = (timeH) + ":" + timeM + ":" + timeSec + " " + timeS;
    return time;
}

// functions to load google map in my web
function scanMe() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition)
    }
}
function showPosition(position) {
    var lat = position.coords.latitude;
    var lng = position.coords.longitude;
    initMap(lat, lng)
}
function initMap(lati, long) {
    const stylesArray = [
        {
            "featureType": "all",
            "stylers": [
                { "color": "#c0c0c0" }
            ]
        },

    ]
    let map = new google.maps.Map(document.getElementById('google-map'), {
        center: { lat: lati, lng: long },
        zoom: 8,
        styles: [
            { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
            { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
            { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
            {
                featureType: "administrative.locality",
                elementType: "labels.text.fill",
                stylers: [{ color: "#d59563" }],
            },
            {
                featureType: "poi",
                elementType: "labels.text.fill",
                stylers: [{ color: "#d59563" }],
            },
            {
                featureType: "poi.park",
                elementType: "geometry",
                stylers: [{ color: "#263c3f" }],
            },
            {
                featureType: "poi.park",
                elementType: "labels.text.fill",
                stylers: [{ color: "#6b9a76" }],
            },
            {
                featureType: "road",
                elementType: "geometry",
                stylers: [{ color: "#38414e" }],
            },
            {
                featureType: "road",
                elementType: "geometry.stroke",
                stylers: [{ color: "#212a37" }],
            },
            {
                featureType: "road",
                elementType: "labels.text.fill",
                stylers: [{ color: "#9ca5b3" }],
            },
            {
                featureType: "road.highway",
                elementType: "geometry",
                stylers: [{ color: "#746855" }],
            },
            {
                featureType: "road.highway",
                elementType: "geometry.stroke",
                stylers: [{ color: "#1f2835" }],
            },
            {
                featureType: "road.highway",
                elementType: "labels.text.fill",
                stylers: [{ color: "#f3d19c" }],
            },
            {
                featureType: "transit",
                elementType: "geometry",
                stylers: [{ color: "#2f3948" }],
            },
            {
                featureType: "transit.station",
                elementType: "labels.text.fill",
                stylers: [{ color: "#d59563" }],
            },
            {
                featureType: "water",
                elementType: "geometry",
                stylers: [{ color: "#17263c" }],
            },
            {
                featureType: "water",
                elementType: "labels.text.fill",
                stylers: [{ color: "#515c6d" }],
            },
            {
                featureType: "water",
                elementType: "labels.text.stroke",
                stylers: [{ color: "#17263c" }],
            },
        ]
    });
}
// Function when DOM Content loads
function onPageLoad() {
    showDateTime();
    weatherStats("Navi%20Mumbai");
    scanMe();
    wishMe();
    startListening();


}

window.addEventListener("DOMContentLoad", onPageLoad());

document.getElementById('letsSpeak').addEventListener("click", function () {
    setOPL();
    startListening();
    setOPH();

});
