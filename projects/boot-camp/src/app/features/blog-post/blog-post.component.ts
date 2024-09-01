import { Component } from '@angular/core'
import { RouterLink } from '@angular/router'
import { BlogPostsService } from '../../services/blog-posts.service'
import { Subscription } from 'rxjs'
import { AsyncPipe } from '@angular/common'
import { BlogPostModel } from '../../models/add-blog-post.model'

@Component({
	selector: 'app-blog-post',
	standalone: true,
	imports: [RouterLink, AsyncPipe],
	templateUrl: './blog-post.component.html',
	styleUrl: './blog-post.component.scss',
})
export class BlogPostComponent {
	private _blogPosts?: Subscription

	public blogPosts: BlogPostModel[] = []
	constructor(private blogPostsService: BlogPostsService) {}
	ngOnInit() {
		this._blogPosts = this.blogPostsService.getBlogPosts().subscribe({
			next: (res) => {
				this.blogPosts = res
				console.log('res => ', res)
			},
		})
	}

	ngOnDestroy() {
		this._blogPosts?.unsubscribe()
	}
}
