type VotationOption = {
  numberofVotes: number;
  option: string;
};

export class Votation {
  private _votationOptions: VotationOption[] = [];
  constructor(public details: string) {}

  addVotationOption(votationOption: VotationOption): void {
    this._votationOptions.push(votationOption);
  }

  vote(votationIndex: number): void {
    if (!this._votationOptions[votationIndex]) return;
    this._votationOptions[votationIndex].numberofVotes += 1;
  }
  get votationOptions(): VotationOption[] {
    return this._votationOptions;
  }
}

export class VotationApp {
  private votations: Votation[] = [];
  addVotation(votation: Votation): void {
    this.votations.push(votation);
  }
  showVotation(): void {
    for (const votation of this.votations) {
      console.log(votation.details);
      for (const votationOptions of votation.votationOptions) {
        console.log(votationOptions.option, votationOptions.numberofVotes);
      }
    }
  }
}

const votation1 = new Votation('Qual sua linguagem de programação favorita');
votation1.addVotationOption({ option: 'js', numberofVotes: 2 });
votation1.addVotationOption({ option: 'html', numberofVotes: 5 });
votation1.vote(1);
votation1.vote(2);

const votation2 = new Votation('Qual sua cor favorita');
votation2.addVotationOption({ option: 'blue', numberofVotes: 2 });
votation2.addVotationOption({ option: 'red', numberofVotes: 5 });
votation2.vote(1);
votation2.vote(2);

const appVotation = new VotationApp();
appVotation.addVotation(votation1);
appVotation.addVotation(votation2);
appVotation.showVotation();
