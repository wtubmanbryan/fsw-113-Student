// Create an event listenter for the 'submit' button that calls the combineLists() function
const submitBtn = document.querySelector('#submit')
submitBtn.addEventListener("click", combineLists)
// Modify the combineLists() function to create arrays from each scavenger hunt element in the scavenger.html document. 
// Then use the spread operator to combine these arrays into a single array. 
// Sort that array and display it in the 'AllItems' element on the scavenger.html document.

function combineLists() {
    const scavenger0 = csvString2NumArray(document.querySelector('#scavenger-0').value)
    const scavenger1 = csvString2NumArray(document.querySelector('#scavenger-1').value)
    const scavenger2 = csvString2NumArray(document.querySelector('#scavenger-2').value)
    const scavenger3 = csvString2NumArray(document.querySelector('#scavenger-3').value)

    const scavengers = [...scavenger0, ...scavenger1, ...scavenger2, ...scavenger3]
    scavengers.sort()
    
    document.querySelector('#AllItems').innerHTML = scavengers
    

}

const csvString2NumArray = (str) => str.split(',').map(e => (e))

// The following code is a bonus addition that facilitates data entry on the scavenger.html document.
// If you first click in one of the textareas, you can then click scavenger hunt items in the unordered
// list. The value of that will be added to the appropriate textarea along with any necessary commas.

let objTargetText 
const objUL = document.querySelector('#lstItems')

objUL.onclick = function(event) {
    var source = getEventTarget(event)
    if (!objTargetText.innerHTML)
        objTargetText.innerHTML = source.innerHTML
    else
        objTargetText.innerHTML += ',' + source.innerHTML
}

function getEventTarget(e) {
    e = e || window.event
    return e.target || e.srcElement
}

function setTarget(obj) {
    objTargetText = obj
}