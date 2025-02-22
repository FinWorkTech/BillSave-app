import { DocumentService } from '../infrastructure/services/document.service.js';

export async function fetchDocumentUseCase(documentId) {
  const documentService = new DocumentService();

  try {
    const response = await documentService.fetchDocument(documentId);
    return response;
  }
  catch (error) {
    console.error(error);
    throw new Error('Error fetching document');
  }  
}
