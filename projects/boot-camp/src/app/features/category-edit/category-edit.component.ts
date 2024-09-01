import { Component } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { Subscription } from 'rxjs'
import { CategoriesService } from '../../services/categories.service'
import { CategoryRequest } from '../../models/categories.model'
import { FormsModule } from '@angular/forms'

@Component({
	selector: 'app-category-edit',
	standalone: true,
	imports: [FormsModule],
	templateUrl: './category-edit.component.html',
	styleUrl: './category-edit.component.scss',
})
export class CategoryEditComponent {
	public id: string = ''
	private _param?: Subscription
	private _update?: Subscription
	private _get?: Subscription

	public category: CategoryRequest = new CategoryRequest()
	constructor(
		private activeRoute: ActivatedRoute,
		private categoriesService: CategoriesService,
		private router: Router,
	) {
		this._param = this.activeRoute.paramMap.subscribe({
			next: (params) => {
				this.id = params.get('id') || ''
        this.getCategoryById()
			},
		})
	}

  getCategoryById() {
    this._get = this.categoriesService.getCategoryById(this.id).subscribe({
      next: (res) => {
        this.category = res
      },
      error: (err) => {
        console.log('err => ', err)
      },
    })
  }

	updateCategory() {
		const updateCategoryRequest = { name: this.category.name, urlHandle: this.category.urlHandle }
		this._update = this.categoriesService.updateCategory(this.id, updateCategoryRequest).subscribe({
			next: () => {
				this.router.navigateByUrl('/categories')
			},
			error: (err) => {
				console.log('err => ', err)
			},
		})
	}

	ngOnDestroy() {
		this._param?.unsubscribe()
		this._update?.unsubscribe()
    this._get?.unsubscribe()
	}
}
