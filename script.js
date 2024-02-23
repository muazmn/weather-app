let searchBtn = document.getElementById("search-btn");
let dropdownContent = document.getElementsByClassName('dropdown-content')[0];
// let langRef = dropdownContent.getElementsByTagName('input');
let langRef2 = document.getElementsByClassName('language');
$(searchBtn).on('click', getWeather = () => {
    let result = document.getElementById("result");
    // let langRef = document.getElementsByClassName("language")[0].value;
    let cityRef = document.getElementById("city");
    let cityValue = cityRef.value;
    let dropdown = document.getElementById("dropdown");
    var language
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${key}&units=metric`;
    console.log(url)
    if (cityValue.length == 0) {
        result.innerHTML = `<h3 class="msg">Please enter a city name</h3>`;
    } else {
        $.ajax({
            url: url,
            // NANTI LETAK VALUE ${LANG}  BAGI lang SEBAGAI PARAMETER,LANG INI AKAN MENAMPUNG BAHASA YANG TELAH DIPILIH OLEH USER DI BROWSER
            success: results => {
                const city = results
                console.log(city)
                let weatherCountry = "";
                weatherCountry += updateUI(city)
                $(result).html(weatherCountry);
                // let languages = "";
                // languages += listOfLanguages();
                // $(dropdown).html(languages)
            },
            error: function (err) {
                result.innerHTML = `<h3 class="msg">City not found</h3>`;
                $(".wrapper:first-of-type").css("margin-bottom", "220px")

            }
        })
    }
})
$(window).on("load", getWeather);



$(langRef2).each((elemen, index) => {
    $(langRef2[elemen]).on("click", () => {
        let cityRef = document.getElementById("city");
        let cityValue = cityRef.value;
        this.language = langRef[elemen].value
        console.log(this.language)
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=${key}&units=metric&lang=${this.language}`
        console.log(url)
        $.ajax({
            url: url,
            success: results => {
                const city = results
                console.log(city)
                let weatherCountry = "";
                weatherCountry += updateUI(city)
                $(result).html(weatherCountry);
                // let languages = "";
                // languages += listOfLanguages();
                // $(dropdown).html(languages)
            }
        })
    });
});

let searchBtn2 = document.getElementById("search-btn2");
$(searchBtn2).on('click', getCountry = () => {
    let result2 = document.getElementById("result2");
    // let langRef = document.getElementsByClassName("language")[0].value;
    let cityRef2 = document.getElementById("city2");
    let cityValue2 = cityRef2.value;
    let dropdown = document.getElementById("dropdown");
    var language
    $(".wrapper2").css("margin-bottom", "-190px")

    let url = `https://restcountries.com/v3.1/name/${cityValue2}?fullText=true`;
    console.log(url)
    if (cityValue2.length == 0) {
        result2.innerHTML = `<h3 class="msg">Please enter a city name</h3>`;
        $(".wrapper2").css("margin-top", "-200px")

    } else {
        $.ajax({
            url: url,
            // NANTI LETAK VALUE ${LANG}  BAGI lang SEBAGAI PARAMETER,LANG INI AKAN MENAMPUNG BAHASA YANG TELAH DIPILIH OLEH USER DI BROWSER
            success: results => {
                const city = results
                console.log(city)
                let detailCountry = "";
                detailCountry += updateUI2(city);
                $(result2).html(detailCountry);
                $(".wrapper2").css("margin-top", "100px")
                // let languages = "";
                // languages += listOfLanguages();
                // $(dropdown).html(languages)
            },
            error: function (err) {
                result2.innerHTML = `<h3 class="msg">Country not found</h3>`;
                $(".wrapper2").css("margin-top", "-200px")
                if (window.matchMedia("screen and (max-width:768px)").matches) {
                    $(".wrapper2").css("margin-top", "-150px")
                    $(".wrapper:first-of-type").css("margin-top", "250px")

                }
                // if (window.matchMedia("screen and (max-width:768px)").matches) {
                //     $(".wrapper2").css("margin-top", "-150px")
                //     $(".wrapper:first-of-type").css("margin-top", "250px")

                // }
            }
        })
    }
})
$(window).on("load", getCountry);


