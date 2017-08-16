var note1 = new Note("hello");
// var noteManager = new noteManager();
var array = ["note1", "note2"]

expect(array).toInclude("note1");

it('creates a note', function(){
  return expect(note1).toBeInstanceOf(Note);
});

it('checks equality', function(){
  return expect(note1._content).toEqual("hello");
});
