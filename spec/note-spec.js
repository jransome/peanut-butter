it('test', function(){
  return expect("hello").toBeInstanceOf(Number);
});
//
it('checks equality', function(){
  return expect(note1._content).toEqual("hello");
});

it('Checks an item is included in an array', function() {
  var numArray = [1, 2, 3, 4, 5];
  return expect(numArray).toInclude(13);
});

it('Checks an item is included in an array', function() {
  var numArray = [1, 2, 3, 4, 5];
  return expect(numArray).toInclude(1);
});
