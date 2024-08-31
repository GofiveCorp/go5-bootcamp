import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CategoriesModel } from '../models/categories.model';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  constructor(private http: HttpClient) {}

  getCategories() {
    return this.http.get<CategoriesModel[]>(
      'https://dev.tks.co.th/codepulseapi/api/Categories',
    );
  }

  deleteCategory(categoryId: string) {
    return this.http.delete(
      'https://dev.tks.co.th/codepulseapi/api/Categories/' + categoryId,
    );
  }
}
