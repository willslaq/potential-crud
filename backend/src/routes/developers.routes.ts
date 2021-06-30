import { Router } from 'express';
import { parseISO } from 'date-fns';

import Developer from '../models/Developer';
import DevelopersRepository from '../repositories/DevelopersRepository';

const developersRouter = Router();
const developersRepository = new DevelopersRepository();

developersRouter.get('/', (request, response) => {
  const developers = developersRepository.all();

  return response.json(developers);
});

developersRouter.get('/:id', (request, response) => response.json(developers));

developersRouter.post('/', (request, response) => {
  const {
    name, genre, age, hobby, birthDate,
  } = request.body;

  if (!name || !genre || !age || !birthDate || !hobby) {
    return response.status(400).json({
      error: '😐 Dados incompletos, por favor verifique os dados enviado.',
    });
  }

  const parsedBirthDate = parseISO(birthDate);

  const developer = developersRepository.create(
    name,
    genre,
    age,
    hobby,
    parsedBirthDate,
  );

  return response.json(developer);
});

developersRouter.put('/:id', (request, response) => {
  const { id } = request.params;
  const {
    name, genre, age, hobby, birthDate,
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
    genre,
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
