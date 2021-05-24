var add = (function () {
  var counter = 0;
  console.log(counter)
  return function () {counter += 1; return counter;}//inner function
})();
console.log("lan1")
console.log(add())//counter dc luu vao closure = 1
console.log("lan2")
console.log(add())//goi inner function, counter = 1 +1

function makeAdder(x) {
  return function(y) {
    return x + y;
  };
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);

console.log(add5(2));  // 7
console.log(add10(2)); // 12