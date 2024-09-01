import { Component } from '@angular/core'
import { RouterLink } from '@angular/router'
import { LoginService } from '../../auth/login/services/login.service'
import { Subscription } from 'rxjs'
import { User } from '../../auth/login/models/user.model'

@Component({
	selector: 'app-nav-bar',
	standalone: true,
	imports: [RouterLink],
	templateUrl: './nav-bar.component.html',
	styleUrl: './nav-bar.component.scss',
})
export class NavBarComponent {
	private _user?: Subscription

	public user: User | undefined
	constructor(private loginService: LoginService) {
		this._user = this.loginService.$user.subscribe({
			next: (user) => {
				this.user = user

				console.log('this.user => ', user)
			},
		})
	}

	ngDestroy() {
		this._user?.unsubscribe()
	}
}
