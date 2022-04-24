const lang = 'JavaScript'

// Create an event listener for the submit button that adds all 'input' elements to 
// a single array using the spread operator. Call the chkLang() function, passing in 
// the array as an argument.
const submitBtn = document.querySelector('#submit')
submitBtn.addEventListener("click", chkLang)


function chkLang() {
    const langArray = [document.querySelector('#lang0').value,
    document.querySelector('#lang1').value,
    document.querySelector('#lang2').value,
    document.querySelector('#lang3').value,
    document.querySelector('#lang4').value,
    document.querySelector('#lang5').value,
    document.querySelector('#lang6').value,
    document.querySelector('#lang7').value]

    let result = false

    // use an array method to check whether the user included 'JavaScript' in their
    // list of languages

    langArray.some(function(item){
        if(item.toUpperCase() == ("JAVASCRIPT")){
            result = true
        }
    })


    let obj = document.querySelector('#TestResult')
    if (result) 
        obj.innerText = `Congratulations!\nYou know ${lang}.`
    else
        obj.innerText = `Sorry,\nyou don't know ${lang}.`
}