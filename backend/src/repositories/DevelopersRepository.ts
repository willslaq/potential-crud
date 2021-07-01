import { EntityRepository, Like, Repository } from 'typeorm';
import Developer from '../models/Developer';
import { FilterOption } from '../utils/interfaces';

@EntityRepository(Developer)
class DevelopersRepository extends Repository<Developer> {
  public async findByGender({
    gender,
    name,
  }: FilterOption): Promise<Developer[]> {
    console.log('to filtrando', { name, gender });
    const findDeveloper = await this.find({
      where: gender
        ? { gender: gender.toLocaleUpperCase() }
        : { name: Like(`%${name?.toUpperCase()}%`) },
    });

    return findDeveloper;
  }
}

export default DevelopersRepository;
