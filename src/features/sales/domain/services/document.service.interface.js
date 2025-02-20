
export class IDocumentService {

  async fetchDocuments(portfolioId) {
    throw new Error("Method 'fetchDocuments' must be implemented");
  }

  async createDocument(document) {
    throw new Error("Method 'createDocument' must be implemented");
  }

  async deleteDocument(documentId, portfolioId) {    
    throw new Error("Method 'deleteDocument' must be implemented");
  }
}