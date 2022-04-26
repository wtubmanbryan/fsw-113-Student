const lang = 'JavaScript'

// Create an event listener for the submit button that adds all 'input' elements to 
// a single array using the spread operator. Call the chkLang() function, passing in 
// the array as an argument.
const submitBtn = document.querySelector('#submit')
submitBtn.addEventListener("click", () =>{
    const langArrayInputs = [...document.querySelectorAll("input")]

    const langArray = langArrayInputs.map(input => input.value)
    chkLang(langArray)
})


function chkLang(langArray) {
    result = langArray.some(function(item){
        return item.toUpperCase() == lang.toUpperCase()
    })

    // use an array method to check whether the user included 'JavaScript' in their
    // list of languages

     let obj = document.querySelector('#TestResult')
    if (result) 
        obj.innerText = `Congratulations!\nYou know ${lang}.`
    else
        obj.innerText = `Sorry,\nyou don't know ${lang}.`
}