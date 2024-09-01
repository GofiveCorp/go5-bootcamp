import { inject } from '@angular/core'
import { CanActivateFn, Router } from '@angular/router'
import { CookieService } from 'ngx-cookie-service'
import { LoginService } from '../services/login.service'
import { jwtDecode } from "jwt-decode";

export const authGuard: CanActivateFn = (route, state) => {
	const cookieService = inject(CookieService)
	const loginService = inject(LoginService)
	const router = inject(Router)
  const user = loginService.getUser()

	const hasToken = cookieService.check('Authorization')

  if(hasToken && user) {
    var token = cookieService.get('Authorization')
    var decodedToken = jwtDecode(token)
    var expiration = decodedToken.exp
    var now = Date.now()
    if (now > expiration! * 1000) {
      loginService.logout()
      return router.navigateByUrl('/login')
    } else {
      if(user.roles) {

      }
      return hasToken
    }
  } else {
    loginService.logout()
		return router.navigateByUrl('/login')
  }
}
