let enrolledStudents = [];

function enroll(courseName) {
    let studentName = prompt("Enter your name to enroll in " + courseName + " course:");
    if (studentName) {
        enrolledStudents.push({ name: studentName, course: courseName });
        alert(studentName + " has enrolled in " + courseName + " course!");
    }
}

function showEnrolledStudents() {
    let studentListElement = document.getElementById("students-list");
    studentListElement.innerHTML = "";
    if (enrolledStudents.length === 0) {
        studentListElement.innerHTML = "<li>No students enrolled yet.</li>";
        return;
    }
    enrolledStudents.forEach(student => {
        let li = document.createElement("li");
        li.textContent = `${student.name} - ${student.course}`;
        studentListElement.appendChild(li);
    });
}
