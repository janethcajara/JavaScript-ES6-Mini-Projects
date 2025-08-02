// Define students array
const students = [
  { name: "Anna", grade: 92 },
  { name: "Ben", grade: 78 },
  { name: "Clara", grade: 88 },
  { name: "David", grade: 34 },
  { name: "Ella" } // no grade, defaults to 0
];

// Helper function to style names (bold + color)
function styleName(name, color) {
  return `<span style="color:${color}; font-weight:bold;">${name}</span>`;
}
function styleName1(name, color) {
  return `<span style="color:${color}; font-weight:bold;">${name}</span>`;
}

// 1. Update student names using .map()
const originalNames = students.map(student => `<strong style="color:violet;">${student.name}</strong>`).join(' ');
const updatedNamesHTML = students .map(student => `<strong style="color:blue;">${student.name.toUpperCase()}</strong>`).join(' ');

// Insert the updated names into the HTML
document.getElementById('task1-names').innerHTML = updatedNamesHTML;

// 2. Filter students with grades above 85
const studentsAbove85 = students.filter(student => (student.grade ?? 0) > 85);
const namesAbove85 = studentsAbove85
  .map(s => styleName(s.name, 'red'))
  .join(', ');

// Insert into HTML
document.getElementById('task2-list').innerHTML = namesAbove85;

// 3. Calculate average grade
const totalGrades = students.reduce(
  (sum, student) => sum + (student.grade ?? 0),
  0
);
const averageGrade = totalGrades / students.length;

// Insert into HTML
document.getElementById('task3-value').textContent = averageGrade.toFixed(2);

// 4. Display each student info with destructuring and default
function displayStudent({ name, grade = 0 }) {
  return `${name}-Grade: ${grade}`;
}

// Build the list HTML
const studentDetailsHTML = students
  .map(s => {
    const { name, grade = 0 } = s;
    return `<div style="margin-bottom:8px;">${styleName(name, 'green')} - ${grade}</div>`;
  })
  .join('');

// Insert into HTML
document.getElementById('task4-list').innerHTML = studentDetailsHTML;
