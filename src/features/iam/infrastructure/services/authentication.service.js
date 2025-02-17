import http from "@shared/services/http-common.js";
import { IAuthenticationService } from "../../domain/services/authentication.service.interface.js";

export class AuthenticationService extends IAuthenticationService {

  resourceEndPoint = "/authentication";
  
  /**
   * Sign in
   * @summary
   * This method calls the sign-in API.
   * @param signInRequest {SignInRequest} - The sign-in request
   * @returns {Promise<http.AxiosResponse<SignInResponse>>} - The sign-in response
   */
  signIn(signInRequest) {
    return http.post(`${this.resourceEndPoint}/sign-in`, signInRequest);
  }
  
  /**
   * Sign up
   * @summary
   * This method calls the sign-up API.
   * @param signUpRequest {SignUpRequest} - The sign-up request
   * @returns {Promise<http.AxiosResponse<SignUpResponse>>} - The sign-up response
   */
  signUp(signUpRequest) {
    return http.post(`${this.resourceEndPoint}/sign-up`, signUpRequest);
  }
}