(function(exports){
  function Double(mockFunctions) {
    self = this;
    if (mockFunctions !== undefined){
      mockFunctions.forEach(function(mockFunction) {
        self[mockFunction + "CallCount"] = 0;
        self.stubFunctionAndReturn(mockFunction, undefined);
      });
    }
  }

  Double.prototype = {
    stubFunctionAndReturn: function(functionName, returnValue) {
      this[functionName] = function() {
        this[functionName + "CallCount"]++;
        return returnValue;
      }
    }
  }

  exports.Double = Double;
})(this);
