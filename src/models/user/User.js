export default class User {
  constructor(name, email, age) {
    this.id = this.generateId();
    this.name = name;
    this.email = email;
    this.age = age;
  }

  generateId() {
    return Math.floor(Math.random() * 1000);
  }
}
