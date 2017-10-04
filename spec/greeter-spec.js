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
