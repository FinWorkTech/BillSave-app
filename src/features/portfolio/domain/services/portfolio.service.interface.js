
export class IPortfolioService {

  fetchPortfolios(userId) {
    throw new Error("Method 'fetchPortfolios' must be implemented.");
  }

  fetchPortfolioByName(name) {
    throw new Error("Method 'fetchPortfoliosByName' must be implemented.");
  }

  createPortfolio(portfolio) {
    throw new Error("Method 'createPortfolio' must be implemented.");
  }

  deletePortfolio(portfolioId) {
    throw new Error("Method 'deletePortfolio' must be implemented.");
  }

  updatePortfolio(portfolio) {
    throw new Error("Method 'updatePortfolio' must be implemented.");
  }
}