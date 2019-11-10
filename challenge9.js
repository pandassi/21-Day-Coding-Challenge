const carPassing = (cars, speed) => {

let updatedCars = cars;

updatedCars.push (
  {
    time: Date.now(),
    speed: speed,
  }
  
  );
  
  return updatedCars;

};
