// const person = {
//   keyFunction() {},

//   draw: function () {
//     console.log("draw");
//   },
// };

// person.name = "meer";
// person.age = 20;

// delete person.age;

//  delete person.draw;

// console.log(person);

// console.log(person.name);
// console.log(person["age"]);

// const circle = {
//   radius: 1,
//   location: {
//     lan: 125,
//     at: 1.25,
//   },
//   draw() {
//     console.log("draw function");
//   },
//   //  draw:function(){
//   //   console.log('draw function');
//   //  }
// };

// console.log(circle['radius']);
// console.log(circle.location['at']);
// console.log(circle.location.at);
// console.log(circle.draw());

// Factory Function
function createCircle(radius, location) {
  return {
    radius: radius,
    location: location,
    // ******* short hand
    // radius,
    // location,
    draw() {
      console.log("draw function");
    },
  };
}

const newCircle = createCircle(5, { name: "meer ", age: 20, job: "develop" });

console.log(newCircle.radius);

console.log(newCircle.location);
function name(name) {
  console.log(name);
}

// Constrator Function

function CreateCircle(radius, location) {
  this.radius = radius;
  this.location = location;
}
CreateCircle.prototype.draw = function () {
  console.log(this.radius);
};

const newConFunc = new CreateCircle("meer", 20);
