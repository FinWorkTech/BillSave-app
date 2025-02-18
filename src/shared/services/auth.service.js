import { useAuthenticationStore } from '@features/iam/presentation/stores/authentication.store.js';

export class AuthService {
  
  static getUserId() {
    const store = useAuthenticationStore();    
    return store.currentUserId;
  }

  static getUsername() {
    const store = useAuthenticationStore();
    return store.currentUsername;
  }

  static signOut(router) {
    const store = useAuthenticationStore();
    store.signOut(router) 
  }
}