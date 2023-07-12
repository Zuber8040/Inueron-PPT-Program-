# Assignment Questions 6


💡 **Q.1** What’s Constructor And Its Purpose?

Ans:

In JavaScript, a constructor is a special function that creates and initializes an object instance of a class. The constructor function is called automatically when a new object is created using the new keyword. The purpose of a constructor is to create a new object and set values for any existing object properties.

Here is an example of a constructor in JavaScript:

```
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const person = new Person("John Doe", 30);


```

In this example, the constructor function Person takes two arguments: name and age. When the new keyword is used to create a new object of the Person class, the Person constructor function is called and the name and age arguments are passed to the constructor function. The constructor function then sets the name and age properties on the new object.



💡 **Q.2** Explain This Keyword and Its Purpose?

Ans:

 The this keyword in JavaScript refers to the object that is executing the current function. The value of this can vary depending on how and where the function is called.

 ```
 function Person(name, age) {
  this.name = name;
  this.age = age;

  this.fullName = function() {
    return this.name + " " + this.age;
  };
}

const person = new Person("John Doe", 30);

console.log(person.fullName()); // "John Doe 30"
```

💡 **Q.3** What’s Call Apply Bind Method & Difference Between them

Ans:
The call(), apply(), and bind() methods are three special methods in JavaScript that can be used to change the this binding of a function. The this binding of a function is the object that the function refers to when it is executed.

The call() method takes two arguments: the first argument is the value of this that the function should refer to, and the second argument is an array of arguments that should be passed to the function. For example, the following code defines a function that prints the value of this and then calls the function with the window object as this:

```
call(printThis, {
  window: window,
});

```


The bind() method takes two arguments: the first argument is the value of this that the function should refer to, and the second argument is an array of arguments that should be passed to the function. The bind() method returns a new function that has the same body as the original function, but the this binding of the new function is set to the value of the first argument. For example, the following code defines a function that prints the value of this and then binds the function to the window object:


```
function printThis() {
  console.log(this);
}

const boundPrintThis = bind(printThis, window);

boundPrintThis(); // <window object>

```


The main difference between the call() and apply() methods is that the call() method takes an array of arguments, while the apply() method takes an object literal that contains the arguments. The main difference between the bind() method and the call() and apply() methods is that the bind() method returns a new function, while the call() and apply() methods simply call the function.


 **Q.4** Explain OOPS ?

Ans:

Object-oriented programming (OOP) is a programming paradigm that treats data as an object. In OOP, objects are created using classes, which are templates for creating objects. Classes define the properties and methods of objects.

JavaScript is a prototype-based language, which means that objects are created using prototypes. Prototypes are objects that are used as templates for creating new objects. When a new object is created, it inherits the properties and methods of its prototype.

OOP in JavaScript is based on the following four principles:

- Abstraction: Abstraction is the process of hiding the implementation details of an object from the user. This allows the user to focus on the behavior of the object without having to worry about how the object is implemented.
- Encapsulation: Encapsulation is the process of grouping data and methods together in an object. This allows the data and methods to be protected from unauthorized access.
- Inheritance: Inheritance is the process of one object inheriting the properties and methods of another object. This allows objects to be reused and to share code.
- Polymorphism: Polymorphism is the ability of an object to behave differently in different contexts. This is achieved by overloading methods or overriding methods.
```
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

```

OOP in JavaScript can be used to create reusable and maintainable code. It can also be used to model real-world problems.





**Q.5** Whats Abstraction and Its Purpose?

Ans:

Abstraction is a key concept in object-oriented programming (OOP). It is the process of hiding the implementation details of an object from the user. This allows the user to focus on the behavior of the object without having to worry about how the object is implemented.

In JavaScript, abstraction can be achieved using classes and interfaces. Classes are templates for creating objects, and they can define the properties and methods of objects. Interfaces define the behavior of objects, but they do not define the implementation details.

```
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

class Employee extends Person {
  constructor(name, age, department) {
    super(name, age);
    this.department = department;
  }

  sayHello() {
    super.sayHello();
    console.log(`I work in the ${this.department}`);
  }
}

const person = new Person("John Doe", 30);
const employee = new Employee("Jane Doe", 35, "Sales");

person.sayHello(); // "Hello, my name is John Doe"
employee.sayHello(); // "Hello, my name is Jane Doe. I work in the Sales department"

```


 **Q.6** Whats Polymorphism and Purpose of it?

