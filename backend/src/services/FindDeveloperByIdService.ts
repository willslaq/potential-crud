import { getCustomRepository } from 'typeorm';
import { isUuid } from 'uuidv4';
import Developer from '../models/Developer';
import DevelopersRepository from '../repositories/DevelopersRepository';
import { RequestId } from '../utils/interfaces';

class FindDeveloperByIdService {
  public async execute({ id }: RequestId): Promise<Developer | null> {
    const developersRepository = getCustomRepository(DevelopersRepository);

    if (!isUuid) {
      throw Error('😐[02] Informe um uuid válido.');
    }

    const developer = await developersRepository.findOne({ id });

    return developer || null;
  }
}

export default FindDeveloperByIdService;
