import Developer from '../models/Developer';

interface CreateDevelopersDTO {
  name: string;
  gender: string;
  age: number;
  hobby: string;
  birthDate: Date;
}

class DevelopersRepository {
  private developers: Developer[];

  constructor() {
    this.developers = [];
  }

  public all(): Developer[] {
    return this.developers;
  }

  public create({
    age,
    name,
    gender,
    hobby,
    birthDate,
  }: CreateDevelopersDTO): Developer {
    const developer = new Developer({
      name, gender, age, hobby, birthDate,
    });

    this.developers.push(developer);

    return developer;
  }
}

export default DevelopersRepository;
