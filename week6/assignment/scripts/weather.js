// import the convertTemp.js and getDaylight.js scripts with their default export

// declare any variables needed
let city = document.getElementById("city")
let tempData = document.querySelector('#tempData')
let humidData = document.querySelector('#humidData')
let conditionsData = document.querySelector('#conditionsData')

// create an event listener for the click of the goBttn that calls a function to fetch the weather data
document.querySelector("#goBttn").addEventListener("click", readWeatherData) 

// create a function that calls the function that queries the api 
// and then creates promises that will call a function to write the weather data to the HTML page        
async function readWeatherData(){
   let list = [];
	try{
		list = await getWeatherInfo()
	}catch(e){
		console.log("Error");
		console.log(e);
	}

   writeWeatherData(list)
 }
// use an asynchronous call to fetches the current weather for the specified city, awaits it, 
// and returns the resulting data
 async function getWeatherInfo() {
   const [response] = await Promise.all([
      fetch('https://api.openweathermap.org/data/2.5/weather?q='+city.value+'&appid=ad6885ff638c40a773bae5a199716a5b'),
      
    ]);

    //const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q="+city.value+"&appid=ad6885ff638c40a773bae5a199716a5b")
    const data = await response.json();
    return [data]
}
    
// create a function that writes the temperature (using local units), humidity, and conditions
// this function should also change the background color of the weather app to blue during the daylight
// hours at the specified city
 function writeWeatherData(data) {
   tempData.innerHTML = convertKelvin(data[0].main.temp, city.value)
   humidData.innerHTML = (data[0].main.humidity)
   conditionsData.innerHTML= (data[0].weather[0].description)

 }