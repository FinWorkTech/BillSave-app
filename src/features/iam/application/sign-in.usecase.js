import { AuthenticationService } from "../infrastructure/services/authentication.service.js";
import { SignInResponse } from "../domain/model/sign-in.response.js";

const authenticationService = new AuthenticationService();

export async function signInUseCase(signInRequest) {
  
  const response = await authenticationService.signIn(signInRequest);

  // Create a SignInResponse object from the response data
  const signInResponse = new SignInResponse(
    response.data.id,
    response.data.username,
    response.data.token
  );

  return signInResponse;
}
