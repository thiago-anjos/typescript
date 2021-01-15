// tuple é do typescript
const clientData: [number, string] = [1, 'thiago'];
const clientData1: [number, string, ...string[]] = [
  1,
  'thiago',
  'luiz',
  'miguel',
  'alberto',
];

clientData[0] = 36;
console.log(clientData, clientData1);