// YANG DIGUNAKAN ADALAH search-btn, result, city

//     let dropdownContent = document.getElementsByClassName('dropdown-content')[0];
//     let langRef = dropdownContent.getElementsByTagName('input');
function updateUI(data) {
    return `<h2>${data.name}</h2>
    <h4 class="weather">${data.weather[0].main}</h4>
    <h4 class="desc">${data.weather[0].description}</h4>
    <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png">
    <h1>${data.main.temp} &#176;</h1>
    <div class="temp-container">
    <div>
    <h4 class="title">min</h4>
    <h4 class="temp">${data.main.temp_min}&#176;</h4>
    </div>
    <div>
    <h4 class="title">max</h4>
    <h4 class="temp">${data.main.temp_max}&#176;</h4>
    </div>
    </div>`
}
function updateUI2(data) {
    return `
    <img src="${data[0].flags.svg}" class="flag-img">
    <h2>${data[0].name.common}</h2>
    <div class="temp-container2">
    <div>
    <h4 class="title">Capital:</h4>
    <h4 class="temp">${data[0].capital[0]}</h4>
    </div>
            <div>
            <h4 class="title">Continent:</h4>
            <h4 class="temp">${data[0].continents[0]}</h4>
            </div>
            <div>
            <h4 class="title">Population:</h4>
            <h4 class="temp">${data[0].population}</h4>
            </div>
            <div>
            <h4 class="title">region:</h4>
            <h4 class="temp">${data[0].region}</h4>
            </div>
            <div>
            <h4 class="title">Latitude:</h4>
            <h4 class="temp">${data[0].latlng[0]}</h4>
            </div>
            <div>
            <h4 class="title">Longitude:</h4>
            <h4 class="temp">${data[0].latlng[1]}</h4>
            </div>
            <div>
            <h4 class="title">Currency: </h4>
            <h4 class="temp">${data[0].currencies[Object.keys(data[0].currencies)].name
        } - ${Object.keys(data[0].currencies)[0]}</h4>
            </div>
            <div>
            <h4 class="title">Common Languages: </h4>
            <h4 class="temp">${Object.values(data[0].languages)
            .toString()
            .split(",")
            .join(", ")}</h4>
            </div>
    </div>
  `
}
//     let langRef2 = document.getElementsByClassName('language');
//     $(langRef2).each(function (elemen, index) {
//         $(this).on("click", function () {
//             language = langRef[elemen].value
//             url2 = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${key}&units=metric&lang=${language}`;
//             console.log(language)
//             $.ajax({
//                 url: url2,
//                 success: results => {
//                     const city = results
//                     let weatherCountry = "";
//                     weatherCountry += updateUI(city)
//                     $(result).html(weatherCountry);
//                 }
//             })
//         });
//     });
//     console.log(ur12)
//     console.log(language)
// })




// $(searchBtn).on('click', getWeather = () => {
//     let result = document.getElementById("result");
//     // let langRef = document.getElementsByClassName("language")[0].value;
//     let cityRef = document.getElementById("city");
//     let cityValue = cityRef.value;
//     let dropdown = document.getElementById("dropdown");
//     let dropdownContent = document.getElementsByClassName('dropdown-content')[0];
//     let langRef = dropdownContent.getElementsByTagName('input')[0].value;
//     let langRef2 = document.getElementsByClassName('language');
//     let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${key}&units=metric&lang=${langRef}`;
//     if (cityValue.length == 0) {
//         result.innerHTML = `<h3 class="msg">Please enter a city name</h3>`;
//     } else {
//         $.ajax({
//             url: url,
//             // NANTI LETAK VALUE ${LANG}  BAGI lang SEBAGAI PARAMETER,LANG INI AKAN MENAMPUNG BAHASA YANG TELAH DIPILIH OLEH USER DI BROWSER
//             success: results => {
//                 const city = results
//                 let weatherCountry = "";
//                 weatherCountry += updateUI(city)
//                 $(result).html(weatherCountry);
//                 // let languages = "";
//                 // languages += listOfLanguages();
//                 // $(dropdown).html(languages)
//             },
//             error: function (err) {
//                 result.innerHTML = `<h3 class="msg">City not found</h3>`;
//             }
//         })

