
const fs = require("fs");

fs.writeFileSync(
    "student.txt",
    "Name: Rahul\n" +
    "Roll Number: 101\n" +
    "Branch: CSE\n" +
    "Semester: 3\n"
);

console.log("File created successfully");


let data = fs.readFileSync("student.txt", "utf-8");

console.log("Reading student details:");
console.log(data);


fs.appendFileSync(
    "student.txt",
    "Subject: Full Stack Development\n" +
    "Marks: 85\n" +
    "Attendance: 92%\n"
);

console.log("File successfully updated");

data = fs.readFileSync("student.txt", "utf-8");

console.log("Complete updated student information:");
console.log(data);

