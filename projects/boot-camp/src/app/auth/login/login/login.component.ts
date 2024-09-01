import { Component } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { LoginRequest } from '../models/login.model'

@Component({
	selector: 'app-login',
	standalone: true,
	imports: [FormsModule],
	templateUrl: './login.component.html',
	styleUrl: './login.component.scss',
})
export class LoginComponent {
	model: LoginRequest = {
		email: '',
		password: '',
	}

	onLogin() {}
}
