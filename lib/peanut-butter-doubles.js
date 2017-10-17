(function(exports){
  function Double(mockFunctions) {
    self = this;
    if (mockFunctions !== undefined){
      mockFunctions.forEach(function(mockFunction) {
        self[mockFunction + "CallCount"] = 0;
        self[mockFunction + "Arguments"] = null;
        self.stubFunctionAndReturn(mockFunction, undefined);
      });
    }
  }

  Double.prototype = {
    stubFunctionAndReturn: function(functionName, returnValue) {
      this[functionName] = function() {
        this[functionName + "CallCount"]++;
        this[functionName + "Arguments"] = arguments;
        return returnValue;
      }
    }
  }

  exports.Double = Double;
})(this);
