import { uuid } from 'uuidv4';

class Developer {
  id: string;

  name: string;

  gender: string;

  age: number;

  hobby: string;

  birthDate: Date;

  constructor({
    name, gender, age, hobby, birthDate,
  }: Omit<Developer, 'id'>) {
    this.id = uuid();
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.hobby = hobby;
    this.birthDate = birthDate;
  }
}

export default Developer;
