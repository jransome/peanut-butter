it('test', function(){
  return expect("hello").toBeInstanceOf(Number);
});

it('checks equality', function(){
  return expect(note1._content).toEqual("hello");
});
