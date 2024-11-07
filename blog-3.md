# Why are Type Guards Necessary? Discuss Various Types of Type Guards and Their Use Cases.

## Introduction
We know typescript is one kind of JavaScript but with some extra features which is built on JavaScript. It runs anywhere where JavaScript runs. The main specialty of typescript is it gives type guarding features to JavaScript. In raw JavaScript we know it is dynamically typed but by enforcing typescript we can explicitly define the type for the variables which helps us catching errors early in development mode.


## Necessary of Type Guards in Typescript
Type guards check if a variable meets specific criteria by using. It narrows down a variable to a specific & required type. It prevents runtime errors and improves code readability and maintainability. And we can use Type Guard by using typescript's default features like as,
* **typeof** Type guard
* **in** Type guard
* **instanceof** Type guard
* **customly defined** Type guard



### *typeof* Type guard
suppose we have a problem: 
> Given the TypeScript code that defines a type alias which can be either a string or a number and a function add that checks if both parameters are numbers to add them, or concatenates them as strings if not

#### Analysis
Here in the problem we have to check the type of the arguments by using Type Guard so that the required individual operations can occur. This problem we will solve by using **typeof** to check the type and do further operations

```
type Alphaneumeric = string | number;

const add = (param1: Alphaneumeric, param2: Alphaneumeric): Alphaneumeric => {
  if (typeof param1 === "number" && typeof param2 === "number") {
    return param1 + param2;
  } else {
    return param1.toString() + param2.toString();
  }
};

const result1 = add("2", "3");
console.log(result1); // result1 এখন "23" (স্ট্রিং) টাইপের হবে
```



### *in* Type guard
suppose we have a problem: 
> Given the TypeScript code that defines two types, one with just a `name` property and another with both `name` and a `role` property of type `"admin"`, create a function `getUser` that checks if the user has a `role` property to differentiate between normal and admin users

#### Analysis
This problem we will solve by using **in** to check the type and do further operations. As we know in object we can counter the property by using **in** key on each of the object's key. So if we find the `role` property then we can take a decision i.e its an AdminUser other wise its NormalUser

```
type NormalUser = {
  name: string;
};

type AdminUser = {
  name: string;
  role: "admin";
};

const getUser = (user: NormalUser | AdminUser) => {
  if ("role" in user) {
    console.log(`My name is ${user.name} and my role is ${user.role}`);
  } else {
    console.log(`My name is ${user.name}`);
  }
};

const normalUser: NormalUser = {
  name: "Mr. Normal Bhai",
};
const adminUser: AdminUser = {
  name: "Mr. Admin Bhai",
  role: "admin",
};

getUser(adminUser);
```



### *instanceof* Type guard
suppose we have a problem: 
> Given the TypeScript code that defines a base class `Animal` with properties `name` and `species`, and two subclasses `Dog` and `Cat` that extend `Animal` and each have their own unique methods (`makeBark` for `Dog` and `makeMeaw` for `Cat`), along with type guards `isDog` and `isCat` to check if an animal is an instance of `Dog` or `Cat`, how would you use the type guards `isDog` and `isCat` to differentiate between instances of `Dog` and `Cat`? Additionally, what are the expected behaviors when calling methods like `makeBark` and `makeMeaw` on instances of `Dog` and `Cat`, respectively?

#### Analysis
This problem we will solve by using **instanceof ** to check the type and do further operations.

```
class Animal {
  name: string;
  species: string;

  constructor(name: string, species: string) {
    this.name = name;
    this.species = species;
  }

  makeSound() {
    console.log("I am making sound");
  }
}

class Dog extends Animal {
  constructor(name: string, species: string) {
    super(name, species);
  }

  makeBark() {
    console.log("I am barking");
  }
}

class Cat extends Animal {
  constructor(name: string, species: string) {
    super(name, species);
  }

  makeMeaw() {
    console.log("I am mewaing");
  }
}

const isDog = (animal: Animal): animal is Dog => {
  return animal instanceof Dog;
};

const isCat = (animal: Animal): animal is Cat => {
  return animal instanceof Cat;
};
```



## Conclusion
As we observed from our above discussion that the Type guard feature is realy an important tool that helps us in our development stage to get rid of type errors.Which helps developer to be confidient and easy going while using javascript with typescript