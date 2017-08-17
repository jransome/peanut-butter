it('test', function(){
  return expect("hello").toBeInstanceOf(Number);
});

it('Checks an item is included in an array', function() {
  var numArray = [1, 2, 3, 4, 5];
  return expect(numArray).toInclude(13);
});

it('Checks an item is included in an array', function() {
  var numArray = [1, 2, 3, 4, 5];
  return expect(numArray).toInclude(1);
});

it('Checks for equality between two items', function() {
  return expect("This is a string").toEqual("This is another string");
});

it('Checks for equality between two items', function() {
  var i = new Thing();
  return expect("This is a string").toEqual("This is another string");
});
