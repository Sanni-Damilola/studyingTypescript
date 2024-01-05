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
// console.log(person4.getName());

interface Shape {
  getArea: () => number;
}

class Rectangle implements Shape {
  public constructor(
    protected readonly width: number,
    protected readonly height: number
  ) {}

  public getArea(): number {
    return this.width * this.height;
  }
}

const myRect = new Rectangle(30, 20);

// console.log(myRect.getArea());
