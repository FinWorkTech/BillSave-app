import { defineStore } from "pinia";
import { signInUseCase } from "../../application/sign-in.usecase.js";
import { signUpUseCase } from "../../application/sign-up.usecase.js";

export const useAuthenticationStore = defineStore("authentication", {
  
  state: () => ({ signedIn: false, userId: null, username: "" }),

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

        localStorage.setItem("token", signInResponse.token);
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
      
      router.push('/sign-in');
    },
  },
});
