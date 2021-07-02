import { getConnection } from 'typeorm';
import Developer from '../models/Developer';
import {
  DatabaseDeveloperDTO,
  RequestDeveloperDTO,
  RequestId,
} from '../utils/interfaces';

class UpdateDeveloperService {
  public async execute(
    { id }: RequestId,
    {
      age, birthDate, gender, hobby, name,
    }: RequestDeveloperDTO,
  ): Promise<string> {
    if (!id) {
      throw Error('😐[03] Para atualizar um registro, informe um ID');
    }

    if (!age && !birthDate && !gender && hobby && name) {
      throw Error('😐[04] Informe ao menos um parâmetro a ser atualizado');
    }

    const developerUpdateObject = {} as DatabaseDeveloperDTO;

    if (age) {
      developerUpdateObject.age = age;
    }
    if (!Number.isNaN(birthDate.getTime())) {
      developerUpdateObject.birthdate = birthDate;
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

    return 'Produto atualizado com sucesso';
  }
}

export default UpdateDeveloperService;
