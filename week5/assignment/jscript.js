// Declare any necessary variables.
let studentNames = document.getElementById('studentName')
let className = document.getElementById("className")
let studentScores = document.getElementById("studentScores") 
let possibleScores = document.getElementById("possibleScores") 

let btnReset = document.getElementById("reset") 
let btnPrint = document.getElementById("print") 

let certStudentName = document.getElementById("certStudentName")  
let certClassName = document.getElementById("certClassName") 
let certGrade = document.getElementById("certGrade") 
let newStudent = ""

// Add am evemt listener that responds to the click of the "print" button by calling a function to instantiate
//  a new student object, and another function to print the certificate.
btnPrint.addEventListener("click", createNewStudent)

// Add an event listener that responds to the click of the reset button by resetting all the values
// both in the form and in the certificate.
btnReset.addEventListener("click",resetAll)

function resetAll(){
    //reset all elements
    studentName.value = ""
    className.value = ""
    studentScores.value = ""
    possibleScores.value = ""
    certStudentName.innerText = ""
    certClassName.innerText = ""
    certGrade.innerText = ""
    
}

// Create a function that instantiates a new student object with the input from the HTML form.
function createNewStudent(){
    //Create an instance of the student class
    newStudent = new Student(studentName.value,className.value,csvString2NumArray(studentScores.value), csvString2NumArray(possibleScores.value))
    
    //calling completeCertificate function to fill in the certificate
    completeCertificate()
}
// Create a function that fills in the student's name, class name, and calculated grade on the certificate .
function completeCertificate(){
    
    //add content to certificate
    certStudentName.innerText = newStudent.getStudentName()
    certClassName.innerText =newStudent.getStudentClass()
   certGrade.innerText = newStudent.calLetterGrade()
}
// Create a function that converts the contents of a comma-separated text string to a numeric array.
// You can use this function when instantiating the arrays in the student object.

const csvString2NumArray = (str) => str.split(',').map(e => parseInt(e))

