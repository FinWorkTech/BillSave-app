import { DocumentService } from "../infrastructure/services/document.service";

export async function createDocumentUseCase(document) {
  try {

    const documentService = new DocumentService();

    const createdDocument = await documentService.createDocument(document);

    return createdDocument;
  }
  catch(error) {
    throw error;
  }
}