import { DocumentService } from '../infrastructure/services/document.service.js';

export class SalesUseCases {
  
  constructor() {
    this.documentService = new DocumentService();
  }

  async createDocument(document) {
    try {
      const response = await this.documentService.createDocument(document);
      return response;
    }
    catch(error) {
      throw error;
    }
  }

  async updateDocument(document) {
    try {
      const response = await this.documentService.updateDocument(document);
      return response;
    }
    catch(error) {
      throw error;
    }
  }

  async fetchDocumentById(documentId) {
    try {
      const document = await this.documentService.fetchDocumentById(documentId);
      return document;
    }
    catch(error) {
      throw error;
    }
  }

  async fetchDocumentsByPortfolioId(portfolioId) {
    try {
      const documents = await this.documentService.fetchDocumentsByPortfolioId(portfolioId);
      return documents;
    }
    catch(error) {
      throw error;
    }
  }

  async fetchDocumentsByPortfolioIdAndDateRange(portfolioId, startDate, endDate) {
    try {
      const documents = await this.documentService.fetchDocumentsByPortfolioIdAndDateRange(portfolioId, startDate, endDate);
      return documents;
    }
    catch(error) {
      throw error;
    }
  }

  async deleteDocument(documentId, portfolioId) {
    try {
      const response = await this.documentService.deleteDocument(documentId, portfolioId);
      return response;
    }
    catch(error) {
      throw error;
    }
  }
}