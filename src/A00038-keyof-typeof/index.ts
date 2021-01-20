type ColorsObj = typeof colorsObj;
type ColorsKeys = keyof ColorsObj;

const colorsObj = {
  vermelho: 'red',
  verde: 'green',
  azul: 'blue',
};

function colorTradutor(color: ColorsKeys, colors: ColorsObj) {
  return colors[color];
}

console.log(colorTradutor('vermelho', colorsObj));
