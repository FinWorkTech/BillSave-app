import { DocumentService } from "../infrastructure/services/document.service";

export async function updateDocumentUseCase(document) {
  const documentService = new DocumentService();

  try {
    const response = await documentService.updateDocument(document);
    return response;

  } catch (error) {
    
    console.error(error);
    throw new Error("Error updating document");
  }
}