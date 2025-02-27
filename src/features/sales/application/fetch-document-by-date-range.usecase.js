import { DocumentService } from '../infrastructure/services/document.service.js';

export async function fetchDocumentByDateRangeUseCase(startDate, endDate) {

  const documentService = new DocumentService();

  try {
    const response = await documentService.fetchDocumentByDateRange(startDate, endDate);
    return response;
  }
  catch (error) {
    console.error(error);
    throw new Error('Error fetching document');
  }
};