import Developer from '../models/Developer';
import DevelopersRepository from '../models/DevelopersRepository';

interface Request {
  name: string;
  gender: string;
  age: number;
  hobby: string;
  birthDate: Date;
}

class CreateDevelopersService {
  private developersRepository: DevelopersRepository;

  constructor(developersRepository: DevelopersRepository) {
    this.developersRepository = developersRepository;
  }

  public execute({
    age,
    birthDate,
    gender,
    hobby,
    name,
  }: Request): Developer {
    if (!name || !gender || !age || !birthDate || !hobby) {
      throw Error(
        '😐[01] Dados incompletos, por favor verifique os dados enviado.',
      );
    }

    const developer = this.developersRepository.create({
      age,
      name,
      gender,
      hobby,
      birthDate,
    });
    return developer;
  }
}

export default CreateDevelopersService;
