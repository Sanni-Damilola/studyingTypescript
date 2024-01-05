class Person {
  name?: string;
}

const person = new Person();
person.name = "Jane";

console.log(person);

class Person1 {
  private name: string;

  public constructor(name: string) {
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }
}
