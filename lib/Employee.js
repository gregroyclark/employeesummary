// TODO: Write code to define and export the Employee class

class Employee {
  constructor(id, email, getName, getId, getEmail, getRole) {
    this.id = id;
    this.email = email;
    this.getName = getName();
    this.getId = getId();
    this.getEmail = getEmail();
    this.getRole();
  }
}

module.exports = Employee;