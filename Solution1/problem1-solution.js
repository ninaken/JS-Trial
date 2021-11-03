class Course{
    constructor(name){
        this.name=name;
       
        
    }

    students=[];

    addStudent(student){
        this.students.push(student);
    }

    removeStudent(student){
        this.students = this.students.filter((oldstudent) => oldstudent !== student);
    }
    
    getStudentscount(){
       return this.students.length;
    }

    
    
    getStudentsname() {
        return this.students.map((student) => student.getFullname());
      }




}

class Student {
    constructor(name,surname, gender, age, courses=[]) {
        this.name=name;
        this.surname=surname;
        this.gender=gender;
        this.age=age;
        this.courses=courses;
    }

    buysCourse(course){
        this.courses.push(course);
        course.addStudent(this);
    }

    removesCourse(course) {
        this.courses = this.courses.filter((el) => el !== course);
        course.removeStudent(this);
      }

    getFullname(){
        return `${this.name} ${this.surname}`
    }
    
    countcourses(){
        return this.courses.length;
    }
}

let math=new Course("Maths");
let algorithms=new Course("Algorithms");

let nin=new Student("Nina", "Khasaia", "F",22,[]);
let mushni=new Student("Mushni", "Zarandia",  "M", 26, []);


nin.buysCourse(math);
nin.buysCourse(algorithms);
nin.removesCourse(math);
mushni.buysCourse(math);
mushni.buysCourse(algorithms);
console.log({
    Nina: {
    fullName: nin.getFullname(),
    countCars: nin.countcourses(),
   
  },
  Mushni: {
    fullName: mushni.getFullname(),
    countCars: mushni.countcourses(),
    
  },
   mathematis: {
    getStudentscount: math.getStudentscount(),
    getStudentsname: math.getStudentsname(),
  },
   algoritms: {
    getStudentscount:algorithms.getStudentscount(),
    getStudentsname: algorithms.getStudentsname(),
  },
});




