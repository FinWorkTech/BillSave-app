/**
 * @interface IAuthenticationService
 * Define el contrato para el servicio de autenticación.
 */
export class IAuthenticationService {
  /**
   * Realiza el sign-in.
   * @param {SignInRequest} signInRequest - La solicitud de sign-in.
   * @returns {Promise<SignInResponse>}
   */
  signIn(signInRequest) {
    throw new Error("Method 'signIn' must be implemented.");
  }

  /**
   * Realiza el sign-up.
   * @param {SignUpRequest} signUpRequest - La solicitud de sign-up.
   * @returns {Promise<SignUpResponse>}
   */
  signUp(signUpRequest) {
    throw new Error("Method 'signUp' must be implemented.");
  }
}
