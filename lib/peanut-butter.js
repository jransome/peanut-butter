function describe(description, func) {
  var descriptionOutput = "<h2>" + description + "</h2>";
  output(descriptionOutput);
  func();
}

function it(testTitle, func) {
  var stylePass = "<div id=passing-assertion>";
  var styleFail = "<div id=failing-assertion>";
  var stringOutput = "<b>" + testTitle + "</b><br>";

  try {
    var result = func();
    if(result === true){
      stringOutput = stylePass + stringOutput + "</div>";
    } else {
      stringOutput = styleFail + stringOutput + result + "</div>";
    }
  } catch (err) { // catch errors thrown from outside the expectation
    stringOutput = styleFail + stringOutput + "<i>" + err + "</i><br>" + err.stack + "</div>";
  }

  output(stringOutput);
}

function expect(something){
  if (something === undefined) {
    var e = new Error("<i>Expectation returns undefined</i><br>");
    throw (e.stack);
  }
  return new TestObject(something);
}

function output(outputText){
  document.getElementById("errorMsg").innerHTML += outputText;
}

function TestObject(obj){
  this.obj = obj;
}

TestObject.prototype = {
  toBeInstanceOf: function(type){
    try {
      if (this.obj instanceof type){
        return true;
      } else {
        var e = new Error("<i>" + this.constructor.name + " is not an instance of " + type.name + "</i><br>");
        throw (e.stack);
      }
    }
    catch(err){
      return err;
    }
  },

  toInclude: function(element){
    try {
      if(this.obj.includes(element)){
        return true;
      } else {
        var e = new Error("<i>" + element + " is not included in " + this.constructor.name + "</i><br>");
        throw (e.stack);
      }
    }
    catch(err){
      return err;
    }
  },

  toEqual: function(element){
    try {
      if(this.obj.valueOf() === element){
        return true;
      } else {
        var e = new Error("<i> [ " + this.valueOf() + " ] is not equal to [ " + element.valueOf() + " ]</i><br>");
        throw (e.stack);
      }
    }
    catch(err){
      return err;
    }
  },
}
