const { uuid } = require('uuidv4');
const users = require('../../mock/Users');

class UsersRepository {
  async findAll() {
    return users;
  }

  async findById(id) {
    const user = users.find((userFromList) => userFromList.id === id);
    return user;
  }

  async delete(id) {
    const newUserList = users.filter((userFromList) => userFromList.id !== id);
    return newUserList;
  }

  async create(user) {
    const newUser = {
      id: uuid(),
      ...user,
    };
    users.push(newUser);
    return users;
  }

  async update(id, {
    name,
  }) {
    const newUserList = users.map((userFromList) => {
      if (userFromList.id === id) {
        userFromList.name = name;
      }
      return userFromList;
    });
    return newUserList;
  }
}

module.exports = new UsersRepository();
