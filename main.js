// ==============================================Time/=================================================|
const API_KEY = "471537847d3c4f34fcd27974648b2618"; //|
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
]; //|
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
]; //|
// ====================================================================================================|

//================================================== Info ===================================================================================================================================================================================================================
function GetInfo() {
  var newName =
    document.getElementById(
      "cityInput"
    ); /** Returns a HTMLCollection of the elements in the object on which the method was invoked (a document or an element) that have all the classes given by classNames. The classNames argument is interpreted as a space-separated list of classes. */
  var cityName = document.getElementById("cityName");
  cityName.innerHTML = "" + newName.value + ""; // new city

  fetch(
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
      newName.value +
      "&appid=471537847d3c4f34fcd27974648b2618"
  ) //fetch()vous permet de faire des requêtes réseau similaires à XMLHttpRequest (XHR). La principale différence est que l'API Fetch utilise Promises, ce qui permet une API plus simple et plus propre
    .then((response) => response.json()) //JSON , qui est un format simple de données structurées, est devenu un format populaire pour envoyer des données sur le réseau.
    .then((data) => {
      // .then * Attaches callbacks for the resolution and/or rejection of the Promise.
      //utiliser l' fetch()API pour charger (généralement à l'aide d'une GETméthode) ou publier des données (généralement à l'aide d'une POSTméthode) des données JSON.
      //Le premier argument obligatoire de fetch()est l'URL de la requête
      //le deuxième argument facultatif, vous permet de configurer la requête. Les options les plus utiles sont :
      // options.method: la méthode HTTP pour effectuer la requête. Par défaut à'GET'
      // options.body: le corps de la requête HTTP
      // option.headers: un objet avec les en-têtes à joindre à la requête

      //Getting the min and max values for each day
      for (i = 0; i < 5; i++) {
        document.getElementById("day" + (i + 1) + "Min").innerHTML =
          "Min: " +
          Number(data.list[i].main.temp_min - 273.15).toFixed(1) +
          "°";
      }

      for (i = 0; i < 5; i++) {
        document.getElementById("day" + (i + 1) + "Max").innerHTML =
          "Max: " +
          Number(data.list[i].main.temp_max - 273.15).toFixed(2) +
          "°"; // tofixed * Returns a string representing a number in fixed-point notation.
      }

      //Getting Weather Icons
      for (i = 0; i < 5; i++) {
        document.getElementById("img" + (i + 1)).src =
          "http://openweathermap.org/img/wn/" +
          data.list[i].weather[0].icon +
          ".png";
      }
      console.log(data);
    })
    //catch * Attaches a callback for only the rejection of the Promise.
    .catch((err) =>
      alert("Something Went Wrong: Try Checking Your Internet Conexion")
    );
}
// ====== fonction get icons =================================
// function icons(id){
//     if(id === 800) {
//         return 'sun.gif';
// }   else if (id >= 801 && 804 >= id){
//         if (id === 801 || id === 802){
//             return 'cloudy.gif';
//         }
//         if (id === 803 || id === 804){
//             return 'clouds.gif';
//         }
//     }else if (id>= 600 && 622 >= id ){
//         return 'snow.gif';
//     }else {
//         return 'rain.gif';
//     }
// =========================================================== Default =================|
function DefaultScreen() {
  document.getElementById("cityInput").defaultValue = "                 PARIS";
  GetInfo();
}
//======================================================================================|

//Getting and displaying the text for the upcoming five days of the week
var d = new Date();
var weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

//Function to get the correct integer for the index of the days array
function CheckDay(day) {
  if (day + d.getDay() > 6) {
    return day + d.getDay() - 7;
  } else {
  /** Gets the day of the week using Universal Coordinated Time (UTC). */
    return day + d.getDay();
  }
}

for (i = 0; i < 5; i++) {
  document.getElementById("day" + (i + 1)).innerHTML = weekday[CheckDay(i)];
}

// =================================================================================================
//animate()method
function feuille() {
  var spin = document.getElementById("leaf");
  spin.animate(
    [
      { transform: "rotate3d(0,0,0,0deg)", top: "-10%" },
      { transform: "rotate3d(30,60,90,-720deg)translateX(100px)", top: "70%" },
    ],
    { duration: 3000 }
  );
}

