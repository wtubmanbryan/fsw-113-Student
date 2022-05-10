// Create a variable of the right kind and in the right place such that each new bug that is added can increment that number
let bugCount = 0;
let listWrapper = document.querySelector('#listWrapper')
let submitBtn = document.querySelector('#submitBtn').addEventListener('click', reportBug)

class Bug {
    constructor(reportedBy, system, subSystem, bugDesc) {
        // This constructor should be set up to accept the four user-input values from index.html: 
        // reportedBy, system, subSystem, and bugDesc

        this.reportedBy = reportedBy
        this.system = system
        this.subSystem = subSystem
        this.bugDesc = bugDesc
    }

    addBug() {
        // Create a div element that displays the bug information input by the user within the "listWrapper" DOM element. 
        // It should also contain buttons whose onClick events will call the deleteBug() and resolveBug() methods (see below). 
        let div = `<div id ="${bugCount}">Reported by:  ${this.reportedBy} System: ${this.system} / ${this.subSystem}<br>${this.bugDesc}<p class = "myBtn"><button onClick="deleteBug()"><i class="fa fa-times"></i></button><button onClick="resolveBug()"><i class="fa fa-check"></i></button></p></div>`
        listWrapper.innerHTML += div
        bugCount++
    }

    deleteBug() {
        // Create code that will remove the appropriate bug from the DOM. 
        // You may need to Google how to remove an element from the DOM.
       
    }

    resolveBug() {
        // Create code that changes the appropriate bug report to a darker color
    }
}

function reportBug() {
    // Create code that instantiates the Bug class with the data input by the 
    // user in the index.html form. Then call the method to add the new bug report.
    let repo = document.querySelector('#reportedBy')
    let sys = document.querySelector('#system')
    let subSys = document.querySelector('#subSystem')
    let bugDes = document.querySelector('#bugDesc')

    newBug = new Bug(repo.value,sys.options[sys.selectedIndex].text,subSys.options[subSys.selectedIndex].text, bugDes.value)
    newBug.addBug()

}
