// Student Result System

// Variables
let marks = 67;

let grade;

// if-else if Statements
if (marks >= 90 && marks <= 100) {
    grade = "A+";
}
else if (marks >= 80) {
    grade = "A";
}
else if (marks >= 70) {
    grade = "B";
}
else if (marks >= 60) {
    grade = "C";
}
else if (marks >= 50) {
    grade = "D";
}
else if (marks >= 0) {
    grade = "F";
}
else {
    grade = "Invalid Marks";
}

document.write("Marks: " + marks + "<br>");
document.write("Grade: " + grade);