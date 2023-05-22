const UsersRepository = require('../repositories/UsersRepository');

class UsersController {
  async index(request, response) {
    // Listar todos os registros
    const users = await UsersRepository.findAll();
    response.json(users);
  }

  async show(request, response) {
    // Obter UM registro
    const { id } = request.params;
    const user = await UsersRepository.findById(id);

    if (!user) {
      return response.status(404).json({ error: 'User not found' });
    }

    response.json(user);
  }

  async store(request, response) {
    // Criar novo registro
    const user = request.body;

    if (!user.name) {
      return response.status(400).json({ error: 'Name is required' });
    }

    const users = await UsersRepository.create(user);
    response.status(201).json(users);
  }

  async update(request, response) {
    // Editar um registro
    const { id } = request.params;

    const userExists = await UsersRepository.findById(id);

    if (!userExists) {
      return response.status(404).json({ error: 'User not found' });
    }

    const user = request.body;

    if (!user.name) {
      return response.status(400).json({ error: 'Name is required' });
    }

    const users = await UsersRepository.update(id, user);
    response.status(200).json(users);
  }

  async delete(request, response) {
    // Deletar um registro
    const { id } = request.params;

    const user = await UsersRepository.findById(id);

    if (!user) {
      return response.status(404).json({ error: 'User not found' });
    }

    const users = await UsersRepository.delete(id);
    response.status(200).json(users);
  }
}

module.exports = new UsersController();
