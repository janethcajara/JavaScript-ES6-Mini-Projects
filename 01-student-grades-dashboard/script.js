const students = [
  { name: "Anna", grade: 92 },
  { name: "Ben", grade: 78 },
  { name: "Clara", grade: 88 },
  { name: "David", grade: 84 },
  { name: "Ella" } // no grade, will use default
];

// 1. Display all student names in uppercase
console.log("All student names in uppercase:");
students.forEach(student => {
  console.log(student.name.toUpperCase());
});

// 2. Filter and display students with grade ≥ 85
const topStudents = students.filter(student => (student.grade ?? 0) >= 85);
console.log("\nStudents with grade ≥ 85:");
topStudents.forEach(student => {
  console.log(student.name);
});

// 3. Calculate the average grade using reduce()
const totalGrades = students.reduce(
  (sum, student) => sum + (student.grade ?? 0),
  0
);
const averageGrade = totalGrades / students.length;
console.log(`\nAverage grade: ${averageGrade.toFixed(2)}`);

// 4. Function to display student info with destructuring and default value
function displayStudent({ name, grade = 0 }) {
  return `Student: ${name}, Grade: ${grade}`;
}

// Demonstrate the function
console.log("\nFormatted student info:");
students.forEach(student => {
  console.log(displayStudent(student));
});
