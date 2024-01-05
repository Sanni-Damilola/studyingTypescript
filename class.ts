class Person {
  name?: string;
}

const person = new Person();
person.name = "Jane";

// console.log(person);

class Person1 {
  private name: string;

  public constructor(name: string) {
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }
}

const person1 = new Person1("Jane");
// console.log(person1);

class Person3 {
  public constructor(private name: string) {}

  public getName(): string {
    return this.name;
  }
}

const person3 = new Person3("Bola");
// console.log(person3.getName());

class Person4 {
  private readonly name: string;

  public constructor(name: string) {
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }
}
const person4 = new Person4("Jane");
console.log(person4.getName());
