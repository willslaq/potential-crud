import { Router } from 'express';
import { parseISO } from 'date-fns';

import { getCustomRepository } from 'typeorm';
import DevelopersRepository from '../repositories/DevelopersRepository';
import CreateDeveloperService from '../services/CreateDeveloperService';
import { FilterOption } from '../utils/interfaces';

const developersRouter = Router();

developersRouter.get('/', async (request, response) => {
  const { name, gender } = request.query as FilterOption;

  const developersRepository = getCustomRepository(DevelopersRepository);

  if (gender || name) {
    const developersByGender = await developersRepository.findByGender({
      name,
      gender,
    });

    if (developersByGender.length > 0) {
      return response.json(developersByGender);
    }
    return response
      .status(404)
      .json({ error: '🕵️‍♂️ Nenhum desenvolvedor encontrado' });
  }

  console.log('saí');

  const developers = await developersRepository.find();

  return response.json(developers);
});

developersRouter.get('/:id', (request, response) => response.json(developers));

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

developersRouter.put('/:id', (request, response) => {
  const { id } = request.params;
  const {
    name, gender, age, hobby, birthDate,
  } = request.body;

  const developerIndex = developers.findIndex(
    (developer) => developer.id === id,
  );

  if (developerIndex < 0) {
    return response.status(400).json({ error: '🕵️‍♂️ Developer not found' });
  }

  const developer = {
    id,
    name,
    gender,
    age,
    hobby,
    birthDate,
  };

  developers[developerIndex] = developer;

  return response.json(developer);
});

developersRouter.delete('/:id', (request, response) => {
  const { id } = request.params;

  const developerIndex = developers.findIndex(
    (developer) => developer.id === id,
  );

  if (developerIndex < 0) {
    return response.status(400).json({ error: '🕵️‍♂️ Developer not found' });
  }

  developers.splice(developerIndex, 1);

  return response.status(204).send();
});

export default developersRouter;
