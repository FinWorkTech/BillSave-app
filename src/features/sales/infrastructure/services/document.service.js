import http from '@shared/services/http-common.js';
import { IDocumentService } from '@features/sales/domain/services/document.service.interface.js';
import { DocumentMapper } from '../mappers/document.mapper.js';

export class DocumentService extends IDocumentService {

  resourceEndpoint = '/documents';

  async fetchDocuments(portfolioId) {
    const response = await http.get(`${this.resourceEndpoint}?portfolioId=${portfolioId}`);
    return DocumentMapper.toEntityList(response.data);
  }

  async fetchDocument(documentId) {
    const response = await http.get(`${this.resourceEndpoint}/${documentId}`);
    return DocumentMapper.toEntity(response.data);
  }

  async fetchDocumentByDateRange(startDate, endDate) {
    const response = await http.get(`${this.resourceEndpoint}/daterange?startDate=${startDate}&endDate=${endDate}`);

    return DocumentMapper.toEntityList(response.data);
  }

  async createDocument(document) {
    const response = await http.post(this.resourceEndpoint, DocumentMapper.toRaw(document));
    return response;
  }

  async deleteDocument(documentId, portfolioId) {    
    const response = await http.delete(`${this.resourceEndpoint}/${documentId}?portfolioId=${portfolioId}`);
    return response;
  }

  async updateDocument(document) {
    const response = await http.put(`${this.resourceEndpoint}/${document.id}`, DocumentMapper.toRaw(document));
    return response;
  }
}