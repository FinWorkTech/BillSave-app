
export class IDocumentService {

  async fetchDocuments(portfolioId) {
    throw new Error("Method 'fetchDocuments' must be implemented");
  }

  async fetchDocument(documentId) {
    throw new Error("Method 'fetchDocument' must be implemented");
  }

  async fetchDocumentByDateRange(startDate, endDate) {
    throw new Error("Method 'fetchDocumentByDateRange' must be implemented");
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