// import the convertTemp.js and getDaylight.js scripts with their default export

// declare any variables needed

// create an event listener for the click of the goBttn that calls a function to fetch the weather data
document.querySelector("#goBttn").addEventListener("click",functionName) 

// create a function that calls the function that queries the api 
// and then creates promises that will call a function to write the weather data to the HTML page        
 function functionName(){
    functionName4API()
    .then()
    .catch

 }
// use an asynchronous call to fetches the current weather for the specified city, awaits it, 
// and returns the resulting data
 async function functionName4API() {
    const response = await fetch(apiURL)

    return
}
    
// create a function that writes the temperature (using local units), humidity, and conditions
// this function should also change the background color of the weather app to blue during the daylight
// hours at the specified city
 function writeWeatherData(data) {


 }