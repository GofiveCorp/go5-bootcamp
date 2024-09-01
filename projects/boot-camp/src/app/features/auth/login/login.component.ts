import { Component } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { LoginRequest, LoginResponse } from '../../../models/login-request.model'
import { LoginService } from '../../../services/login.service'
import { Subscription } from 'rxjs'
import { CookieService } from 'ngx-cookie-service'
import { Router } from '@angular/router'

@Component({
	selector: 'app-login',
	standalone: true,
	imports: [FormsModule],
	templateUrl: './login.component.html',
	styleUrl: './login.component.scss',
})
export class LoginComponent {
	loginModel: LoginRequest = new LoginRequest()
	private _login?: Subscription
	constructor(
		private loginService: LoginService,
		private cookieService: CookieService,
		private router: Router,
	) {}
	onLogin() {
		this._login = this.loginService.login(this.loginModel).subscribe({
			next: (res: LoginResponse) => {
				this.cookieService.set('Authorization', `Bearer ${res.token}`, undefined, '/', undefined, true, 'Strict')
				this.loginService.setUser({
					email: res.email,
					roles: res.roles,
				})
				this.router.navigateByUrl('/')
			},
		})
	}

	ngOnDestroy() {
		this._login?.unsubscribe()
	}
}
