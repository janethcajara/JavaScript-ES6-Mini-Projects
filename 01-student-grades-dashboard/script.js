// Starter data
const students = [
  { name: "Anna", grade: 92 },
  { name: "Ben", grade: 78 },
  { name: "Clara", grade: 88 },
  { name: "David", grade: 84 },
  { name: "Ella" } // no grade, should use default
];

// 1. Display all student names in uppercase
const originalNamesElement = document.getElementById("original-names");
const updatedNamesElement = document.getElementById("updated-names");

const studentNames = students.map(student => student.name);
const namesUpper = students.map(student => student.name.toUpperCase());

console.log(studentNames);
console.log(namesUpper);

originalNamesElement.style.fontSize = "1.2rem";
updatedNamesElement.style.fontSize = "1.2rem";
originalNamesElement.style.color = "green";
updatedNamesElement.style.color = "blue";
originalNamesElement.style.fontWeight = "bold";
updatedNamesElement.style.fontWeight = "bold";
originalNamesElement.style.fontFamily = "Times New Roman";
updatedNamesElement.style.fontFamily = "Times New Roman";

originalNamesElement.textContent = studentNames.join(", ");
updatedNamesElement.textContent = namesUpper.join(", ");

// 2. Filter and display students with grade ≥ 85
const filteredStudentsElement = document.getElementById("filtered-students");

const filteredStudents = students.filter(student => (student.grade ?? 0) >= 85);

filteredStudentsElement.textContent = filteredStudents
  .map(student => `${student.name} (${student.grade ?? 0})`)
  .join(", ");

filteredStudentsElement.style.fontSize = "1.2rem";
filteredStudentsElement.style.color = "red";
filteredStudentsElement.style.fontWeight = "bold";
filteredStudentsElement.style.fontFamily = "Times New Roman";

// 3. Calculate the average grade using reduce()
const averageGradeElement = document.getElementById("average-grade");

const totalGrades = students.reduce((sum, student) => sum + (student.grade ?? 0), 0);
const averageGrade = totalGrades / students.length;

averageGradeElement.textContent = averageGrade.toFixed(2);

averageGradeElement.style.fontSize = "1.2rem";
averageGradeElement.style.color = "orange";
averageGradeElement.style.fontWeight = "bold";
averageGradeElement.style.fontFamily = "Times New Roman";

// 4. Corrected displayStudent function using destructuring
function displayStudent({ name, grade }) {
  return `Student: ${name}, Grade: ${grade}`;
}

// 5. Add default parameter support for grade
function displayStudentWithDefault({ name, grade = 0 }) {
  return `Student: ${name}, Grade: ${grade}`;
}

// Display all students using the function with default parameter
const displayStudentsElement = document.getElementById("display-students");

displayStudentsElement.textContent = students
  .map(displayStudentWithDefault)
  .join("\n");

displayStudentsElement.style.fontSize = "1.2rem";
displayStudentsElement.style.color = "green";
displayStudentsElement.style.fontWeight = "bold";
displayStudentsElement.style.fontFamily = "Times New Roman";
