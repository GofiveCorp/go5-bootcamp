import { Component } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { AddBlogPost } from '../../models/add-blog-post.model'
import { BlogPostsService } from '../../services/blog-posts.service'
import { Subscription } from 'rxjs'
import { CategoriesService } from '../../services/categories.service'
import { CategoriesModel } from '../../models/categories.model'
import { MarkdownModule } from 'ngx-markdown'

@Component({
	selector: 'app-blog-post-add',
	standalone: true,
	imports: [FormsModule, MarkdownModule],
	templateUrl: './blog-post-add.component.html',
	styleUrl: './blog-post-add.component.scss',
})
export class BlogPostAddComponent {
	public blogPost: AddBlogPost = new AddBlogPost()
	public categories: CategoriesModel[] = []
	private _addBlogPost?: Subscription
	private _getCategories?: Subscription
	constructor(
		private blogPostService: BlogPostsService,
		private categoriesService: CategoriesService,
	) {}

	ngOnInit() {
		this.getCategories()
	}
	getCategories() {
		this._getCategories = this.categoriesService.getCategories().subscribe({
			next: (res) => {
				this.categories = res
				console.log('res => ', res)
			},
			error: (err) => {
				console.log('err => ', err)
			},
		})
	}
	addBlogPost() {
		this._addBlogPost = this.blogPostService.addBlogPost(this.blogPost).subscribe({
			next: (res) => {
				console.log('res => ', res)
			},
			error: (err) => {
				console.log('err => ', err)
			},
		})
	}

	ngOnDestroy() {
		this._addBlogPost?.unsubscribe()
		this._getCategories?.unsubscribe()
	}
}
