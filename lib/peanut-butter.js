function it(testTitle, func) {
  var stringOutput = testTitle + " " + func();
  output(stringOutput);
}

function expect(something){
  return something;
}


function output(outputText){
  document.getElementById("errorMsg").innerHTML += outputText + "<br>";
}

Object.prototype.toBeInstanceOf = function(type){
  try {
    if (this instanceof type){
      return true;
    } else {
      return false;
    }
  }
  catch(err){
    return err;
  }
};

Object.prototype.toInclude = function(element){
  try {
    if(this.includes(element)){
      return true;
    } else {
      return false;
    }
  }
  catch(err){
    return err;
  }
};

Object.prototype.toEqual = function(element){
  try {
    if(this == element){
      return true;
    } else {
      return false;
    }
  }
  catch(err){
    return err;
  }
};
