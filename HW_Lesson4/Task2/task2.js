class Student {
  constructor(fullName, direction) {
    this._fullName = fullName;
    this._direction = direction;
  }

  get direction() {
    return this._direction;
  }

  set direction(newDirection) {
    this._direction = newDirection;
  }

  showFullName() {
    return this._fullName;
  }

  nameIncludes(data) {
    const fullName = this.showFullName();
    const result = fullName.includes(data);

    return result;
  }

  static studentBuilder() {
    return new Student("Ivan Kohut", "QC");
  }
}

const student1 = new Student("Ivan Petrenko", "web");
const student2 = new Student("Sergiy Koval", "python");
const student3 = Student.studentBuilder();

console.log(student1.nameIncludes("Ivan")); //true
console.log(student2.showFullName()); //Sergiy Koval
console.log(student3.direction); //QC
