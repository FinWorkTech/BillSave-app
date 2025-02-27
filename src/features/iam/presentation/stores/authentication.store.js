import { defineStore } from "pinia";
import { signInUseCase } from "../../application/sign-in.usecase.js";
import { signUpUseCase } from "../../application/sign-up.usecase.js";

const AUTH_STORAGE_KEY = "authData";

export const useAuthenticationStore = defineStore("authentication", {
  
  state: () => {
    const authData = JSON.parse(localStorage.getItem(AUTH_STORAGE_KEY)) || {};

    return {
      signedIn: authData.signedIn || false,
      userId: authData.userId || null,
      username: authData.username || "",
    }
  },

  getters: {
    isSignedIn: (state) => state.signedIn,
    currentUserId: (state) => state.userId,
    currentUsername: (state) => state.username,
    currentToken: () => localStorage.getItem("token"),
  },

  actions: {
    async signIn(signInRequest, router) {
      try {
        const signInResponse = await signInUseCase(signInRequest);
        
        this.signedIn = true;
        this.userId = signInResponse.id;
        this.username = signInResponse.username;

        const authData = {
          userId: this.userId,
          username: this.username,
          signedIn: this.signedIn,
        };

        localStorage.setItem("token", signInResponse.token);
        localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(authData));

        router.push('/home');

      } catch (error) {
        
        console.error("Error en signIn:", error);
        router.push('/sign-in');
      }
    },

    async signUp(signUpRequest, router) {
      try {
        const signUpResponse = await signUpUseCase(signUpRequest);
        //  Show a success message
        alert(signUpResponse.message || "Sign up successful!");
        router.push('/sign-in');
      } catch (error) {
        console.error("Sign Up error: ", error);
        // Show an error message
        alert(error.message || "Sign up failed. Please try again.");
        router.push('/sign-up');
      }
    },

    async signOut(router) {
      this.signedIn = false;
      
      this.userId = null;
      this.username = "";

      localStorage.removeItem("token");
      localStorage.removeItem(AUTH_STORAGE_KEY);
      
      router.push('/sign-in');
    },
  },
});
