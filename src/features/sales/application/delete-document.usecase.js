import { DocumentService } from "../infrastructure/services/document.service";

export async function deleteDocumentUseCase(documentId, portfolioId) {
  const documentService = new DocumentService();
  return await documentService.deleteDocument(documentId, portfolioId);
}