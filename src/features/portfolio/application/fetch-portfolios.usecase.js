import { PortfolioService } from "../infrastructure/services/portfolio.service";

export async function fetchPortfoliosUseCase(userId) {
  try {

    const portfolioService = new PortfolioService();

    const portfolios = await portfolioService.fetchPortfolios(userId);

    return portfolios;
  }
  catch(error) {
    throw error;
  }
}