setInterval(feuille, 4000);

$(function () {
  function RandomWidth() {
    var left = document.getElementById("parent"),
      W = left.offsetWidth,
      randW = [Math.floor(Math.random() * W)]; // Math* Returns the number of leading zero bits in the 32-bit binary representation of a number.
    return randW;
  } //random /** Returns a pseudorandom number between 0 and 1. */

  setI = setInterval(function () {
    $("#leaf").stop().animate({ left: RandomWidth() }, 3000);
  }, 3000);
});
// ===========================================================================================|
//|==========Date/Time========|

const timeEl = document.getElementById("time"); // ici nous allons creer un element 'timeel' afin que afin qu'il soit egal a id time
const dateEl = document.getElementById("date"); // pareil pour date
const currentWeatherItemsEl = document.getElementById("current-weather-items"); // current weather itemel *est* le document avec lid current-weather-items
const timezone = document.getElementById("time-zone"); // fuseau horaire
// const countryEl = document.getElementById('country');// longitude and latitude
// const weatherForecastEl = document.getElementById('weather-forecast');//prevision x 5 meteo futur forecast
// const currentTempEl = document.getElementById('current-temp');//prevision actuelle

//nous allons creer un emsemble dans la fonction dont le role sera une fonction secondaire qui peut etre appelée apres un intervalle particulier donc elle  sera appelé en continu
//(**tte les secondes )jusqu'a ce que lintervalle soit  effacé pour cela nous allons definir lintervalle
setInterval(() => {
  const time = new Date(); // nous allons creer une variable time nous allons utliser la classe Date dans le navigateur cela donnera une prochaine date
  const month = time.getMonth(); // maintenant nous devons formater cette date pour obtenir les dif valeurs donc pour le month pnous prendrons le time.get pour obtenir le month
  const date = time.getDate(); // de la meme maniere pour la date
  const day = time.getDay(); // le jour
  const hour = time.getHours(); // heures
  const hoursIn12HrFormat = hour >= 13 ? hour % 12 : hour; // modulo 12 and set de valeur that "hour"
  const minutes = time.getMinutes(); //minutes
  const ampm = hour >= 12 ? "PM" : "AM"; // nous avons besoin de savoir si c'est am ou pm si heure esrt sup ou egal a 12 'pm' :(else) 'Am'
  // nous allons set time and date line 1 et 2
  timeEl.innerHTML =
    (hoursIn12HrFormat < 10 ? "0" + hoursIn12HrFormat : hoursIn12HrFormat) +
    ":" +
    (minutes < 10 ? "0" + minutes : minutes) +
    " " +
    `<span id="am-pm">${ampm}</span>`;
  // nous feront la concatenation des chaines de carac et lenvoyé dans le fichier html avec inner. heures au format + minutes +ajouter le span du html
  dateEl.innerHTML = days[day] + ", " + date + " " + months[month]; // ici on doit convertir les valeurs de const month et day ? en jour et mois donc nous allons creer un tableau ( liste ) de jours et mois voir plus haut
}, 1000); /*<=== toute les secondes   */
//**** */

// navigator geolocation /** The state and the identity of the user agent. It allows scripts to query it and to register themselves to carry on some activities. */
//CurrentPos /** An object able to programmatically obtain the position of the device. It gives Web content access to the location of the device. This allows a Web site or app to offer customized results based on the user's location. */
getWeatherData();
function getWeatherData() {
  navigator.geolocation.getCurrentPosition((success) => {
    let { latitude, longitude } = success.coords;

    fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        showWeatherData(data);
      });
  });
}

// =================================================== FONT SIZE button =================
//parseInt * Converts a string to an integer.
var resizeFont = function (d) {
  var el = $("html");
  $(el).css("font-size", parseInt($(el).css("font-size")) + d);
};

$(".plus").click(function () {
  resizeFont(2);
});

$(".minus").click(function () {
  resizeFont(-2);
});
// ====================================================


