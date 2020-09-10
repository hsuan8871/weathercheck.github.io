class UI {
    constructor() {
        this.profile = document.getElementById('results');
    }
    //Creating html and inserting into the document
    addProfile(input) {
        console.log(input);
        //Input table for each search
        this.profile.innerHTML = `
        <div class="container">
        <div class="row">
            <div class="col-md-10 mx-auto text-center mt-5 p-5 rounded" id="tempId">
                <h1 id="w-location" style=" text-shadow: 1px 1px 2px black, 0 0 1em blue, 0 0 0.2em blue; color: white;font: 2.5em Georgia, serif;" >${input.weather.name}</h1>
                <h3 id="w-desc" style="text-shadow: 1px 1px 2px black, 0 0 1em green, 0 0 0.2em green; color: white;font: 2em Georgia, serif;">${input.weather.weather[0].description}</h3>
                <h3 id="w-string" style=" text-shadow: 1px 1px 2px black, 0 0 1em red, 0 0 0.2em red; color: white;font: 1.5em Georgia, serif;">${Math.round((input.weather.main.temp-273.15) * 100) / 100} °C</h3>
                <img>
                <div class="center col-md-12">
                    <ul class="list-group">
                        <li class="list-group-item" style="color:hsla(0,10%,100%,1); background-color: rgba(0,0,0,.2)">Current Humidity: ${input.weather.main.humidity}%</li>
                        <li class="list-group-item" style="color:hsla(0,10%,100%,1); background-color: rgba(0,0,0,.2)">Lowest Temperature Point ${Math.round((input.weather.main.temp_min-273.15) * 100) / 100} °C</li>
                        <li class="list-group-item" style="color:hsla(0,10%,100%,1); background-color: rgba(0,0,0,.2)">Highest Temperature Point ${Math.round((input.weather.main.temp_max-273.15) * 100) / 100}°C</li>
                        <li class="list-group-item" style="color:hsla(0,10%,100%,1); background-color: rgba(0,0,0,.2)">Wind Speed ${input.weather.wind.speed} MPH At Degree ${input.weather.wind.deg}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
        `;
        //Calls set for back ground
        this.setBackground(input);
    }
    //Setting a background based on the weather conditions.
    setBackground(input){
        if(input.weather.weather[0].main === "Clear"){
            document.getElementById("tempId").id = 'clearskyBackGround';
        }else if(input.weather.weather[0].main === "Rain" ||input.weather.weather[0].main === "Drizzle"){
            document.getElementById("tempId").id = 'rainingBackGround';
        }else if(input.weather.weather[0].main === "Snow"){
            document.getElementById("tempId").id = 'snowBackGround';
        }else if(input.weather.weather[0].main === "Thunderstorm"){
            document.getElementById("tempId").id = 'lightningBackGround';
        }else{
            document.getElementById("tempId").id = 'cloudyBackGroud';
        }
    }
}
