import { Component } from '@angular/core'
import { Router, RouterLink } from '@angular/router'
import { LoginService } from '../../services/login.service'
import { Subscription } from 'rxjs'
import { User } from '../../models/user.model'

@Component({
	selector: 'app-nav-bar',
	standalone: true,
	imports: [RouterLink],
	templateUrl: './nav-bar.component.html',
	styleUrl: './nav-bar.component.scss',
})
export class NavBarComponent {
	private _user?: Subscription

	public user?: User
	constructor(
		private loginService: LoginService,
		private router: Router,
	) {}
	ngOnInit() {
		this._user = this.loginService.user().subscribe({
			next: (response) => {
				this.user = response
			},
		})

    this.user = this.loginService.getUser()
	}

	onLogout() {
		this.loginService.logout()
		this.router.navigateByUrl('/')
	}

	ngOnDestroy() {
		this._user?.unsubscribe()
	}
}
