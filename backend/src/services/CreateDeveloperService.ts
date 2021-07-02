import { getCustomRepository } from 'typeorm';
import Developer from '../models/Developer';
import DevelopersRepository from '../repositories/DevelopersRepository';
import { RequestDeveloperDTO } from '../utils/interfaces';

class CreateDevelopersService {
  public async execute({
    age,
    birthDate,
    gender,
    hobby,
    name,
  }: RequestDeveloperDTO): Promise<Developer> {
    const developersRepository = getCustomRepository(DevelopersRepository);

    if (!name || !gender || !age || !birthDate || !hobby) {
      throw Error(
        '😐[01] Dados incompletos, por favor verifique os dados enviados.',
      );
    }

    const developer = developersRepository.create({
      age,
      name: name.toUpperCase(),
      gender: gender.toUpperCase(),
      hobby: hobby.toUpperCase(),
      birthdate: birthDate,
    });

    await developersRepository.save(developer);

    return developer;
  }
}

export default CreateDevelopersService;
