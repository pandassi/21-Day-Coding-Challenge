// Use the value below whenever you need the value of Pi

const PI = 3.14159;

const sphereVolume = function(radius) {
  return (4 / 3) * PI * radius * radius * radius;
  //Or: return (4 / 3) * PI * Math.pow(radius, 3); (Math.pow = exposant)
};

const coneVolume = function(radius, height) {
  return PI * radius * radius * (height / 3);
  //return PI * Math.pow(radius, 2) * (height / 3);
};

const prismVolume = function(height, width, depth) {
  return height * width * depth;
};

const totalVolume = function(solids) {
  let totalVolume = 0;
  //For each one of them calculate the volume of that solid & add it to the total
  for (const solid of solids) {
    // dot notation type of something
    if (solid.type === "sphere") {
      totalVolume += sphereVolume(solid.radius);
    } else if (solid.type === "cone") {
      totalVolume += coneVolume(solid.radius, solid.height);
    } else if (solid.type === "prism") {
      totalVolume += prismVolume(solid.height, solid.width, solid.depth);
    }
  }
  return totalVolume;
};
