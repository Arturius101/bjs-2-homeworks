function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;    
}

  Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
  }
  
  Student.prototype.addMarks = function (...marks) {
    if (this.marks) { 
      this.marks.push(...marks);             
    } 
  }
  
  Student.prototype.getAverage = function () {    
    if (this.marks === undefined) {
      return 0;
    } else {      
      this.marks = 0;
      return this.marks.reduce(( a, v ) => a + v) / this.marks.length;
    }
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

  console.log(student1.marks); 
  console.log(student2.marks);