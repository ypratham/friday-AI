const sr =  window.webkitSpeechRecognition || window.SpeechRecognition;
const fridayArea = document.getElementById('friday');

var programRun = true;

function startListening(){
    if (window.hasOwnProperty('webkitSpeechRecognition')) {
        const recog = new sr();
        recog.lang = 'en-in';
        var activatingAudio = new Audio('activate.ogg');
        activatingAudio.play()
        activatingAudio.playbackRate = 3;
        recog.onstart = console.log("Listening");
        recog.onresult = function (data) {
            handleResults(data);
        }
        recog.start();

      } else {
        console.log('YOUR: not working on this browser');
      }    
}

function handleResults(data) {
    let text = data.results[0][0].transcript;
    text = text.toLowerCase();
    console.log(text)
    ProcessCommand(text)
}

function ProcessCommand(UserText) {
    let fridayToSpeak = "";

    // Open Instagram
    if(UserText.includes(UserText.includes("friday") && "instagram")){
        fridayToSpeak = "Open instagram";
        Speak(fridayToSpeak);
        window.open("https://www.instagram.com");
    }
    // Search for google
    else if(UserText.includes("friday") && UserText.includes("search google for ")){
        var searchKeyword = UserText.split("search google for ")[1];
        var keyword = searchKeyword.replace(" ","+");
        fridayToSpeak = "Searching for " + searchKeyword;
        Speak(fridayToSpeak);
        window.open("https://www.google.com/search?q="+keyword+"&sxsrf=ALeKk03sVEDsI9OOb0iUnBoaAHFebmCnWA%3A1622786896460&ei=UMO5YJa-G4aI4-EPgOyLuA8&oq=%22How+to+&gs_lcp=Cgdnd3Mtd2l6EAMYATIECCMQJzIECCMQJzIECCMQJzIFCAAQkQIyBQgAEJECMgUIABCRAjIFCAAQkQIyBQgAEJECMgcIABCHAhAUMgcIABCHAhAUOgcIIxDqAhAnOgQIABBDOgQILhBDOgUIABCxAzoHCAAQsQMQQzoCCABQoRJYpTtg8UZoA3ACeACAAbECiAH8CZIBBzAuOC4wLjGYAQCgAQGqAQdnd3Mtd2l6sAEKwAEB&sclient=gws-wiz");
    }

    // search youtube
    else if(UserText.includes("friday") && UserText.includes("search youtube")){
        var searchKeyword = UserText.split("youtube")[1];
        fridayToSpeak = "Searching for " + searchKeyword;
        Speak(fridayToSpeak);
        window.open("https://www.youtube.com/results?search_query="+searchKeyword);
    }

    // friday help
    else if(UserText.includes("friday") && UserText.includes("help")){
        fridayToSpeak = "How may I help you?" + searchKeyword;
        Speak(fridayToSpeak);
    }
    // open youtube
    else if(UserText.includes("friday") && UserText.includes("youtube")){
        fridayToSpeak = "Opening youtube"
        Speak(fridayToSpeak);
        
        window.open("https://www.youtube.com");
    }
    // open google meet
    else if(UserText.includes("friday") && UserText.includes("google") && UserText.includes("meet")){
        fridayToSpeak = "Starting meet session";
        Speak(fridayToSpeak);
        
        window.open("https://meet.google.com/vdn-ykrc-ztz");
    }
    // open google classroom
    else if(UserText.includes("friday") && UserText.includes("google") && UserText.includes("classroom")){
        fridayToSpeak = "Opening google";
        Speak(fridayToSpeak);
        
        window.open("https://classroom.google.com/u/2/h");
    }
    // open google 
    else if(UserText.includes("friday") && UserText.includes("google")){
        fridayToSpeak = "Opening google";
        Speak(fridayToSpeak);
        
        window.open("https://www.google.com");
    } 
    // open github
    else if(UserText.includes("friday") && UserText.includes("github")){
        fridayToSpeak = "Opening github";
        Speak(fridayToSpeak);
        
        window.open("https://github.com/");
    }
    // open pyadav5000 mail
    else if(UserText.includes("friday") &&  UserText.includes("mail") && UserText.includes("first one")){
        fridayToSpeak = "Opening p yadav 5000 mail";
        Speak(fridayToSpeak);
        
        window.open("https://mail.google.com/mail/u/0/?tab=wm#inbox");
        setTimeout(startListening, 3000);
    } 
    // open college mail
    else if(UserText.includes("friday") &&  UserText.includes("mail") && UserText.includes("college")){
        fridayToSpeak = "Opening college mail";
        Speak(fridayToSpeak);
        
        window.open("https://mail.google.com/mail/u/2/#inbox");
        setTimeout(startListening, 3000);
    } 
    // open figma file of friday 
    else if(UserText.includes("friday") &&  UserText.includes("your") && UserText.includes("figma")){
        fridayToSpeak = "Opening my figma file";
        Speak(fridayToSpeak);
        window.open("https://www.figma.com/file/T8KvvogfSiNRfaTWh6wQuM/FRIDAY?node-id=1%3A2");
        setTimeout(startListening, 3000);
    }
    // hello to friday
    else if(UserText.includes("friday") &&  UserText.includes("hello")){
        fridayToSpeak = "Hello, sir!";
        Speak(fridayToSpeak);
        setTimeout(startListening, 3000);
    } 
    // sleep from friday
    else if(  UserText.includes("friday") && UserText.includes("quit")|| UserText.includes("bye") || UserText.includes("quit")|| UserText.includes("sleep")){
        fridayToSpeak = "Ok sir";
        Speak(fridayToSpeak);
        
        programRun = false
    }
    // say friday
    else if(UserText.includes("friday")){
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

function returnJSONData(url) {
    fetch(url).then(res => res.json()).then((out) => {
        // console.log(out);
        var searchLink = out.items[0].id.videoId;
        var link = "https://www.youtube.com/watch?v=" + searchLink;
        window.open(link);
    }).catch(err => { throw err });
}
function weatherStats(query) {
    const apiKey = "4ab8f1b0a8d4078544a4eff779d847de";
    const units = "metric";
    const url = "https://api.openweathermap.org/data/2.5/weather?q="+query+"&appid="+apiKey+"&units="+units;
    fetch(url).then(res => res.json()).then((weatherData) => {
        // const weatherData = JSON.parse(out);
        const temp = weatherData.main.temp;
        const icon = weatherData.weather[0].icon
        const imgUrl = "http://openweathermap.org/img/wn/"+icon+"@2x.png";
        document.getElementById('weather-icon').src = imgUrl;
        tempDetails.innerHTML = temp + " &#176";
        console.log(imgUrl);
        console.log(temp);
    }).catch(err => { throw err });
}
function setOPH() {
    document.getElementById('letsSpeak').style.opacity = "100%";
}
function timeDateUpdate(){
    var refresh=60000; // Refresh rate in milli seconds
    mytime=setTimeout('showDateTime()',refresh)
}
function showDateTime() {
    var time = timeFunc();
    var month = monthFunc();
    const dt = new Date();
    var date = dt.getDate();
    console.log(date);

    document.getElementById('date').innerHTML = time
    document.getElementById('month').innerHTML = date + " " +  month
    timeDateUpdate();
}
function onPageLoad(){
    showDateTime();
    weatherStats("Navi%20Mumbai");
    wishMe();
    Speak("System initialized successfully. What we have to do today?")
}
function timeFunc() {
    const dt = new Date();
    var timeH = dt.getHours();
    var timeS = "";
    var timeM = dt.getMinutes();
    if (timeH > 12) {
        timeS = "PM";
        timeH = timeH-1; 
    }
    else if(timeH < 12) {
        timeS = "AM";
        
    }

    var time = (timeH)+":"+timeM+" "+timeS;
    console.log(time);
    return time;
}
function monthFunc() {
    const dt = new Date();
    var date = dt.getMonth();
    var dateString = "";
    if(date === 1) {
        dateString = "January"
    }
    if(date === 2) {
        dateString = "February"
    }
    if(date === 3) {
        dateString = "March"
    }
    if(date === 4) {
        dateString = "April"
    }
    if(date === 5) {
        dateString = "May"
    }
    if(date === 6) {
        dateString = "June"
    }
    if(date === 7) {
        dateString = "July"
    }
    if(date === 8) {
        dateString = "August"
    }
    if(date === 9) {
        dateString = "September"
    }
    if(date === 10) {
        dateString = "October"
    }
    if(date === 11) {
        dateString = "November"
    }
    if(date === 12) {
        dateString = "December"
    }
    console.log(dateString);
    return dateString;
   
}

window.addEventListener("DOMContentLoad", onPageLoad());

document.getElementById('letsSpeak').addEventListener("click", function() {
    document.getElementById('letsSpeak').style.opacity = "50%";
    startListening();
    
});
