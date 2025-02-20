import { Document } from '../../domain/model/document.entity.js';

export class DocumentMapper {

  static toEntity(rawPortfolio) {
    return new Document({
      id: rawPortfolio.id,
      portfolioId: rawPortfolio.portfolioId,
      code: rawPortfolio.code,
      issueDate: rawPortfolio.issueDate,
      dueDate: rawPortfolio.dueDate,
      rateType: rawPortfolio.rateType,
      rateValue: rawPortfolio.rateValue,
      currency: rawPortfolio.currency,
      nominalAmount: rawPortfolio.nominalAmount,
    });
  }

  static toEntityList(rawDocuments) {
    return rawDocuments.map((rawDocument) => this.toEntity(rawDocument));
  }

  static toRaw(document) {
    return {
      code: document.code,
      issueDate: document.issueDate,
      dueDate: document.dueDate,
      rateType: document.rateType,
      rateValue: document.rateValue,
      currency: document.currency,
      nominalAmount: document.nominalAmount,
      portfolioId: document.portfolioId,
    };
  }
}