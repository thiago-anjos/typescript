// Padrão de projetos:  Singleton (uma instancia de determinada classe) - GoF | Factory Method (metodo dentro da classe que cria um novo objeto) - Gof
export class Database {
  // salvar a instancia que está sendo criada no metodo estatico
  private static database: Database;

  // deixar o constructor privado
  private constructor(
    private host: string,
    private user: string,
    private password: string,
  ) {}

  connect(): void {
    console.log(`Connected: ${this.host}, ${this.user}, ${this.password}`);
  }

  // criar um metodo estatico para criar uma database
  static getDatabase(host: string, user: string, password: string): Database {
    if (Database.database) return Database.database; // se tiver Database.database ele retorna a database anterior e não cria uma nova
    Database.database = new Database(host, user, password); //senão tiver ele cria uma nova database usando o new Database passando os parametros
    return Database.database; // depois que cria, retorna
  }
}

const db1 = Database.getDatabase('localhost', 'root', '123456');
db1.connect();

const db2 = Database.getDatabase('localhost', 'root', '123456');
db2.connect();

// as duas instancias não são iguais, no caso como é uma conexão ao bando de dados, é interessante que seja reutilizada uma conexão previa criada
// retornar uma instancia caso outra ja tenha sido criada ou criar caso ninguem a tenha criado antes.
console.log(db1 === db2);
