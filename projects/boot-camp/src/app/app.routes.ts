import { Routes } from '@angular/router'
import { authGuard } from './guards/auth.guard'

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
		path: 'categories/:id',
		loadComponent: () =>
			import('./features/category-edit/category-edit.component').then((m) => m.CategoryEditComponent),
    canActivate: [authGuard],
	},
	{
		path: 'blog-post',
		loadComponent: () => import('./features/blog-post/blog-post.component').then((m) => m.BlogPostComponent),
    canActivate: [authGuard],
	},
	{
		path: 'blog-post/add',
		loadComponent: () => import('./features/blog-post-add/blog-post-add.component').then((m) => m.BlogPostAddComponent),
		canActivate: [authGuard],
	},
	{
		path: 'login',
		loadComponent: () => import('./features/auth/login/login.component').then((m) => m.LoginComponent),
	},
]
