const { uuid } = require('uuidv4');
const professions = require('../../mock/Professions');

class ProfessionsRepository {
  async findAll() {
    return professions;
  }

  async findById(id) {
    const profession = professions.find((professionFromList) => professionFromList.id === id);
    return profession;
  }

  async delete(id) {
    const newProfessionList = professions.filter(
      (professionFromList) => professionFromList.id !== id,
    );
    return newProfessionList;
  }

  async create(profession) {
    const newprofession = {
      id: uuid(),
      ...profession,
    };
    professions.push(newprofession);
    return professions;
  }

  async update(id, {
    name,
  }) {
    const newProfessionList = professions.map((professionFromList) => {
      if (professionFromList.id === id) {
        professionFromList.name = name;
      }
      return professionFromList;
    });
    return newProfessionList;
  }
}

module.exports = new ProfessionsRepository();
