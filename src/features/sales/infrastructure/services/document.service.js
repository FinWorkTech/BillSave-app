import http from '@shared/services/http-common.js';
import { IDocumentService } from '@features/sales/domain/services/document.service.interface.js';
import { DocumentMapper } from '../mappers/document.mapper.js';

export class DocumentService extends IDocumentService {

  resourceEndpoint = '/documents';

  async fetchDocuments(portfolioId) {
    const response = await http.get(`${this.resourceEndpoint}?portfolioId=${portfolioId}`);
    console.log("Portfolio with ", portfolioId, " documents: ", response.data)
    return DocumentMapper.toEntityList(response.data);
  }

  async createDocument(document) {
    const response = await http.post(this.resourceEndpoint, DocumentMapper.toRaw(document));
    console.log("Document created: ", response.data)
    return response;
  }
}