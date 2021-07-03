import { getConnection, getCustomRepository } from 'typeorm';
import Developer from '../models/Developer';
import DevelopersRepository from '../repositories/DevelopersRepository';
import getAge from '../utils/getAge';
import {
  DatabaseDeveloperDTO,
  RequestDeveloperDTO,
  RequestId,
} from '../utils/interfaces';
import isValidDate from '../utils/isValidDate';

class UpdateDeveloperService {
  public async execute(
    { id }: RequestId,
    {
      birthDate, gender, hobby, name,
    }: RequestDeveloperDTO,
  ): Promise<string> {
    const developersRepository = getCustomRepository(DevelopersRepository);
    const hasDeveloper = await developersRepository.findOne({ id });

    if (!hasDeveloper) {
      throw Error('🕵️‍♂️ [06] Nenhum desenvolvedor com este ID encontrado');
    }

    if (!id) {
      throw Error('😐 [03] Para atualizar um registro, informe um ID');
    }

    if (!isValidDate(birthDate) && !gender && !hobby && !name) {
      throw Error('😐 [04] Informe ao menos um parâmetro a ser atualizado');
    }

    const developerUpdateObject = {} as DatabaseDeveloperDTO;

    if (isValidDate(birthDate)) {
      developerUpdateObject.birthdate = birthDate;
      developerUpdateObject.age = getAge(birthDate);
    }
    if (gender) {
      developerUpdateObject.gender = gender.toUpperCase();
    }
    if (hobby) {
      developerUpdateObject.hobby = hobby.toUpperCase();
    }
    if (name) {
      developerUpdateObject.name = name.toUpperCase();
    }

    await getConnection()
      .createQueryBuilder()
      .update(Developer)
      .set(developerUpdateObject)
      .where('id = :id', { id })
      .execute();

    return 'Developer atualizado com sucesso';
  }
}

export default UpdateDeveloperService;
