
export class Document {

  constructor({id=-1, portfolioId=-1, code='', issueDate='', dueDate='', rateType='', rateValue=-1, currency='', nominalAmount=-1}) {
    this.id = id;
    this.portfolioId = portfolioId;
    this.code = code;
    this.issueDate = issueDate;
    this.dueDate = dueDate;
    this.rateType = rateType;
    this.rateValue = rateValue;
    this.currency = currency;
    this.nominalAmount = nominalAmount;
  }
}