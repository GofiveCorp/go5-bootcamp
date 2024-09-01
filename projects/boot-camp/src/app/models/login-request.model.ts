export class LoginRequest {
	email?: string
	password?: string
}

export interface LoginResponse {
  token: string
  email: string
  roles: string[]
}
