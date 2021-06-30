import { uuid } from 'uuidv4';

class Developer {
  id: string;

  name: string;

  genre: string;

  age: number;

  hobby: string;

  birthDate: Date;

  constructor(
    name: string,
    genre: string,
    age: number,
    hobby: string,
    birthDate: Date,
  ) {
    this.id = uuid();
    this.name = name;
    this.genre = genre;
    this.age = age;
    this.hobby = hobby;
    this.birthDate = birthDate;
  }
}

export default Developer;
