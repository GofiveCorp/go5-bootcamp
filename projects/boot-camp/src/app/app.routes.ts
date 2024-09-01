import { Routes } from '@angular/router'
import { authGuard } from './auth/login/auth.guard'

export const routes: Routes = [
	{
		path: 'categories',
		loadComponent: () => import('./features/categories/categories.component').then((m) => m.CategoriesComponent),
		canActivate: [authGuard],
	},
	{
		path: 'categories/add',
		loadComponent: () => import('./features/category-add/category-add.component').then((m) => m.CategoryAddComponent),
		canActivate: [authGuard],
	},
	{
		path: 'login',
		loadComponent: () => import('./auth/login/login/login.component').then((m) => m.LoginComponent),
	},
]
