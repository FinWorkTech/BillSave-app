import { AuthenticationService } from "../infrastructure/services/authentication.service.js";
import { SignUpResponse } from "../domain/model/sign-up.response.js";

const authenticationService = new AuthenticationService();

export async function signUpUseCase(signUpRequest) {
  
  const response = await authenticationService.signUp(signUpRequest);

  // Create a SignUpResponse object from the response data
  const signUpResponse = new SignUpResponse(response.data.message);

  return signUpResponse;
}
