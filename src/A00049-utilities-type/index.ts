// tipo Record
const objeto1: Record<string, string | number> = {
  name: 'thiago',
  middleName: 'dos anjos',
  age: 34,
};
console.log(objeto1);

type PessoaProtocol = {
  name?: string;
  middleName?: string;
  age?: number;
};

//funciona porque tudo no objeto protocol é opctional
export const person: PessoaProtocol = {
  name: 'thiago',
  middleName: 'dos anjos',
};

//usando o utility type required
type PessoaRequired = Required<PessoaProtocol>;

//aqui ele vai reclamar do age, porque o type required torna tudo obrigatorio
export const person: PessoaRequired = {
  name: 'thiago',
  middleName: 'dos anjos',
};

//partial faz ao contrario
type PessoaPartial = Partial<PessoaRequired>;
//aqui ele vai funcionar, mesmo o age faltando
export const personPartial: PessoaPartial = {
  name: 'thiago',
  middleName: 'dos anjos',
};

//readonly
type PessoaReadonly = Readonly<PessoaPartial>;

//pick, escolha coisas dentro do objeto que desejo usar
type PessoaPick = Pick<PessoaReadonly, 'name' | 'age'>;

export const personPick: PessoaPick = {
  name: 'thiago',
  age: 34,
};

//extract e exclude
type ABC = 'A' | 'B' | 'C';
type CDE = 'C' | 'D' | 'E';
type TipoExclude = Exclude<ABC, CDE>; // computa todos os tipos que estão em ABC que não estão em CDE
type TipoExtract = Extract<ABC, CDE>; // computa todos os tipos que estão em ABC que podem ser atribuidos aos tipos de CDE (existe nos dois)

// exemplo
type AccountMongo = { _id: string; name: string; age: number };

type AccountAPi = Pick<AccountMongo, Exclude<keyof AccountMongo, '_id'>> & {
  id: string;
};

const accountMongo: AccountMongo = {
  _id: '7987987987',
  age: 34,
  name: 'thiago',
};

function mapAccount(accountMongo: AccountMongo): AccountAPi {
  const { _id, ...accountData } = accountMongo;
  return { ...accountData, id: _id };
}

const accountAPi = mapAccount(accountMongo);
console.log(accountAPi);
