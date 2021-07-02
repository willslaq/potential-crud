import {
  EntityRepository, FindOperator, Like, Repository,
} from 'typeorm';
import Developer from '../models/Developer';
import { FilterOption } from '../utils/interfaces';

interface WhereTypes {
  gender?: string;
  name?: FindOperator<string>;
}

@EntityRepository(Developer)
class DevelopersRepository extends Repository<Developer> {
  public async findWithFilter({
    gender,
    name,
  }: FilterOption): Promise<Developer[]> {
    const whereMount = {} as WhereTypes;

    if (gender) {
      whereMount.gender = gender.toUpperCase();
    }

    if (name) {
      whereMount.name = Like(`%${name.toUpperCase()}%`);
    }

    const findDeveloper = await this.find({ where: whereMount });

    return findDeveloper;
  }
}

export default DevelopersRepository;
