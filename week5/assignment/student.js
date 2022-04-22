// Create a class called Student whose constructor maintains all four data inputs from the HTML page.
// The class should also contain the following methods:
// - a method that adds up all the student's scores
// - a method that adds up all the possible scores
// - a method that calculates the student's letter grade (divide the student's score by the possible scores and use the resulting decimal to determine grade)

class Student{
    constructor(sname,sclass,sscores,pscores)
    {
        this.studentName = sname
        this.studentClass = sclass
        this.studentScores = sscores
        this.possibleScores = pscores
    }

    /*setters and getters for the student class */
    setStudentName(sname){
        this.studentName = sname
    }

    getStudentName(){
        return this.studentName
    }

    setStudentClass(sclass){
        this.studentClass = sclass
    }

    getStudentClass(){
        return this.studentClass
    }

    setStudentScores(sscores){
        this.studentScores = sscores
    }

    getStudentScores(){
        return this.studentScores
    }

    setPossibleScores(pscores){
        this.possibleScores = pscores
    }

    getPossibleScores(){
        return this.possibleScores
    }

    addScores(){
        const total = this.studentScores.reduce(function(runningTotal, score){
            return score + runningTotal
        }, 0)
        return  total
    }

    addPossibleScores(){
        const possibletotal = this.possibleScores.reduce(function(runningTotal, pscore){
            return pscore + runningTotal
        }, 0)
        return  possibletotal
    }

    calLetterGrade(){
        const decGrade = (this.addScores() / this.addPossibleScores()).toFixed(1)
        switch(decGrade) {
            case '0.8':
            case '0.9':
            case 1:
              // 80 - 100
              return "A"
              break;
            case '0.7':
              // 70 - 79
              return "B"
              break;
            case '0.6':
             // 60 - 69
              return "C"
              break;
            case '0.5':
             // 50 - 59
               return "D"
               break;
            default:
              // 0 - 49
              return " F"
          }
    }
}


