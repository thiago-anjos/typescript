export class Company {
  constructor(name: string, cnpj: string) {
    this.name = name;
    this.cnpj = cnpj;
  }
  private readonly name: string;
  private readonly employess: EmployessType[] = [];
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

const compayOne = new Company('Udemy', '787897897987/00011');
const employes = new EmployessType('Thiago', 'dos anjos');
const employes2 = new EmployessType('Luiz', 'Otávio Miranda');
const servicesProvider = new ServicesProviderType('Resource', '78/0001');
// add
compayOne.addEmploye(employes);
compayOne.addEmploye(employes2);
compayOne.addServicesProvider(servicesProvider);
// compayOne.showEmployess();
compayOne.getCompanyData();
