export class Portfolio {

  constructor({id=-1, userId=-1, name='', discountDate='', totalDocuments=0, effectiveAnnualCostRate=0}) {
    this.id = id;
    this.userId = userId;
    this.name = name;
    this.discountDate = discountDate;
    this.totalDocuments = totalDocuments;
    this.effectiveAnnualCostRate = effectiveAnnualCostRate;
  }
}