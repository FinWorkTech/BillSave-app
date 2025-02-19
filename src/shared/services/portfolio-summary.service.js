import http from "@shared/services/http-common.js";

export async function fetchPortfolioSummary(userId) {
  const response = await http.get(`/portfolios/summary?userId=${userId}`);
  return response.data;
}