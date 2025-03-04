
export class IDocumentService {

  async fetchDocumentById(documentId) {
    throw new Error("Method 'fetchDocumentById' must be implemented");
  }

  async fetchDocumentsByPortfolioId(portfolioId) {
    throw new Error("Method 'fetchDocumentsByPortfolioId' must be implemented");
  }

  async fetchDocumentByDateRange(startDate, endDate) {
    throw new Error("Method 'fetchDocumentByDateRange' must be implemented");
  }

  async fetchDocumentsByPortfolioIdAndDateRange(portfolioId, startDate, endDate) {
    throw new Error("Method 'fetchDocumentByPortfolioIdAndDateRange' must be implemented");
  }

  async createDocument(document) {
    throw new Error("Method 'createDocument' must be implemented");
  }

  async deleteDocument(documentId, portfolioId) {    
    throw new Error("Method 'deleteDocument' must be implemented");
  }

  async updateDocument(document) {
    throw new Error("Method 'updateDocument' must be implemented");
  }
}