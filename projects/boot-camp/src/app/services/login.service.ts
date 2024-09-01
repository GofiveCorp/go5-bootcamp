import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { LoginRequest, LoginResponse } from '../models/login-request.model'
import { environment } from '../../environments/environment'
import { User } from '../models/user.model'
import { BehaviorSubject } from 'rxjs'
import { CookieService } from 'ngx-cookie-service'

@Injectable({
	providedIn: 'root',
})
export class LoginService {
	$user = new BehaviorSubject<User | undefined>(undefined)
	constructor(
		private http: HttpClient,
		private cookieService: CookieService,
	) {}

	login(model: LoginRequest) {
		return this.http.post<LoginResponse>(environment.apiUrl + '/auth/Login', model)
	}

	setUser(user: User) {
		this.$user.next(user)
		localStorage.setItem('user-email', user.email)
		localStorage.setItem('user-roles', user.roles.join(','))
	}

	getUser() {
		const email = localStorage.getItem('user-email')
		const roles = localStorage.getItem('user-roles')

		if (email && roles) {
			return {
				email,
				roles: roles.split(','),
			}
		}
		return undefined
	}

	logout() {
		localStorage.clear()
		this.cookieService.delete('Authorization', '/')
		this.$user.next(undefined)
	}

	user() {
		return this.$user.asObservable()
	}
}
