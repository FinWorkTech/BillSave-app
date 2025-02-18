import http from "@shared/services/http-common.js";
import { IPortfolioService } from "../../domain/services/portfolio.service.interface";
import { PortfolioMapper } from "../mappers/portfolio.mapper";

export class PortfolioService extends IPortfolioService {

  resourceEndpoint = '/portfolios';

  async fetchPortfolios(userId) {
    const response = await http.get(`${this.resourceEndpoint}?userId=${userId}`);
    
    return PortfolioMapper.toEntityList(response.data);
  }
}