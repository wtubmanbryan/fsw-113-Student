// modify this script to populate the month select you create in the HTML page from an array of month names
// you can use either a for loop or an array.map to populate the select. remember that while arrays start with 
// zero, month numbers go from 1-12

const monthList = ["January", "February", "March", "April","May","June","July", "August","September","October","Novemer","December"]
let newSelect = document.getElementById('months')
let myYear = document.getElementById('year')
let index = 0
for(; index < monthList.length; index++)
    {
       var opt = document.createElement("option");
       opt.value= index;
       opt.innerHTML=monthList[index] 

       // then append it to the select element
       newSelect.appendChild(opt);
       
    }
let myGo = document.getElementById('go')
myGo.addEventListener('click', printCalendar)

// modify this script to run a function called printCalendar() when the user clicks the "Go" button

// modify this script to use the first day of the month the user selects in place of the const today 


function printCalendar(){
   let calDays =  document.getElementById('calendarDays')
   calDays.innerHTML=""
    let myMonthNo = (parseInt(newSelect.value)+1)
    const today = new Date(myMonthNo+'/1/'+myYear.value)
    const month = today.getMonth()
    let days
    switch (month) {
        case 1:
            days = 28
            break
        case 3:
        case 5:
        case 8: 
        case 10:
            days = 30
            break
        default:
            days = 31
    }
        
    let x
    const weekday = today.getDay()
    for (x = 0; x < weekday; x++){
        document.getElementById('calendarDays').innerHTML += "<div class='blankDay'>&nbsp;</div>"
    }
    
    let dt = 0
    do {
        dt++
        document.getElementById('calendarDays').innerHTML += `<div class='calendarCell'>${dt}</div`
    } while ( dt < days)
    
    const monthName = today.toLocaleDateString('default', {month:'long'})
    const year = today.getFullYear()
    document.querySelector('.calendarTitle').innerText = `${monthName} ${year}`
    
    const remainder = (7 - ((x + dt) % 7))
    let y = 0
    while ( y < remainder) {
        calDays.innerHTML += "<div class='blankDay'>&nbsp;</div>"
        y++
    }
}
