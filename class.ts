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

class Square extends Rectangle {
  public constructor(width: number) {
    super(width, width);
  }
}
const mySq = new Square(20);

// console.log(mySq.getArea());

enum HTTPCODES {
  OK = 200,
  CREATED = 201,
  ACCEPTED = 202,
  REDIRECTED = 300,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  UNPROCESSABLE_IDENTITY = 422,
  CONFLICT = 409,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  NOT_ACCEPTED = 406,
  INTERNAL_SERVER_ERROR = 500,
  BAD_GATEWAY = 502,
  SERVICE_UNAVAILABLE = 503,
  GATEWAY_TIMEOUT = 508,
  NETWORK_TIMEOUT = 599,
}

class MyError extends Error {
  constructor(public status: HTTPCODES, message: string) {
    super(message);
    this.name = this.constructor.name;
  }
}

function errorCheck(params: string) {
  if (typeof params === "number") {
    throw new MyError(HTTPCODES.FORBIDDEN, "");
  }
}
