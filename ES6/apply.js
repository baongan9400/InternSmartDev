//apply() with arguments
function sum (){
	var res = 0;
	for (var i = 0; i< arguments.length; i++)
		res+= arguments[i];
	return res;
}

function average(){
	const x = sum.apply(null, arguments);
	return x/ arguments.length;
}

console.log(average(1,3,5,7,9,11));

//apply() with object method
var dog = {
  description: function(food, drink) {
    return this.name + " is " + this.color + ".He likes " + food + " and " + drink;
  }
}
var mydog = {
  name:"Kiss",
  color: "black"
}
var des1 = dog.description.call(mydog, "bread", "coca");
var des2 = dog.description.apply(mydog, ["bread", "coca"]);
console.log(des1);
console.log(des2);