// Code your solution in this file
function findMatching(drivers, name) {
  return drivers.filter(function (look) { return look.toLowerCase() === name.toLowerCase() })
}


function fuzzyMatch(drivers, letters) {
  let count = letters.length
  return drivers.filter(function (look) { return look.slice(0, count) === letters})
}


function matchName (drivers, name) {
  return drivers.filter(function (look) {
    return look.name.toLowerCase() === name.toLowerCase();
  });
}
