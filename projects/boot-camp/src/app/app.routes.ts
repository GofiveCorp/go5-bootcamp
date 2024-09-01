import { Routes } from '@angular/router'

export const routes: Routes = [
	{
		path: 'categories',
		loadComponent: () => import('./features/categories/categories.component').then((m) => m.CategoriesComponent),
	},
	{
		path: 'categories/add',
		loadComponent: () => import('./features/category-add/category-add.component').then((m) => m.CategoryAddComponent),
	},
	{
		path: 'login',
		loadComponent: () => import('./auth/login/login/login.component').then((m) => m.LoginComponent),
	},
]
