import { DocumentService } from '../infrastructure/services/document.service';

export async function fetchDocumentsUseCase(portfolioId) {
  try {

    const documentService = new DocumentService();

    const documents = await documentService.fetchDocuments(portfolioId);

    return documents;
  }
  catch(error) {
    throw error;
  }
}