/**
 * Sign up request
 * @summary
 * Represents a sign-up request
 */
export class SignUpRequest {
  
  /**
   * Constructor
   * @param {string} fullname - The full name
   * @param {string} username - The username
   * @param {string} password - The password
   */
  constructor(fullname, username, password) {
    this.fullname = fullname;
    this.username = username;
    this.password = password
  }
}