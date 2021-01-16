export class Company {
  constructor(name: string, cnpj: string) {
    this.name = name;
    this.cnpj = cnpj;
  }
  public readonly name: string; // public não necessário
  private readonly employess: EmployessType[] = [];
  protected readonly cnpj: string;
  readonly servicesProvider: ServicesProviderType[] = [];

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
}

export class EmployessType {
  constructor(
    public readonly name: string,
    public readonly middleName: string,
  ) {}
}

export class ServicesProviderType {
  constructor(readonly name: string, readonly document: string) {}
}

const compayOne = new Company('Udemy', '787897897987/00011');
const employes = new EmployessType('Thiago', 'dos anjos');
const employes2 = new EmployessType('Luiz', 'Otávio Miranda');
const servicesProvider = new ServicesProviderType(
  'Resource',
  '212154654656/0001',
);
// add
compayOne.addEmploye(employes);
compayOne.addEmploye(employes2);
compayOne.addServicesProvider(servicesProvider);
compayOne.showEmployess();
