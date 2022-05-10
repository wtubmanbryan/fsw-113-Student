// This script should return the results of a function that converts the temperature provided by the api (Kelvin).
// Depending on the location of the city, the function should return degrees in either fahrenheit or centigrade.

    function convertKelvin(temp,citylocation){
        let cel = temp - 273.15
        let feh = 1.8*(temp-273) + 32

        if(citylocation.toUpperCase == "ST. LOUIS"){
            return cel
        }else{
            return feh.toFixed(0)
        }
    }