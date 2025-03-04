import { PortfolioService } from "../infrastructure/services/portfolio.service";

export async function fetchPortfolioByNameUseCase(portfolioName) {
  try {

    const portfolioService = new PortfolioService();

    const portfolios = await portfolioService.fetchPortfolioByName(portfolioName);

    return portfolios;

  } catch(err) {
    throw err;
  }
}