//     }
// })
// $(window).on("load", getWeather);



//     $(langRef2).each(function (elemen, index) {
//         $(this).on("click", function () {
//             let language = langRef[elemen].value
//             let url2 = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${key}&units=metric&lang=${language}`;
//             console.log(language)
//             $.ajax({
//                 url: url2,
//                 success: results => {
//                     const city = results
//                     let weatherCountry = "";
//                     weatherCountry += updateUI(city)
//                     $(result).html(weatherCountry);
//                 }
//             })
//         });
//     });





// NAVBAR
// var clients = document.getElementById('clients');
// var services = document.getElementById('services');

// clients.addEventListener('click', function () {
//     $(clients).toggleClass("active");
//     $(".parent:not(#clients)").toggleClass("invisible");
// }, false);

// services.addEventListener('click', function () {
//     $(services).toggleClass("active");
//     $(".parent:not(#services)").toggleClass("invisible");
// }, false);

// MAKLUMAT COUNTRY DETAIL
// COORD LON AND LAT,



// GUNA FETCH
// //Function to fetch weather details from api and display them
// searchBtn.addEventListener("click", getWeather = async () => {
//     let cityValue = cityRef.value;
//     //If input field is empty
//     if (cityValue.length == 0) {
//         result.innerHTML = `<h3 class="msg">Please enter a city name</h3>`;
//     }
//     //If input field is NOT empty
//     else {
//         try {
//             // let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${key}&units=metric`;
//             //Clear the input field
//             // cityRef.value = "";
//             const weather = await getWeather2(cityValue, key);
//             updateUI(weather)
//             console.log(weather)
//         } catch (err) {
//             errUI();
//         }
//     }
// })
// //If city name is NOT valid
// // .catch(() => {
// //     result.innerHTML = `<h3 class="msg">City not found</h3>`;
// // });
// // }
// // });
// function getWeather2(city, key) {
//     return fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + key + '&units=metric')
//         .then((resp) => {
//             if (!resp.ok) {
//                 throw new Error(resp.statusText);
//             }
//             return resp.json();
//         })
//     //If city name is valid
//     // .then((data) => {
//     //     console.log(data);
//     //     console.log(data.weather[0].icon);
//     //     console.log(data.weather[0].main);
//     //     console.log(data.weather[0].description);
//     //     console.log(data.name);
//     //     console.log(data.main.temp_min);
//     //     console.log(data.main.temp_max);
//     // })
// }
// function updateUI(weather) {
//     let weatherCountry = "";
//     weatherCountry += showData(weather);
//     result.innerHTML = weatherCountry
// }
// function errUI() {
//     let err = "";
//     err += `<h3 class="msg">City not found</h3>`;
//     result.innerHTML = err;
// }
// function showData(data) {
//     return `<h2>${data.name}</h2>
//             <h4 class="weather">${data.weather[0].main}</h4>
//             <h4 class="desc">${data.weather[0].description}</h4>
//             <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png">
//             <h1>${data.main.temp} &#176;</h1>
//             <div class="temp-container">
//             <div>
//             <h4 class="title">min</h4>
//             <h4 class="temp">${data.main.temp_min}&#176;</h4>
//             </div>
//             <div>
//             <h4 class="title">max</h4>
//             <h4 class="temp">${data.main.temp_max}&#176;</h4>
//             </div>
//             </div>
//             `;
// }

