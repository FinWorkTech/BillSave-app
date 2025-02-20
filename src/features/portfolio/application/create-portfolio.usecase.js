import { PortfolioService } from "../infrastructure/services/portfolio.service";

export async function createPortfolioUseCase(portfolioData) {
  try {

    const portfolioService = new PortfolioService();

    const portfolio = await portfolioService.createPortfolio(portfolioData);

    return portfolio;
  }
  catch(error) {
    throw error;
  }
}