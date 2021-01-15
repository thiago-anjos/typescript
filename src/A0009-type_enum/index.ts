// estrutura de dados não ordernada que a gente utiliza quando a gente tem mais de uma opção para alguma coisa
enum Colors {
  RED, //0
  BLUE, // 1
  YELLOW, // 2
  PURPLE = 'ROXO', // ENUM DE STRING
  GREEN = 4,
  PINK,
}

enum Colors {
  GRAY = 6,
}

//console.log(Colors);
console.log(Colors.PURPLE); // ele vem o código da cor amarela
console.log(Colors[4]);
