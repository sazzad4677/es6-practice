class Student {
    constructor(studentId,studentName){
        this.id = studentId;
        this.name= studentName;
        this.school = 'DIU'; //default property
    }
}

const student1 = new Student(12, 'Sazzad');
const student2 = new Student(13, 'Robin');
console.log(student1, student2); // all property access
console.log(student1.name, student2.name); //only name property access