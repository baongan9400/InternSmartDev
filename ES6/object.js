var mydog = {
  name:"Kiss",
  color: "black",
  speak: function(){
  	console.log(`${this.name} parks gowgow`);
  }
};
mydog.speak();

//es6
var mydog2 = {
  name:"Kiss",
  color: "black",
  speak(){
  	console.log(`${this.name} parks gowgow`);
  }
};
mydog2.name = "Tyty";
mydog2.speak();