import { PortfolioService } from '../infrastructure/services/portfolio.service.js';

export class PortfolioUseCases {

  constructor() {
    this.portfolioService = new PortfolioService();
  }

  async createPortfolio(portfolioData) {
    try {
      const portfolio = await this.portfolioService.createPortfolio(portfolioData);
      return portfolio;
    }
    catch (error) {
      throw error;
    }
  }

  async updatePortfolio(portfolioData) {
    try {
      return await this.portfolioService.updatePortfolio(portfolioData);
    }
    catch (error) {
      throw error;
    }
  }

  async deletePortfolio(portfolioId) {
    try
    {
      return await this.portfolioService.deletePortfolio(portfolioId);
    }
    catch (error) {
      throw error;
    }
  }

  async fetchPortfoliosByUserId(userId) {
    try {
      const portfolios = await this.portfolioService.fetchPortfoliosByUserId(userId);
      return portfolios;
    }
    catch (error) {
      throw error;
    } 
  }

  async fetchPortfolioByName(portfolioName) { 
    try {
      const portfolio = await this.portfolioService.fetchPortfolioByName(portfolioName);
      return portfolio;
    }
    catch (error) {
      throw error;
    }
  }
}