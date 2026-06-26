// Constructor function
function Pet(name, type, age, owner) {
  this.name = name;
  this.type = type;
  this.age = age;
  this.owner = owner;
  this.id = Symbol("petID");
}

// Methods
Pet.prototype.getDescription = function() {
  return `${this.name} is a ${this.type} and is ${this.age} years old`;
};

Pet.prototype.haveBirthday = function() {
  this.age += 1;
};

Pet.prototype.getOwnerName = function() {
  return this.owner?.name ?? "none";
};

Pet.prototype.getID = function() {
  return this.id;
};

// 3 epts
const pet1 = new Pet("Stanley", "cat", 6, { name: "Alice" });
const pet2 = new Pet("Rex", "dog", 3);
const pet3 = new Pet("Mango", "falcon", 2, { name: "Carlos" });

const pets = [pet1, pet2, pet3];

pets.forEach(pet => {
  console.log("--- Pet Card ---");
  console.log("Name:", pet.name);
  console.log("Type:", pet.type);
  console.log("Age:", pet.age);
  console.log("Owner:", pet.getOwnerName());
  console.log("Description:", pet.getDescription());
});

console.log("\n--- Happy Birthday Rex! ---");
pet2.haveBirthday();
console.log("Name:", pet2.name);
console.log("Updated Age:", pet2.age);

// Display current date andtime
console.log("\nCurrent Date and Time:", new Date());

// Reflection
// 1. What does this refer to in your constructor and methods?
//    it refers to pet object that is going to gwt created or
//    calling the method. Constructor, sets properties on the
//    new object.Methods, it accesses that same object's properties.

// 2. What does optional chaining do in your code?
//    It lets you safely access this.owner?.name
//    without crashing if the owner is undefined. 

// 3. Why might the Date object be useful in a JS program?
//    Tracks what happens