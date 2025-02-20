import { DocumentService } from "../infrastructure/services/document.service";

export async function createDocumentUseCase(document) {
  try {

    const documentService = new DocumentService();

    const document = await documentService.createDocument(document);

    return document;
  }
  catch(error) {
    throw error;
  }
}