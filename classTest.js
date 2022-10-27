
class Employee {
  constructor(name) {
    this._name = name
    this._daysLeft = 20;
  }

  get name() {
    return this._name
  }

  get daysLeft() {
    return this._daysLeft
  }

  takeDays(days) {
    this._daysLeft -= days;
  }

  static test() {
    return 5
  }

}

class Surgeon extends Employee {
  constructor(name, tool) {
    super(name);
    this._tool = tool;
  }

  get tool() {
    return this._tool
  }
}


let eustice = new Surgeon('Eustice', 'scalpel');

console.log(eustice)
eustice.takeDays(5);
console.log(eustice.daysLeft)

console.log(eustice.test)

console.log(Employee.test())