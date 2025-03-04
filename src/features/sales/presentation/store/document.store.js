import { defineStore } from "pinia";
import { SalesUseCases } from "../../application/sales.usecases";

const salesUseCases = new SalesUseCases();

export const useDocumentStore = defineStore("document", {

  state: () => ({
    documents: {},
  }),

  actions: {
    async fetchDocumentById(documentId) {
      
      if (this.documents[documentId]) {
        return this.documents[documentId];
      } 

      const documentFound = await salesUseCases.fetchDocumentById(documentId);
      this.documents[documentId] = documentFound;

      return documentFound;
    },
    
    updateDocumentById(documentId, document) {
      this.documents[documentId] = document;
    }
  },

  getters: {
    getDocumentById: (state) => (documentId) => {
      return state.documents[documentId] || null; 
    },
  }
});