function() {
  var customDimensionIndex = 3;
  return function(model) {
    model.set('dimension' + customDimensionIndex, model.get('clientId'));
  }
}