var api_key = "7fa18b0935c3ba640ec3b3649f19be4e";


function haeTiedot() {


  var city = document.getElementById("haku").value;
  var url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + api_key;
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", url, true);
  xmlhttp.send();

  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {


      jsonObj = JSON.parse(xmlhttp.responseText);

      console.log(jsonObj);

      document.getElementById("koordinaatit").innerHTML = "Koordinaatit: " + jsonObj.coord.lon + " x " + jsonObj.coord.lat;
      document.getElementById("kaupunki").innerHTML = "Kaupungin nimi: " + jsonObj.name + " " + jsonObj.sys.country;
      document.getElementById("kuvaus").innerHTML = "Sään kuvaus: " + jsonObj.weather[0].description;
      document.getElementById("ikoni").innerHTML = "<img src=http://openweathermap.org/img/wn/" + jsonObj.weather[0].icon + ".png></img>";
      document.getElementById("lämpö").innerHTML = "Lämpötila: " + jsonObj.main.temp;
      document.getElementById("tuuli").innerHTML = "Tuulen nopeus: " + jsonObj.wind.speed;
    }

  }
};





// VALID JSON (RFC 8259)
// Formatted JSON Data
// { 
//    "coord":{ 
//       "lon":24.94,
//       "lat":60.17
//    },
//    "weather":[ 
//       { 
//          "id":803,
//          "main":"Clouds",
//          "description":"broken clouds",
//          "icon":"04n"
//       }
//    ],
//    "base":"stations",
//    "main":{ 
//       "temp":272.6,
//       "pressure":1012,
//       "humidity":100,
//       "temp_min":271.48,
//       "temp_max":273.71
//    },
//    "visibility":6000,
//    "wind":{ 
//       "speed":3.6,
//       "deg":280
//    },
//    "snow":{ 

//    },
//    "clouds":{ 
//       "all":75
//    },
//    "dt":1573501781,
//    "sys":{ 
//       "type":1,
//       "id":1332,
//       "country":"FI",
//       "sunrise":1573452469,
//       "sunset":1573480844
//    },
//    "timezone":7200,
//    "id":658225,
//    "name":"Helsinki",