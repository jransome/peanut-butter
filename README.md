# Peanut Butter

A tasty JS testing framework which can test for the following assertions:

* that two objects are equal
* that a given array includes something
* that a given object is a type of something

To run tests open PeanutRunner in a web browser.

## Example tests
The following is also included in src/greeter-spec.js

```
var name = "James";
var expectedGreeting = "Hello, James!";
var smallTalk = "so..."

describe("Greeter", function(){
  it("returns a string", function(){
    return expect(Greeter(name)).toBeInstanceOf(String);
  });

  it("greets someone by name", function(){
    return expect(Greeter(name)).toEqual(expectedGreeting);
  });

  it("can make small talk", function(){
    return expect(Greeter(name)).toInclude(smallTalk);
  });
});

```

#### Doubles

Example usage:
```
var greeterDouble = new Double(['greet', 'doSmallTalk']); // creates a double with two mock functions that return undefined by default.

greeterDouble.stubFunctionAndReturn('greet', "hello!"); // stubs the greet function with a return value of "hello!".

greeterDouble.greetCallCount // returns the number of times 'greet' has been called.
```

## Contributors

* Antoine Doolaeghe
* Ben Hughes
* Funmi Adewodu
* James Ransome

This testing framework was originally developed in under a week as part of another project during the Makers Academy course.
