import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { CategoriesModel, UpdateCategoryRequest } from '../models/categories.model'
import { environment } from '../../environments/environment'

@Injectable({
	providedIn: 'root',
})
export class CategoriesService {
	constructor(private http: HttpClient) {}

	getCategories() {
		return this.http.get<CategoriesModel[]>(environment.apiUrl + '/Categories')
	}

	deleteCategory(categoryId: string) {
		return this.http.delete(environment.apiUrl + '/Categories/' + categoryId)
	}

	updateCategory(categoryId: string, model: UpdateCategoryRequest) {
		return this.http.put(environment.apiUrl + '/Categories/' + categoryId, model)
	}

	getCategoryById(categoryId: string) {
		return this.http.get<CategoriesModel>(environment.apiUrl + '/Categories/' + categoryId)
	}
}
