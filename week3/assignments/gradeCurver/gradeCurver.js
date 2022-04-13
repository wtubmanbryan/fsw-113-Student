// declare each of the variables marked with "**" in the appropriate scope and using the appropriate type

// create an event listener that calls the curveGrade() function when the Curve It!! button is clicked
document.getElementById("submit").addEventListener("click", curveGrades)

// create an event listener that resets the scores and grades to their defaults when the Reset button is clicked
document.getElementById("reset").addEventListener("click", reset)
function applyBell(grade, index, ary) {
    switch (true) {
        case grade >= (mean + (gradeSlice * 2)): 
            ary[index] = 'A'
            break
        case grade >= (mean + gradeSlice): 
            ary[index] = 'B'
            break
        case grade >= (mean):
            ary[index] = 'C'
            break
        case grade >= (mean - gradeSlice): 
            ary[index] = 'D'
            break
        default:
            ary[index] = 'F'
            break
    }
}

function convertArray(obj) {
    ary = obj.value.split(',')
    ary = ary.map(function (x) {
        return parseInt(x)
    })
    return ary
}

// Condense the number of lines within the curveGrade() function as much as possible by converting 
// the functions to arrow functions. You can also condense the number of lines by combining some 
// separate lines of code into single lines. It currently has 18 lines of code. Without counting  
// empty lines, can you get the number of lines down to 8?

function curveGrades() {
    let sum = (accumulator, currentValue) => accumulator + currentValue

    let sumGrades = (array) => array.reduce(sum)
    
    let aryGrades = convertArray(document.querySelector('#scores'))

    let minGrade = aryGrades.reduce( (a, b) => Math.min(a, b))
    
    let maxGrade = aryGrades.reduce((a, b) => Math.max(a, b))
    
    mean = sumGrades(aryGrades) / aryGrades.length

    //range = maxGrade - minGrade
    gradeSlice = (maxGrade - minGrade) / 5

    aryGrades.forEach(applyBell)
    // write the value of aryGrades to the grades div in the HTML document
    document.getElementById("grades").innerHTML = aryGrades
}
function reset(){
    document.querySelector('#scores').value=""
    document.querySelector('#grades').innerHTML ="Curved Grades Show Here"
}