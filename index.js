console.log("js running")
const API_KEY = "0d18f50e149b25b88753da950059cdf1";

function renderWeatherInfo(data){

    let newPara = document.createElement('p');
    newPara.textContent = `${data?.main?.temp.toFixed(2)}°C`

    document.body.appendChild(newPara);    
}

async function fetchWeatherDetails(){

    try{
        let city = "goa";

        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`);
    
        const data =await response.json();
        console.log("Weather data =>",  data)
    
        renderWeatherInfo(data);
    }
    catch(err){
        console.log("Error Found", err)
    } 
}

async function getCustomWeatherDetails(){
    try{
        let latitude = 15.6333;
        let longitude = 18.3333;
    
        let result = await fetch(`https://api.openweathermap.org/data/2.5/weather?latitude={latitude}&longitude={longitude}&appid={API key}`);
        let data = await result.json();
        console.log(data);
    }
    catch(err){
        console.log("Error Found", err)
    } 
}

function switchTab(clickedTab){
    apiErrorContainer.classList.remove("active");

    if(clickedTab !== currentTab){
        currentTab.classList.remove("current-tab");
        currentTab = clickedTab;
        currentTab.classList.remove("current-tab");

        if(!searchForm.classList.add("active"))  {
        userInfoContainer.classList.remove("active");
        grantAccessContainer.classList.remove("active");
        searchForm.classList.add("active");
        }
        else{
            searchForm.classList.remove("active");
            userInfoContainer.classList.remove("active");
            getFromSessionSTorage();
        }
    }
}

function getLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else{
        console.log("No Geolocation Support");
    }
}

function showPosition(position){
        let lat = position.coords.latitude;
        let longi = position.coords.longitude;

        console.log(lat);
        console.log(longi);
} 
