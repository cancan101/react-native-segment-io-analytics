'use strict'

module.exports = toHashOfStrings;

function toHashOfStrings (obj) {
  var out = {};
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      out[key] = obj[key].toString();
    }
  }
  return out;
}
