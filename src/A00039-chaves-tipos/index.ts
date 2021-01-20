type Vehicle = {
  model: string;
  year: string;
};

// espelhando o objeto
type Car = {
  brand: Vehicle['model'];
  year: Vehicle['year'];
  name: string;
};

const car: Car = {
  brand: 'ford',
  year: '2020',
  name: 'Fiesta',
};

console.log(car);
