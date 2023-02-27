function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;    
}

  Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
  }
  
  Student.prototype.addMarks = function (...marks) {
    (this.marks === undefined) ? this.marks = [...marks] : this.marks.push(...marks);
  }
  
  Student.prototype.getAverage = function () {
    let sum = 0;
    this.marks.forEach(item => sum += item);
    return sum / this.marks.length;
  }
  
  Student.prototype.exclude = function (reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason;
  }
  
  let student1 = new Student("Петя", "Мужской", 22);
  student1.setSubject("Физика");
  student1.addMarks(5);
  student1.addMarks(4);
  student1.addMarks(5);
  
  let student2 = new Student("Лиза", "Женский", 21);
  student2.setSubject("Химия");
  student2.addMarks(2);
  student2.addMarks(3);
  student2.addMarks(2);
  student2.exclude('Низкая оценка')

  console.log(student1); 
  console.log(student2);