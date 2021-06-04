const sr =  window.webkitSpeechRecognition || window.SpeechRecognition;
const fridayArea = document.getElementById('friday');

var programRun = true;

function startListening(){
    if (window.hasOwnProperty('webkitSpeechRecognition')) {
        const recog = new sr();
        recog.lang = 'en-in';
        recog.start();
        var activatingAudio = new Audio('activate.ogg');
        activatingAudio.play()
        activatingAudio.playbackRate = 3;
        recog.onstart = console.log("Listening");
        recog.onresult = function (data) {
            handleResults(data);
        }
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
    if(UserText.includes(UserText.includes("friday") && "instagram")){
        fridayToSpeak = "Open instagram";
        Speak(fridayToSpeak);
        fridayArea.innerHtml = fridayToSpeak;
        window.open("https://www.instagram.com");
    }
    else if(UserText.includes("friday") && UserText.includes("search google for ")){
        var searchKeyword = UserText.split("search google for ")[1];
        var keyword = searchKeyword.replace(" ","+");
        fridayToSpeak = "Searching for " + searchKeyword;
        Speak(fridayToSpeak);
        window.open("https://www.google.com/search?q="+keyword+"&sxsrf=ALeKk03sVEDsI9OOb0iUnBoaAHFebmCnWA%3A1622786896460&ei=UMO5YJa-G4aI4-EPgOyLuA8&oq=%22How+to+&gs_lcp=Cgdnd3Mtd2l6EAMYATIECCMQJzIECCMQJzIECCMQJzIFCAAQkQIyBQgAEJECMgUIABCRAjIFCAAQkQIyBQgAEJECMgcIABCHAhAUMgcIABCHAhAUOgcIIxDqAhAnOgQIABBDOgQILhBDOgUIABCxAzoHCAAQsQMQQzoCCABQoRJYpTtg8UZoA3ACeACAAbECiAH8CZIBBzAuOC4wLjGYAQCgAQGqAQdnd3Mtd2l6sAEKwAEB&sclient=gws-wiz");
    }
    else if(UserText.includes("friday") && UserText.includes("search youtube")){
        var searchKeyword = UserText.split("youtube")[1];
        fridayToSpeak = "Searching for " + searchKeyword;
        Speak(fridayToSpeak);
        window.open("https://www.youtube.com/results?search_query="+searchKeyword);
    }
    else if(UserText.includes("friday") && UserText.includes("help")){
        fridayToSpeak = "How may I help you?" + searchKeyword;
        Speak(fridayToSpeak);
    }
    else if(UserText.includes("friday") && UserText.includes("youtube")){
        fridayToSpeak = "Opening youtube"
        Speak(fridayToSpeak);
        fridayArea.innerHtml = fridayToSpeak;
        window.open("https://www.youtube.com");
    }
    else if(UserText.includes("friday") && UserText.includes("google") && UserText.includes("meet")){
        fridayToSpeak = "Starting meet session";
        Speak(fridayToSpeak);
        fridayArea.innerHtml = fridayToSpeak;
        window.open("https://meet.google.com/vdn-ykrc-ztz");
    }
    else if(UserText.includes("friday") && UserText.includes("google")){
        fridayToSpeak = "Opening google";
        Speak(fridayToSpeak);
        fridayArea.innerHtml = fridayToSpeak;
        window.open("https://www.google.com");
    } 
    else if(UserText.includes("friday") && UserText.includes("github")){
        fridayToSpeak = "Opening github";
        Speak(fridayToSpeak);
        fridayArea.innerHtml = fridayToSpeak;
        window.open("https://github.com/");
    }
    
    else if(UserText.includes("friday") &&  UserText.includes("mail") && UserText.includes("first one")){
        fridayToSpeak = "Opening p yadav 5000 mail";
        Speak(fridayToSpeak);
        fridayArea.innerHtml = fridayToSpeak;
        window.open("https://mail.google.com/mail/u/0/?tab=wm#inbox");
        setTimeout(startListening, 3000);
    } 
    else if(UserText.includes("friday") &&  UserText.includes("mail") && UserText.includes("college")){
        fridayToSpeak = "Opening college mail";
        Speak(fridayToSpeak);
        fridayArea.innerHtml = fridayToSpeak;
        window.open("https://mail.google.com/mail/u/2/#inbox");
        setTimeout(startListening, 3000);
    } 

    else if(UserText.includes("friday") &&  UserText.includes("hello")){
        fridayToSpeak = "Hello, sir!";
        Speak(fridayToSpeak);
        setTimeout(startListening, 3000);
    } 
    else if(  UserText.includes("friday") && UserText.includes("quit")|| UserText.includes("bye") || UserText.includes("quit")|| UserText.includes("sleep")){
        fridayToSpeak = "Ok sir";
        Speak(fridayToSpeak);
        fridayArea.innerHtml = fridayToSpeak;
        programRun = false
    }
    else if(UserText.includes("friday")){
        fridayToSpeak = "Yes sir";
        Speak(fridayToSpeak);
        fridayToSpeak = "How may I help you?";
        Speak(fridayToSpeak);
        setTimeout(startListening, 3500);
    } 
    else {
        fridayToSpeak = "Sorry, I didn't get that";
        Speak(fridayToSpeak);
        fridayArea.innerHtml = fridayToSpeak;
        setTimeout(startListening, 3000);
    }
}

function wishMe() {
    var todayDate = new Date()

    var hourDateFormat = todayDate.getHours();

    if (hourDateFormat >= 6 && hourDateFormat < 12) {
        Speak("Good Morning Sir,")
    }
    else if (hourDateFormat >= 12 && hourDateFormat < 18) {
        Speak("Good Afternoon sir,")
    } else {
        Speak("Good Evening Sir!")
    }
    console.log(hourDateFormat)
}

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

window.addEventListener("DOMContentLoad", wishMe());

letsSpeak.addEventListener("click", function() {
   document.getElementById('micImage').src = 'micOn.svg';
   startListening();
});
