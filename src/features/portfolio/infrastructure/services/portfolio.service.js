import http from "@shared/services/http-common.js";
import { IPortfolioService } from "../../domain/services/portfolio.service.interface";
import { PortfolioMapper } from "../mappers/portfolio.mapper";

export class PortfolioService extends IPortfolioService {

  resourceEndpoint = '/portfolios';

  async fetchPortfolios(userId) {
    const response = await http.get(`${this.resourceEndpoint}?userId=${userId}`);
    
    return PortfolioMapper.toEntityList(response.data);
  }

  async fetchPortfolioByName(name) {
    const response = await http.get(`${this.resourceEndpoint}/${name}`);
    
    return PortfolioMapper.toEntity(response.data);
  }

  async createPortfolio(portfolio) {
    const response = await http.post(this.resourceEndpoint, PortfolioMapper.toRaw(portfolio));
    
    return PortfolioMapper.toEntity(response.data);
  }

  async deletePortfolio(portfolioId) {
    return await http.delete(`${this.resourceEndpoint}/${portfolioId}`);
  }

  async updatePortfolio(portfolio) {

    return await http.put(`${this.resourceEndpoint}/${portfolio.id}`, PortfolioMapper.toRaw(portfolio));
  }
}