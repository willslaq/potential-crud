import Developer from '../models/Developer';

class DevelopersRepository {
  private developers: Developer[];

  constructor() {
    this.developers = [];
  }

  public all(): Developer[] {
    return this.developers;
  }

  public create(
    name: string,
    genre: string,
    age: number,
    hobby: string,
    birthDate: Date,
  ): Developer {
    const developer = new Developer(name, genre, age, hobby, birthDate);

    this.developers.push(developer);

    return developer;
  }
}

export default DevelopersRepository;
