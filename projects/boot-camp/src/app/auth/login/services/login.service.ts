import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { LoginRequest, LoginResponse } from '../models/login.model'
import { environment } from '../../../../environments/environment'
import { User } from '../models/user.model'
import { BehaviorSubject } from 'rxjs'

@Injectable({
	providedIn: 'root',
})
export class LoginService {
	$user: BehaviorSubject<User | undefined> = new BehaviorSubject<User | undefined>(undefined)

	constructor(private http: HttpClient) {}

	login(model: LoginRequest) {
		return this.http.post<LoginResponse>(environment.apiUrl + 'auth/login', model)
	}

	setUser(user: User) {
		this.$user.next(user)

		localStorage.setItem('user-email', user.email!)
		localStorage.setItem('user-roles', user.roles.join(','))
	}
}
