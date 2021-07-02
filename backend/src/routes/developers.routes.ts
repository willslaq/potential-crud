import { Router } from 'express';
import { parseISO } from 'date-fns';

import { getCustomRepository } from 'typeorm';
import DevelopersRepository from '../repositories/DevelopersRepository';
import CreateDeveloperService from '../services/CreateDeveloperService';
import { FilterOption } from '../utils/interfaces';
import FindDeveloperByIdService from '../services/FindDeveloperByIdService';
import UpdateDeveloperService from '../services/UpdateDeveloperService';

const developersRouter = Router();

developersRouter.get('/', async (request, response) => {
  const { name, gender } = request.query as FilterOption;

  const developersRepository = getCustomRepository(DevelopersRepository);

  if (gender || name) {
    const developersByGender = await developersRepository.findWithFilter({
      name,
      gender,
    });

    if (developersByGender.length > 0) {
      return response.json(developersByGender);
    }
    return response
      .status(404)
      .json({ error: '🕵️‍♂️ [06]Nenhum desenvolvedor encontrado' });
  }

  const developers = await developersRepository.find();

  return response.json(developers);
});

developersRouter.get('/:id', async (request, response) => {
  try {
    const { id } = request.params;

    const findDeveloperById = new FindDeveloperByIdService();

    const developer = await findDeveloperById.execute({ id });

    return response.json(developer);
  } catch (error) {
    return response.status(400).json({ error: error.message });
  }
});

developersRouter.post('/', async (request, response) => {
  try {
    const {
      name, gender, age, hobby, birthDate,
    } = request.body;

    const parsedBirthDate = parseISO(birthDate);

    const createDeveloper = new CreateDeveloperService();

    const developer = await createDeveloper.execute({
      name,
      gender,
      age,
      hobby,
      birthDate: parsedBirthDate,
    });

    return response.json(developer);
  } catch (error) {
    return response.status(400).json({ error: error.message });
  }
});

developersRouter.put('/:id', async (request, response) => {
  try {
    const {
      name, gender, age, hobby, birthDate,
    } = request.body;
    const { id } = request.params;

    const parsedBirthDate = parseISO(birthDate);

    const updateDeveloper = new UpdateDeveloperService();

    const result = await updateDeveloper.execute(
      { id },
      {
        age,
        birthDate: parsedBirthDate,
        gender,
        hobby,
        name,
      },
    );
    return response.json(result);
  } catch (error) {
    return response.status(400).json({ error: error.message });
  }
});

developersRouter.delete('/:id', async (request, response) => {
  const { id } = request.params;

  if (!id) {
    return response
      .status(400)
      .json({ error: '🤔[05] Informe um ID a ser deletado' });
  }

  const developersRepository = getCustomRepository(DevelopersRepository);
  const result = await developersRepository.findOne({ id });
  if (!result) {
    return response
      .status(404)
      .json({ error: '🕵️‍♂️ [06] Nenhum desenvolvedor com este ID encontrado' });
  }
  console.log('result', result);

  await developersRepository.delete({ id });

  return response.status(204).send();
});

export default developersRouter;
