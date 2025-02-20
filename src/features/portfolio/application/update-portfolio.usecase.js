import { PortfolioService } from "../infrastructure/services/portfolio.service";

export async function updatePortfolioUseCase(portfolio) {
  
  try {
    const portfolioService = new PortfolioService();
    await portfolioService.updatePortfolio(portfolio);
  }
  catch(error) {
    throw error;
  }
} 