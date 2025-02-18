import { Portfolio } from "../../domain/model/portfolio.entity";

export class PortfolioMapper {

  static toEntity(rawPortfolio) {
    return new Portfolio({
      id: rawPortfolio.id,
      userId: rawPortfolio.userId,
      name: rawPortfolio.name,
      discountDate: rawPortfolio.discountDate,
      totalDocuments: rawPortfolio.totalDocuments,
      effectiveAnnualCostRate: rawPortfolio.effectiveAnnualCostRate,
    });
  }

  static toEntityList(rawPortfolios) {
    return rawPortfolios.map((rawPortfolio) => this.toEntity(rawPortfolio));
  }
}