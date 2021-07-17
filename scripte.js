const firstInputName = document.getElementById('firstinputName')
const lastInputName = document.getElementById('lastinputName')
const inputAge = document.getElementById('inputAge')
const btn = document.getElementById('btn')
const firstOutputName = document.getElementById('firstOutputName')
const lastOutputName = document.getElementById('lastOutPutName')
const outputAge = document.getElementById('outputAge')
const display = document.getElementById('display')


btn.addEventListener('click', function(){
    let firstianputNam = firstInputName.value;
     let lastInputNam = lastInputName.value;
     let intputAges = inputAge.value
       function Fullname(firstName, lastName, dob){
            this.firstName = firstName;
            this.lastName = lastName;
            this.dateOfBirth = new Date (dob)

    }
     Fullname.prototype.age  = function () {
        const differ = Date.now() - this.dateOfBirth.getTime();
        const ageDate = new Date(differ);
        return ageDate.getFullYear() - 1970;
    }

    Fullname.prototype.fulname = function(){
        return `helo ${this.firstName} ${this.lastName} welcome. your landing time ${this.dateOfBirth} `
    }
     const shafi = new Fullname (firstianputNam, lastInputNam, intputAges)
     firstOutputName.textContent = shafi.fulname();
     outputAge.textContent = shafi.age();

     function Web(job,jender){
         this.job =job;
         this.gender = jender
     }

    });