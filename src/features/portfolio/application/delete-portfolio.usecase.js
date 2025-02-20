import { PortfolioService } from "../infrastructure/services/portfolio.service";

export async function deletePortfolioUseCase(userId){
  
  try {
    const portfolioService = new PortfolioService();
    await portfolioService.deletePortfolio(userId);
  }
  catch(error) {
    throw error;
  } 
}