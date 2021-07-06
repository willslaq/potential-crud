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
  const {
    name, gender, page = 1, limit = 1,
  } = request.query as FilterOption;

  const developersRepository = getCustomRepository(DevelopersRepository);

  if (gender || name) {
    const developersByGender = await developersRepository.findWithFilter({
      name,
      gender,
      page,
      limit,
    });

    if (developersByGender.length > 0) {
      return response.json(developersByGender);
    }
    return response
      .status(404)
      .json({ error: '🕵️‍♂️ [06] Nenhum desenvolvedor encontrado' });
  }

  const { count } = await developersRepository
    .createQueryBuilder('developer')
    .select('COUNT(*)', 'count')
    .getRawOne();

  const developers = await developersRepository
    .createQueryBuilder('developer')
    .offset((page - 1) * limit)
    .limit(limit)
    .getMany();

  return response.header('X-Total-Count', count).json(developers);
});

developersRouter.get('/:id', async (request, response) => {
  try {
    const { id } = request.params;

    const findDeveloperById = new FindDeveloperByIdService();

    const developer = await findDeveloperById.execute({ id });

    if (!developer) {
      response
        .status(404)
        .json({ error: '🕵️‍♂️ [06] Nenhum desenvolvedor encontrado' });
    }
    return response.json(developer);
  } catch (error) {
    return response.status(500).json({ error: error.message });
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

    return response.status(201).json(developer);
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
  try {
    const { id } = request.params;

    if (!id) {
      return response
        .status(400)
        .json({ error: '🤔 [05] Informe um ID a ser deletado' });
    }

    const developersRepository = getCustomRepository(DevelopersRepository);
    const result = await developersRepository.findOne({ id });
    if (!result) {
      return response
        .status(404)
        .json({ error: '🕵️‍♂️ [06] Nenhum desenvolvedor com este ID encontrado' });
    }

    await developersRepository.delete({ id });

    return response.status(204).send();
  } catch (error) {
    return response.status(400).json({ error: error.message });
  }
});

export default developersRouter;
