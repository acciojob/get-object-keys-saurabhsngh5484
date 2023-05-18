//your JS code here. If required.
const student = {
  name: 'John Doe',
};

// Add getKeys() method to Object prototype
Object.prototype.getKeys = function () {
  return Object.keys(this);
};