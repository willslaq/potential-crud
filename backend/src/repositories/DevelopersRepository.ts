import { EntityRepository, Repository } from 'typeorm';
import Developer from '../models/Developer';

@EntityRepository(Developer)
class DevelopersRepository extends Repository<Developer> {
  public async findByGender(gender: string): Promise<Developer[] | null> {
    const findDeveloper = await this.find({
      where: { gender },
    });

    return findDeveloper || null;
  }
}

export default DevelopersRepository;