// window.addEventListener("load", getWeather);





// let result = document.getElementById("result");
// let searchBtn = document.getElementById("search-btn");
// let cityRef = document.getElementById("city");

// //Function to fetch weather details from api and display them
// let getWeather = () => {
//     let cityValue = cityRef.value;
//     //If input field is empty
//     if (cityValue.length == 0) {
//         result.innerHTML = `<h3 class="msg">Please enter a city name</h3>`;
//     }
//     //If input field is NOT empty
//     else {
//         let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${key}&units=metric`;
//         //Clear the input field
//         // cityRef.value = "";
//         fetch(url)
//             .then((resp) => resp.json())
//             //If city name is valid
//             .then((data) => {
//                 console.log(data);
//                 console.log(data.weather[0].icon);
//                 console.log(data.weather[0].main);
//                 console.log(data.weather[0].description);
//                 console.log(data.name);
//                 console.log(data.main.temp_min);
//                 console.log(data.main.temp_max);
//                 result.innerHTML = `
//             <h2>${data.name}</h2>
//             <h4 class="weather">${data.weather[0].main}</h4>
//             <h4 class="desc">${data.weather[0].description}</h4>
//             <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png">
//             <h1>${data.main.temp} &#176;</h1>
//             <div class="temp-container">
//             <div>
//             <h4 class="title">min</h4>
//             <h4 class="temp">${data.main.temp_min}&#176;</h4>
//             </div>
//             <div>
//             <h4 class="title">max</h4>
//             <h4 class="temp">${data.main.temp_max}&#176;</h4>
//             </div>
//             </div>
//             `;
//             })
//             //If city name is NOT valid
//             .catch(() => {
//                 result.innerHTML = `<h3 class="msg">City not found</h3>`;
//             });
//     }
// };
// searchBtn.addEventListener("click", getWeather);
// window.addEventListener("load", getWeather);



// let searchBtn = document.getElementById("search-btn");
// $(searchBtn).on('click', getWeather = () => {
//     let result = document.getElementById("result");
//     // let langRef = document.getElementsByClassName("language")[0].value;
//     let cityRef = document.getElementById("city");
//     let cityValue = cityRef.value;
//     let dropdown = document.getElementById("dropdown");
//     let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${key}&units=metric`;
//     if (cityValue.length == 0) {
//         result.innerHTML = `<h3 class="msg">Please enter a city name</h3>`;
//     } else {
//         $.ajax({
//             url: url,
//             // NANTI LETAK VALUE ${LANG}  BAGI lang SEBAGAI PARAMETER,LANG INI AKAN MENAMPUNG BAHASA YANG TELAH DIPILIH OLEH USER DI BROWSER
//             success: results => {
//                 const city = results
//                 let weatherCountry = "";
//                 weatherCountry += updateUI(city)
//                 $(result).html(weatherCountry);
//                 // let languages = "";
//                 // languages += listOfLanguages();
//                 // $(dropdown).html(languages)
//             },
//             error: function (err) {
//                 result.innerHTML = `<h3 class="msg">City not found</h3>`;
//             }
//         })

//     }
//     let dropdownContent = document.getElementsByClassName('dropdown-content')[0];
//     let langRef = dropdownContent.getElementsByTagName('input');
//     let langRef2 = document.getElementsByClassName('language');
//     $(langRef2).each(function (elemen, index) {
//         $(this).on("click", function () {
//             let language = langRef[elemen].value
//             let url2 = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${key}&units=metric&lang=${language}`;
//             console.log(language)
//             $.ajax({
//                 url: url2,
//                 success: results => {
//                     const city = results
//                     let weatherCountry = "";
//                     weatherCountry += updateUI(city)
//                     $(result).html(weatherCountry);
//                 }
//             })
//         });
//     });
// })
// $(window).on("load", getWeather);