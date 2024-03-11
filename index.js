class Employee {
    constructor(name, time, work) {
        this.name = name;
        this.time = time;
        this.work = work;
    }

    canLeave() {
        console.log("Employee can leave");
      
    }

    canAttendMeeting() {
        console.log("Employee can attend meeting");
       
    }

   
    displayDetails() {
        const employeeDetailsElement = document.getElementById("employeeDetails");
        employeeDetailsElement.innerHTML = `
            <h2>Employee Details:</h2>
            <p><strong>Name:</strong> ${this.name}</p>
            <p><strong>Time:</strong> ${this.time}</p>
            <p><strong>Work:</strong> ${this.work}</p>
           
        `;
    }
}

let prachi = new Employee("Prachi", 11, "UI/UX");
parth.displayDetails();
 prachi.canLeave();