Ans:

Polymorphism is a feature of object-oriented programming languages that allows a specific routine to use variables of different types at different times. In JavaScript, polymorphism is achieved through inheritance and method overriding.

For example, let's say we have a class called Animal and a subclass called Dog. The Animal class has a method called makeSound() that prints out the sound that an animal makes. The Dog class also has a method called makeSound(), but this method prints out the sound that a dog makes.


When we create a new Dog object, we can call the makeSound() method on it. The JavaScript interpreter will know to call the makeSound() method from the Dog class, because that is the most specific method available.

Polymorphism is a powerful feature that allows us to write more flexible and reusable code. It can also make our code more readable, because we don't have to worry about the specific type of object that we are working with.

Here are some of the types of polymorphism in JavaScript:

Compile-time polymorphism: This is the most common type of polymorphism in JavaScript. It is achieved through inheritance and method overriding.
Run-time polymorphism: This type of polymorphism is less common in JavaScript. It is achieved through the use of function overloading and function overriding



 **Q.7**  Whats Inheritance and Purpose of it?

Ans:

Inheritance is a powerful feature of object-oriented programming that allows us to create new classes that inherit the properties and methods of existing classes. This can be used to reuse code and make our code more modular and maintainable.

In JavaScript, inheritance is achieved using the extends keyword. For example, let's say we have a class called Animal and a subclass called Dog. The Animal class has a property called name and a method called makeSound(). The Dog class inherits these properties and methods from the Animal class.

We can create a new Dog object and access the name property and call the makeSound() method on it. The JavaScript interpreter will know to look for the name property and makeSound() method in the Dog class, but if they are not found, it will look for them in the Animal class.

Inheritance is a powerful tool that can be used to improve the readability, maintainability, and reusability of our code. Here are some of the benefits of using inheritance in JavaScript:


- Reusability: Inheritance allows us to reuse code that has already been written. This can save us time and effort, and it can also help to ensure that our code is consistent.
- Readability: Inheritance can make our code more readable by allowing us to group related properties and methods together. This can make it easier to understand how our code works.
- Maintainability: Inheritance can make our code more maintainable by allowing us to make changes to a parent class without affecting the subclasses that inherit from i

**Q.8** Whats Encapsulation and Purpose of it ?
Ans:
    Encapsulation is a fundamental concept in object-oriented programming (OOP) that involves bundling data and the methods that operate on that data within a single unit, known as a class. This allows us to control how the data is accessed and manipulated, which can improve the security, readability, and maintainability of our code.

In JavaScript, encapsulation is achieved using private and public keywords. Private members can only be accessed by methods within the same class, while public members can be accessed by any code that has access to the class.

For example, let's say we have a class called Person with a private property called name and a public method called getName(). The getName() method can be used to get the value of the name property, but the value of the name property cannot be directly accessed from outside the Person class.

Here are some of the benefits of using encapsulation in JavaScript:

- Security: Encapsulation can help to improve the security of our code by preventing unauthorized access to data.
- Readability: Encapsulation can make our code more readable by hiding the implementation details of our classes. This can make it easier to understand how our code works.
- Maintainability: Encapsulation can make our code more maintainable by making it easier to change the implementation of our classes without affecting the code that uses them

**Q.9** Explain Class in JavaScript?

Ans:
. A class in JavaScript is a blueprint for creating objects. It defines the properties and methods that an object will have. Classes are used to encapsulate data and behavior, which can improve the readability, maintainability, and reusability of our code.

```
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    return `Hello, my name is ${this.name}`;
  }
}

```


 **Q.10** What’s Super Keyword & What it does?

Ans:
The super keyword in JavaScript is used to access the parent class from a subclass. It can be used to access properties, methods, and constructors from the parent class.

```
class Animal {
  constructor(name) {
    this.name = name;
  }

  makeSound() {
    return `I am an animal`;
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }

  makeSound() {
    return `I am a dog and my name is ${this.name}`;
  }
}

const dog = new Dog('Spot', 'Golden Retriever');
console.log(dog.makeSound()); // I am a dog and my name is Spot

```