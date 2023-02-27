function Student(name, gender, age) {
    let student1 = new Student("Петя", "Мужской", 22);
    student1.setSubject("Физика");
    student1.addMark(5);
    student1.addMark(4);
    student1.addMark(5);
    
    let student2 = new Student("Лиза", "Женский", 21);
    student2.setSubject("Химия");
    student2.addMark(2);
    student2.addMark(3);
    student2.addMark(2);
    student2.exclude('Низкая оценка')
    
    console.log(student1); 
    console.log(student2);
}

// Student.prototype.setSubject = function (subjectName) {
  
// }

// Student.prototype.addMarks = function (...marks) {
  
// }

// Student.prototype.getAverage = function () {
  
// }

// Student.prototype.exclude = function (reason) {
  
// }
