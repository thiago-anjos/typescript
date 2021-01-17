// private só pode ser acessado na classe que foi criado
// protect só pode ser acessado na classe que foi criado e nas subclasses

export class Company {
  constructor(name: string, cnpj: string) {
    this.name = name;
    this.cnpj = cnpj;
  }
  private readonly name: string;
  // alterei de private para protect para a sub class de Udemy poder acessar e fazer um pop
  protected readonly employess: EmployessType[] = [];
  private readonly cnpj: string;
  private readonly servicesProvider: ServicesProviderType[] = [];

  addEmploye(employe: EmployessType): void {
    this.employess.push(employe);
  }
  addServicesProvider(serviceProvider: ServicesProviderType): void {
    this.servicesProvider.push(serviceProvider);
  }
  showEmployess(): Array<string> {
    const employeArray = [];
    for (const employe of this.employess) {
      employeArray.push(`${employe.name} ${employe.middleName}`);
    }
    console.log(employeArray);
    return employeArray;
  }
  getCompanyData(): Record<string, string> {
    const data = {
      nomeEmpresa: this.name,
      cnpj: this.cnpj,
    };
    console.log(data);
    return data;
  }
}

export class EmployessType {
  constructor(readonly name: string, readonly middleName: string) {}
}

export class ServicesProviderType {
  constructor(readonly name: string, readonly document: string) {}
}

//protected
export class Udemy extends Company {
  constructor() {
    super('Udemy', '787897897987/00011');
  }
  //pop, remove employess
  popEmployess(): EmployessType | null {
    const colaborador = this.employess.pop();
    if (colaborador) return colaborador;
    return null;
  }
}

const compayOne = new Udemy();
const employes = new EmployessType('Thiago', 'dos anjos');
const employes2 = new EmployessType('Luiz', 'Otávio Miranda');
const servicesProvider = new ServicesProviderType('Resource', '78/0001');
// add
compayOne.addEmploye(employes);
compayOne.addEmploye(employes2);
compayOne.addServicesProvider(servicesProvider);
// compayOne.showEmployess();
//compayOne.getCompanyData();
compayOne.showEmployess();
const employeRemoved = compayOne.popEmployess();
compayOne.showEmployess();
console.log('colaborador removido', employeRemoved);
