შექმენით კლასი Student, რომელიც იღებს არგუმენტს:საცელი, გვარი,სქესი, ასაკი და საგნებს,
შექმენით მეთოდები: fullname() (აბრუნებს სახელსა და გვარს) და countcouses()(აბრუნებს კურსების
რაოდენიბას). დაამატეტ ფუნქციები:
1) buysCourse, რომელიც დაამტებს კურსს მიიღებს არგუმენტად ცვლადს.
2)removecourse,რომელიც  წაშლის  კურსს მიიღებს არგუმენტად ცვლადს.
3) getStudentscount- დააბრუენბს მიდმინარე კურსის სტუდენტების რაოდენობას
4)getStudentsname-მდააბრუნებს სტუდენტებისა სახელსა და გვარს მიმდნარე კურსის
შექმენით კლასი Course, რომლიც იღებს არგუმენტებს:კურსის დასახელება,
შექმენით ფუნქციები:
1)removeStudent წაშლის სტუდეტნს კურსიდან, და მიიღებს არგუმენტად ცვლადს.
2)addStudent დაამტებს სტუდენტს კურსში მიიღებს არგუმენტად ცვლადს.
3)getFullname დააბრუნებს სტუდენტის სახელსა და გვარს
4)countcourses დააბრუნებს თითოეული სტუდენტის კურსის რაოდენობას.


*გაითვალსწინეთ, რომ    students მასივი ცვლადი უნდა შეიქმნას  Course კლასში 

კოდი ბოლოს ჩაამტებელი ნაწილი:
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


უნდა დააბრუნოს:{
  Nina: { fullName: 'Nina Khasaia', countCars: 1 },
  Mushni: { fullName: 'Mushni Zarandia', countCars: 2 },
  mathematis: {
    getStudentscount: undefined,
    getStudentsname: [ 'Mushni Zarandia' ]
  },
  algoritms: {
    getStudentscount: undefined,
    getStudentsname: [ 'Nina Khasaia', 'Mushni Zarandia' ]
  }
}

[Done] exited with code=0 in 0.19 seconds

[Running] node "c:\Users\user\test\Homework6\Solution1\problem1-solution.js"
{
  Nina: { fullName: 'Nina Khasaia', countCars: 1 },
  Mushni: { fullName: 'Mushni Zarandia', countCars: 2 },
  mathematis: { getStudentscount: 1, getStudentsname: [ 'Mushni Zarandia' ] },
  algoritms: {
    getStudentscount: 2,
    getStudentsname: [ 'Nina Khasaia', 'Mushni Zarandia' ]
  }
}
