import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { LoginRequest, LoginResponse } from '../models/login.model'
import { environment } from '../../../../environments/environment'

@Injectable({
	providedIn: 'root',
})
export class LoginService {
	constructor(private http: HttpClient) {}

	login(model: LoginRequest) {
		return this.http.post<LoginResponse>(environment.apiUrl + 'auth/login', model)
	}
}
