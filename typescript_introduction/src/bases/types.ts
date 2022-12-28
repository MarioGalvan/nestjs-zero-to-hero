const name: string = "Mario";
const age: number = 30;
const isValid: boolean = true;
const mySkills: string[] = ["NestJs", "Node js"];

// Tuples
 const person: [string, number] = ["Mario", 30];

// Enum
 enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

// Any
 let myAny: any = "Hello";

// Void
 const sayHello = (name: string): void => {
  console.log(`Hello ${name}`);
};

// Never
 const throwError = (message: string): never => {
  throw new Error(message);
};

// Object
 const myObject: object = {
  name: "Mario",
  age: 30,
};

// Type union
let myUnion: string | number = 30;
myUnion = "Mario";

// Type alias
type MyType = string | number;
let myType: MyType = 30;
myType = "Mario";

// Function
export const add = (a: number, b: number): number => a + b;

// Function type
export const add2: (a: number, b: number) => number = (a, b) => a + b;

// Interface
export interface Person {
  name: string;
  age: number;
  isValid: boolean;
  mySkills: string[];
  person: [string, number];
  Role: Role;
  myAny: any;
  sayHello: (name: string) => void;
  throwError: (message: string) => never;
  myObject: object;
  add: (a: number, b: number) => number;
  add2: (a: number, b: number) => number;
}

// Class
export class PersonClass implements Person {
  constructor(
    public name: string,
    public age: number,
    public isValid: boolean,
    public mySkills: string[],
    public person: [string, number],
    public Role: Role,
    public myAny: any,
    public myObject: object
  ) {
    this.name = name;
    this.age = age;
    this.isValid = isValid;
    this.mySkills = mySkills;
    this.person = person;
    this.Role = Role;
    this.myAny = myAny;
    this.myObject = myObject;
  }

  sayHello(name: string): void {
    console.log(`Hello ${name}`);
  }

  throwError(message: string): never {
    throw new Error(message);
  }

  add(a: number, b: number): number {
    return a + b;
  }

  add2(a: number, b: number): number {
    return a + b;
  }
}

// Generics
export const add3 = <T>(a: T, b: T): T => a;
