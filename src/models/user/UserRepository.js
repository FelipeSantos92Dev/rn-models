export default class UsersRepository {
  constructor() {
    this.users = [];
  }

  getAll() {
    return this.users;
  }

  get(id) {
    return this.users.find((user) => user.id === id);
  }

  add(user) {
    this.users.push(user);
  }

  remove(id) {
    this.users = this.users.filter((user) => user.id !== id);
  }

  update(id, name, email, age) {
    const user = this.get(id);

    if (user) {
      user.name = name;
      user.email = email;
      user.age = age;
    }
    return user;
  }
}
